import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';

class Conector extends Component {
	componentDidMount() {
		this.props.loadData('IMAGES');
	}

	filterImages(images = [], category) {
		if (!category) return images;
		return images.filter((image) => {
			return image.category.toLowerCase() === category;
		});
	}

	render() {
		return (
			<Switch>
				<Route path="/gallery/:category?" render={(routeProps) => 
					<Gallery images={this.filterImages(this.props.images, routeProps.match.params.category)} />
				} />
				<Redirect to="/gallery" />
			</Switch>
		);
	}
}

const mapStateToProps = dataStore => ({
	...dataStore
});

const mapDispatchToProps = ({
	loadData
});


export default connect( mapStateToProps, mapDispatchToProps )( Conector );
