import React from 'react'
import carousel from '../Components/carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';

function Carousel() {
	return (
		<div className='Slider' style={{ marginBottom: '30px', }}>

			<Slider autoplay={true} autoplaySpeed={2000} dots infinite style={{ zIndex: '1' }}>
				<div>

					<img src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" alt="" style={{ width: '100%', height: '75vh' }} />

				</div>
				<div>
					<img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F10%2F21%2Fgrilled-tandoori-chicken-FT-RECIPE1021.jpg" alt="" style={{ width: '100%', height: '75vh' }} />
				</div>

				<div>
					<img src="https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe.jpg" alt="" style={{ width: '100%', height: '75vh' }} />
				</div>

			</Slider>
		</div>
	)
}

export default Carousel