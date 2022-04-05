import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';








function Chicken() {

	const [data, setData] = useState([]);

	useEffect(() => {
		submitHandler()
	}, [])

	const submitHandler = () => {
		// e.preventDefault();
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`).then(
			response => response.json()
		)
			.then((res) => {
				console.log(res.meals);
				setData(res.meals)
			})
	}
	return (
		<div>



			<Container>
				<Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
					{data.map(recipe =>
						<Col style={{ textAlign: 'center', border: '1px solid #bbb', width: '301px', margin: '10px', borderRadius: '20px' }}>
							<div class="card mb-3" style={{ borderRadius: '20px' }}>
								<div>
									<img class="card-img" src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "300px", borderTopRightRadius: '20px', borderTopLeftRadius: '20px', objectFit: 'cover' }} />
								</div>
								<div class="card-body">
									<h5 class="card-title" >{recipe.strMeal}</h5>
								</div>
							</div>
						</Col>)}
				</Row>
			</Container>
		</div>
	)
}

export default Chicken