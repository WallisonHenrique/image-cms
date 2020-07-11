import React, { Component } from 'react';
import ImageList from './ImageList';
import DownloadSummary from './DownloadSummary';
import CategoryNavigation from './CategoryNavigation';

class Gallery extends Component {
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<header className="col bg-dark text-white">
						<h1 className="navbar-brand">Image CMS</h1>
					</header>
				</div>
				<div className="row">
					<div className="col-2">
						<CategoryNavigation />
					</div>
					<div className="col">
						<div className="row">
							<ImageList {...this.props} />
						</div>
					</div>
				</div>
			</div>
		);
	};
}
export default Gallery;