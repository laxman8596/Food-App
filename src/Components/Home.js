import React, { useState, useEffect } from 'react';
import Stylesheet from '../Components/Stylesheet.css';
import { Carousel, Row, Card, Col, Button, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillYoutube, AiFillHeart } from 'react-icons/ai';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/scrollbar';





function Home() {
	const [data, setData] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		submitCHandler()
		submitHandler('beef')

	}, [])

	const submitCHandler = () => {
		// e.preventDefault();
		fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(
			response => response.json()
		)
			.then((res) => {
				console.log(res.categories);
				setCategory(res.categories)
			})
	}







	const submitHandler = (e) => {
		// e.preventDefault();
		console.log({ e })
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`).then(
			response => response.json()
		)
			.then((res) => {
				console.log(res.meals);
				if (res.meals !== null) {
					setData(res.meals)
				}
				else {
					alert("No data for selected found")
				}
			})
	}
	return (

		<>


			<Swiper
				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 1,


					},
					// when window width is >= 768px
					768: {
						width: 768,
						slidesPerView: 2,
					},

					980: {
						width: 980,
						slidesPerView: 3,
					},
				}}
			>
				<div className='row'>
					{
						category !== [] ?
							category.map(recipe =>
								<SwiperSlide>
									<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<div className='col-md-4'>

											<div className='lucky ' style={{ height: '120px', width: '255px', margin: '20px', marginLeft: '75px', border: '1px solid lightgray' }}>

												<div style={{ display: 'flex', justifyContent: 'space-between' }}>
													<div >	<span><img classname='card-img' src={recipe.strCategoryThumb} height="118px" width="110px"
														style={{ backgroundPosition: "center", backgroundSize: 'cover', backgroundSize: 'auto' }} /></span></div>

													<div className="Hello" style={{ backgroundColor: '#FF6347', height: "118px" }}>
														<p class="card-title" style={{ width: '113px', marginBottom: '10px' }}>{recipe.strCategory}</p>

														<Button className="visit" onClick={() => submitHandler(recipe.strCategory)}>Visit More</Button>

														<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }} >
															<div><span className='heart'><AiFillHeart /></span></div>
															<div style={{ fontSize: '15px' }}>
																<span className="StarFill" ><BsStarFill /></span>
																<span className="StarFill"><BsStarFill /></span>
																<span className="StarFill"><BsStarFill /></span>
																<span className="StarHalf"><BsStarHalf /></span>
																<span className="StarHalf"><BsStarHalf /></span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
							:
							null

					}
				</div>
			</Swiper>



			< Container fluid="md" style={{ display: 'flex', marginLeft: '45px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }} >

				{data !== [] ?
					data.map(recipe =>

						<Col className='foodCard'  >
							<div style={{ maxWidth: '250px', }}>
								<div>
									<div>

										<img class="card-img" src={recipe.strMealThumb} alt={recipe.strMeal} style={{
											width: "250px",
											height: '200px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', objectFit: 'cover'
										}} />

									</div>
									<div>
										<div class="card-body" style={{ textAlign: 'center' }}>
											<h5 class="card-title" >{recipe.strMeal}</h5>
											<p class="card-text"></p>
											<div className='ancortags' style={{ display: 'flex', justifyContent: 'space-between', }}>
												< a href={recipe.strSource} target="_blank" rel="noopener noreferrer " > <Button className="link-button" >Read More</Button></a >
												<a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer "><AiFillYoutube className='youtube' style={{ color: 'red', fontSize: '30px' }} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>


					)
					:
					null
				}

			</Container >


		</>


	)
}

export default Home

	// map code sorce

