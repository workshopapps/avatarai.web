import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './DD2.css';
import '../desktop_4/DD4.css';
import arrowRightMobile from './arrow-right-mobile.svg';
import arrowRightDesktop from './arrow-right-desktop.svg';
import GrayLine from './../DASHBOARD_COMPONENT/img/gray-rect.svg';
import PurpleLine from './../DASHBOARD_COMPONENT/img/purple-rect.svg';
import upload from './upload.svg';
import { v4 as uuidv4 } from 'uuid';
import GeneratingAvatar from '../desktop_5/GeneratingAvatar';
import { Link } from 'react-router-dom';
import Button from '../landingPage/Button/Button.jsx';
import three from './line.png';
// import Background from "./../DASHBOARD_COMPONENT/dashboardcomp";
import Content from '../Desktop_3/Content';

// import axios from "axios";

// import * as mime from 'mime'

// import * as mime from 'mime'

const ImageUpload = ({ setStep, step, photoUser }) => {
	const [selectedImages, setSelectedImages] = useState([]);
	const [size, setSize] = useState(window.innerWidth);
	const [imageUpload, setImageUpload] = useState({ file: null });
	const [genAvt, setGenAvt] = useState(false);
	const [showAlertLink, setShowAlertLink] = useState(false);
	const [preview, setPreview] = useState(false);
	const [files, setFiles] = useState();
	let addFile = false;

	const labelText = `(PNG or JPEG)`;

	const handleFile = (e) => {
		let file = e.target.files;
		console.log(file)
		setImageUpload({ file: file });
		const selectedFilesArray = Array.from(file);
		// console.log(selectedFilesArray);
		const imagesArray = selectedFilesArray.map((file) => {
			return URL.createObjectURL(file);
		});
		setSelectedImages((previousImages) => previousImages.concat(imagesArray));
		setShow(false);
		setShowAlertLink(!showAlertLink);
	};


	const handleFilee = (e) => {
		let file = e.target.files;
		console.log(file)
		setFiles(file)
		console.dir("e.target: ");
		console.dir(e.target);
		setImageUpload({ file: file });
		const selectedFilesArray = Array.from(file);
		const imagesArray = selectedFilesArray.map((file) => {
			console.log("File: ", file)
			return URL.createObjectURL(file);
		});
		setSelectedImages((previousImages) => previousImages.concat(imagesArray));
		setShow(false);
		// setShowAlertLink(!showAlertLink);
		console.log("file: ", file);
		console.log("imageUpload: ", imageUpload);
		console.log('SELECTED IMAGES: ', selectedImages);
	};

	const sendImages = async () => {
		const user = JSON.parse(localStorage.getItem('userData'));
		// const data = { file: selectedImages, email: user.email };
		console.dir(Array.from(imageUpload.file))
		const fileList = Array.from(imageUpload.file).map((file) => {
			return {
				rawFile: {
					type: file.type,
					size: file.size,
				},
				name: file.name,
				src: URL.createObjectURL(file),
			}
		})
		console.log("fileList: ", fileList)
		// const data = { file: Array.from(imageUpload.file), email: user.email };
		const data = { file: fileList, email: user.email };
		const formdata = new FormData();
		console.log(files)
		// files.forEach((file)=>{
		for (let i = 0; i < files.length; i++) {
			formdata.append("file", files[i])
		}
		// })
		// formdata.append(
		// 	"filename",
		// 	"file:////home/de-marauder/Downloads/essie-jks/essie-jks/essie1.jpg"
		// 	// data.file,
		// )
		// formdata.append(
		// 	"email",
		// 	data.email,
		// // )
		// console.log('data: ', data);
		// console.log('data.file.file[0]: ', Array.from(imageUpload.file));
		// console.log('data.file[0]: ', data.file[0].type);
		setGenAvt(true);
		// let file = {
		// 	"height": 512,
		// 	"type": "image/jpeg",
		// 	"uri": "file:////home/de-marauder/Downloads/essie-jks/essie-jks/essie1.jpg",
		// 	"width": 512,
		// }
		// file = {
		// 	...file,
		// 	// type: mime.getType(file.uri),
		// 	name: file.uri.split('/').pop()
		// }
		// console.log(formdata)
		await axios
			.post('https://zuvatar.hng.tech/api/v1/avatar',
				formdata,
				// data,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						// 'Content-Type': `${file.type}`,
						// 'Content-Type': `${file.type}`,
						Accept: 'application/json',
					},
				})
			.then((response) => {
				console.log('upload data: ', response.data);
				setGenAvt(false);
				setStep(step + 1);
			})
			.catch((e) => {
				setGenAvt(false);
				const err = e?.response?.data;
				// setErrorStatus({ error: true, message: err });
				console.log(err);
			});
	};

	const handleUpload = (e) => {
		let file = imageUpload;
		console.log(file);
		let formdata = new FormData();
		formdata.append('file', selectedImages);
		formdata.append('email', user.email);
		formdata.append('photo_class', photoUser);

		let result = await fetch(`${import.meta.env.VITE_API_URL}/photos`, {
			method: 'POST',
			// body: JSON.stringify(formdata),
			headers: {
				'Content-Type': 'multipart/form-data',
				Accept: 'application/json',
			},
			data: formdata,
		}).then(
			(res) => { },
			(err) => { }
		);
	};

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		let timeout;
		if (showAlertLink) {
			timeout = setTimeout(() => {
				setShowAlertLink((current) => !current);
				setPreview(true);
			}, 5000);
		}
		return () => clearTimeout(timeout);
	}, [showAlertLink]);

	useEffect(() => {
		window.addEventListener('resize', checkSize);
	}, []);
	const [show, setShow] = useState(true);
	const click = (event) => {
		setShow((current) => !current);
	};
	// const [preview, setPreview] = useState();

	return (
		<div className="w-full h-full relative overflow-x-hidden">
			{!showAlertLink && !preview && (
				<div style={{ display: show ? 'block' : 'none' }} className="aso-dd2-content-container">
					<div className="aso-dd2-top w-full">
						<div className="link absolute" onClick={() => setStep(step - 1)}>
							<div className="previous-page ">
								{size < 760 ? (
									<img src={arrowRightMobile} alt="share icon" />
								) : (
									<img src={arrowRightDesktop} alt="share icon" />
								)}
							</div>
						</div>

						<div className="flex items-center justify-center gap-3 w-full">
							<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
							<img src={PurpleLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px] " />
							<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
						</div>
					</div>

					<h1>Upload your Pictures</h1>
					<p className="aso-dd2-p">You can upload files like PNG, JPG, PDF, WEBP are supported</p>
					<form action="" className="aso-dd2-form">
						<div className="aso-dd2-input">
							<input accept="image/*" multiple type="file" name="file" id="file" onChange={handleFile} />
							<label htmlFor="file" className="aso-dd2-label">
								<img src={upload} alt="" />
								<br />
								<p> Drag and drop or click here to upload file</p>
								{/* {labelText} */}
							</label>
						</div>
						<Button type="button" className="aso-dd2-btn">
							Upload
						</Button>
					</form>
				</div>
			)}
			{showAlertLink && (
				<div className="flex flex-col items-center w-full h-full justify-center">
					<div className="grow">
						<Content />
					</div>
				</div>
			)}
			{preview && !showAlertLink && (
				<>
					{genAvt ? (
						<GeneratingAvatar />
					) : (
						<div className="vic_content">
							<div className="aso-dd2-top w-full">
								<div className="absolute" onClick={() => setStep(step - 1)}>
									<div className="previous-page">
										{size < 760 ? (
											<img src={arrowRightMobile} alt="share icon" />
										) : (
											<img src={arrowRightDesktop} alt="share icon" />
										)}
									</div>
								</div>
								{/* <p>2</p> */}
								<div className="md:mb-5 flex items-center justify-center gap-3 w-full">
									<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
									<img src={GrayLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px]" />
									<img src={PurpleLine} alt="" className="w-[50px] md:w-[120px] md:h-[5px] " />
								</div>
							</div>
							<h3>Preview your Images</h3>

							{/* <div className="vic_img_and_direction"> */}
							{/* <img src={left} className="vic_left" /> */}
							<div className="vic_image_preview_div">
								{selectedImages &&
									selectedImages.map((image, index) => {
										return (
											<div
												key={index}
												className="vic_her_div relative cbk-hover"
											// onChange={storeItem(image)}
											>
												<img src={image} className="vic_her w-[120px] h-[125px]" />

												<button
													id="closeSideBar"
													className=" vic_x"
													onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="icon icon-tabler icon-tabler-x"
														width={30}
														height={30}
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="white"
														fill="none"
														strokeLinecap="round"
														strokeLinejoin="round"
														key={image}
													>
														<path stroke="none" d="M0 0h24v24H0z" />
														<line x1={18} y1={6} x2={6} y2={18} />
														<line x1={6} y1={6} x2={18} y2={18} />
													</svg>
												</button>
											</div>
										);
									})}

								<form className="vic-dd2-form">
									<div className="aso-dd2-input">
										<input
											accept="image/*"
											multiple
											type="file"
											name="file"
											id="file"
											// onclick={setPreview(false)}
											onChange={handleFile}
										/>

										<label htmlFor="file">
											{/* <label htmlFor="file" className="aso-dd2-label"> */}
											<img src={upload} alt="" />
										</label>
									</div>
								</form>
							</div>
							{/* <img src={right} className="vic_right" /> */}
							{/* </div> */}
							<div className="vic_div_div w-full">
								<div className="vic_link w-full" onClick={sendImages}>
									<Button className="bg-[#8B70E9] w-100 w-lg-120 text-white" children="Generate Avatar" />
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default ImageUpload;
