import React, { Component } from 'react';
import ToggleLink from './ToggleLink';

class CategoryNavigation extends Component {
	render() {
		return (
			<nav className="nav flex-column p-3">
				<ToggleLink to={`${this.props.baseUrl}/todos`} exact={false}>Todos</ToggleLink>
				{this.props.categories && this.props.categories.map((cat)=>
					<ToggleLink key={cat} to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>{ cat }</ToggleLink>
				)}
			</nav>
		);
	}
}
export default CategoryNavigation;