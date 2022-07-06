import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { AiFillYoutube, } from 'react-icons/ai';
function Breakfast() {

	useEffect(() => {
		submitHandler('Breakfast')


	}, [])
	const [data, setData] = useState([]);
	const submitHandler = () => {

		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast`).then(
			response => response.json()
		)
			.then((res) => {
				console.log(res.meals);
				setData(res.meals)
			})
	}
	return (
		<>
			<Container>
				<Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
					{data.map(recipe =>
						<Col style={{ textAlign: 'center', height: '250', width: '301px', margin: '10px', borderRadius: '20px' }}>
							<div class="card mb-3 Breakfast" style={{ borderRadius: '20px' }}>
								<div>
									<img class="card-img" src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "300px", borderTopRightRadius: '20px', borderTopLeftRadius: '20px', objectFit: 'cover' }} />
								</div>
								<div class="card-body">
									<h5 class="card-title" >{recipe.strMeal}</h5>
									<div className='ancortags' style={{ display: 'flex', justifyContent: 'space-between', }}>
										< a href={recipe.strSource} target="_blank" rel="noopener noreferrer " > <Button className="link-button" >Read More</Button></a >
										<a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer "><AiFillYoutube className='youtube' style={{ color: 'red', fontSize: '30px' }} /></a>
									</div>
								</div>
							</div>
						</Col>)}
				</Row>
			</Container>
		</>
	)
}

export default Breakfast