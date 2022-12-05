# Setup Implementation

Using an AWS t2.micro instance

Open tcp ingress access for ssh, http and https

Install nginx and configure nginx using the [config](nginx.conf)

Install certbot and provision SSL certification

# Setup Docker and Docker compose

[frontend](../frontend/Dockerfile)
[backend](../Backend/Dockerfile)
[docker compose](../docker-compose.yml)

# Automation

[CI/CD](../.github/workflows/deploy.yml)

# Setup Dreambooth
A server is configured using the (ansible playbook)[./dreambooth-setup/ansible/deploy-dreambooth.yml]

---

Our solution makes use of [joepenna's](https://github.com/JoePenna) dreambooth [repo](https://github.com/JoePenna/Dreambooth-Stable-Diffusion)

Dreambooth is exposed via REST API endpoint using an [express server](./dreambooth-setup/dreambooth-server)

A POST method in the express server calls a [bash script](./dreambooth-setup/scripts/beginTraining.sh) on the server

The script runs the commands to train our model and and send our user an email after training is done.

Another endpoint on the server is called to GET the zipped generated images and send to another endpoint as a byte stream. This next (external) endpoint should save the zipped file on s3.