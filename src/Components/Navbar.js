import React, { useState } from 'react'
import Stylesheet from '../Components/Stylesheet.css';
import { Link } from 'react-router-dom';
import Navbara from '../Components/Navbara.css';
import { HiMenu } from 'react-icons/hi';




const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false)
	return (
		<>
			<nav className='navbar' style={{ zIndex: '1' }}>
				<h3 className='logo'>My Resturant</h3>
				<ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}

					onClick={() => setIsMobile(false)}>
					<Link to="/" className='home'>
						<li>Home</li>
					</Link>
					<Link to="/breakfast" className='breakfast'>
						<li>Breakfast</li>
					</Link>

					<Link to="/chicken" className='chicken'>
						<li >Chicken</li>
					</Link>
				</ul>
				<button className='mobile-menu-icon'
					onClick={() => setIsMobile(!isMobile)}>
					{isMobile ? (<li className='fas fa-times'></li>
					)
						: (
							<li className='fas fa-bars'></li>
						)
					}
				</button>
			</nav>


		</>
	)
}

export default Navbar