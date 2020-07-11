import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CategoryNavigation extends Component {
	render() {
		return (
			<nav className="nav flex-column p-3">
				<NavLink className="nav-link btn-primary" to="/gallery/">Todos</NavLink>
				<NavLink className="nav-link btn-primary" to="/gallery/carros">Carros</NavLink>
				<NavLink className="nav-link btn-primary" to="/gallery/pets">Pets</NavLink>
				<NavLink className="nav-link btn-primary" to="/gallery/motos">Motos</NavLink>
			</nav>
		);
	}
}
export default CategoryNavigation;