#!/bin/bash

user_email = $1 # First variable passed
class = $2 # Second variable
uid = $3 # Third variable
job_name = "${user_email}-${uid}" # Unique name for a particular training session


# Start training environment
echo "Creating latent diffusion environment"
conda env create -f environment.yaml
conda activate ldm
echo "environment created"

# Generate regularization images based on class

txt2img_path = 'scripts/stable_txt2img.py'
ckpt_path = '/path/to/original/stable-diffusion/sd-v1-4-full-ema.ckpt'
reg_img_prompt = "a photo of a $class"
n_samples = 100 # number of images to generate
reg_data_path = "classes/class-${class}-samples" # Path to save regularization images to

if [ -n "$(ls -A your/dir 2>/dev/null) | tail -1" ]
then
    echo "Regularization images already exist for this class"
else
    echo "No regulariation images. Creating..."
    python $txt2img_path --ddim_eta 0.0 --n_samples $n_samples --n_iter 1 --scale 10.0 --ddim_steps 50  --ckpt $ckpt_path --prompt $reg_img_prompt --outdir $reg_data_path; 
    echo "Regulariation images done creating"
fi


# Traing the model

model_path = '/path/to/original/stable-diffusion/sd-v1-4-full-ema.ckpt'
last_model_path = '/path/to/original/stable-diffusion/last.ckpt'
training_images_path = '/root/to/training/images'
max_steps = 1000
seed = 49

echo "Model training starting..."

python main.py --base configs/stable-diffusion/v1-finetune_unfrozen.yaml \ 
                -t \ 
                --actual_resume $model_path \ 
                --name $job_name \
                --gpus 0, \
                --logdir logs/training/ \
                --max_steps ${max_steps} \
                --seed $seed 
                --data_root $training_images_path \ 
                --reg_data_root $reg_data_path \ 
                --class_word $class

echo "Model training Complete"


# Prune the large model file

python scripts/prune-ckpt.py --ckpt $last_model_path


# Generate samples
gen_img_prompt = "a photo of a $job_name $class"

echo "Image generation starting..."
python $txt2img_path --ddim_eta 0.0 \ 
                --n_samples $n_samples \ 
                --n_iter 4 \ 
                --scale 10.0  \
                --ddim_steps 80 \  
                --ckpt $last_model_path  \
                --prompt $gen_img_prompt

echo "Image generation Complete"

gen_images_path = 'outputs/txt2img-samples/samples' # Change to absolute path
ls -Al ${gen_images_path}

# zip the generated images
zipped_gen_file = ${user_email}-gen-images.zip
zip ${zipped_gen_file} ${gen_images_path}

# Send zipped package as an email to user

echo "Sending zipped_gen_file to ${user_email} as an email..."
if [[ -f ${zipped_gen_file} ]]
then
	mutt -s "Here are your generated avatars. Enjoy!" -- ${user_email}  < "${zipped_gen_file}"
fi

echo "done"
