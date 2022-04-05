import React from 'react'
import carousel from '../Components/carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';

function Carousel() {
	return (
		<div className='Slider' style={{ marginTop: '', backgroundColor: 'red', }}>

			<Slider autoplay={true} autoplaySpeed={2000} dots infinite style={{ zIndex: '1' }}>
				<div>

					<img src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" alt="" style={{ width: '100%', height: '50vh' }} />

				</div>
				<div>
					<img src="https://b.zmtcdn.com/data/pictures/chains/3/19491833/13572b7a734867e7fb41af440f11ffc4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" style={{ width: '100%', height: '50vh' }} />
				</div>

				<div>
					<img src="https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe.jpg" alt="" style={{ width: '100%', height: '50vh' }} />
				</div>
				<div>
					<img src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/69649130_479487559560621_1934881937919311872_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=NOYxwM3U6csAX-Yactg&_nc_ht=scontent.fhyd1-4.fna&oh=00_AT_KV0MM2p1FGwJO_JdlZZUFgDLH2p6gZOG4vBW9ssdpzQ&oe=6250A627" alt="" style={{ width: '100%', height: '50vh' }} />
				</div>
			</Slider>
		</div>
	)
}

export default Carousel