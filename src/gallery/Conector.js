import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import DownloadQueue from './DownloadQueue';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { addToDownload, removeFromDownload } from '../data/DownloadActionCreators';

class Conector extends Component {
	componentDidMount() {
		const params = {
            _limit: 5,
            _sort: "name",
            _page: 1,
            category_like: ""
        }        
		this.props.loadData('images', params);
		this.props.loadData('categories');
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
					<Gallery { ...this.props } images={this.filterImages(this.props.images, routeProps.match.params.category)} />
				} />
				<Route path="/downloads" render={ (routeProps)=>
					<DownloadQueue { ...this.props }/>
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
	loadData, addToDownload, removeFromDownload
});


export default connect( mapStateToProps, mapDispatchToProps )( Conector );
