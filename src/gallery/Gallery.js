import React, { Component } from 'react';
import ImageList from './ImageList';
import DownloadSummary from './DownloadSummary';
import CategoryNavigation from './CategoryNavigation';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.handleAddToDownload = this.handleAddToDownload.bind(this);

	}

	handleAddToDownload(checked, image) {
		if ( checked )
			this.props.removeFromDownload(image);
		else
			this.props.addToDownload(image, 1);
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<header className="col bg-dark text-white">
						<h1 className="navbar-brand">Image CMS</h1>
						<DownloadSummary { ...this.props } />
					</header>
				</div>
				<div className="row">
					<div className="col-2">
						<CategoryNavigation />
					</div>
					<div className="col">
						<div className="row">
							<ImageList images={this.props.images} queue={this.props.downloadQueue} callback={ this.handleAddToDownload } />
						</div>
					</div>
				</div>
			</div>
		);
	};
}
export default Gallery;