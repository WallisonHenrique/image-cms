import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DownloadSummary extends Component {
	render() {
		const { downloadItems } = this.props;
		return (
			<div className="DownloadSummary float-right">
				<small>
					{ downloadItems > 0 && <span>{ downloadItems } item(s)</span> }
					<Link className={`btn btn-sm bg-dark text-white ${!downloadItems ? 'disabled' : ''}`} to="/downloads">
						<i className="fas fa-download"></i>
					</Link>
				</small>
			</div>
		);
	}
}
export default DownloadSummary;