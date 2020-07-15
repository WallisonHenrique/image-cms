import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ToggleLink extends Component {
	render() {
		return <Route path={this.props.to} exact={this.props.exact} children={(routesProps) => {
			const activeClass = routesProps.match ? 'active' : '';

			return <Link className={`nav-link btn-primary ${activeClass}`} to={this.props.to}>
				{this.props.children}
			</Link>
		}} />
	}
}
export default ToggleLink;