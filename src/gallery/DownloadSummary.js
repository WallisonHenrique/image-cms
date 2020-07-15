import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DownloadSummary extends Component {
	itemsDownload = (num) => {
		if(!num)
			return false
		else if(num > 1)
			return <span>{ num } itens</span>
		else
			return <span>{ num } item</span>
	}

	render() {
		const { downloadItems } = this.props;
		return (
			<div className="DownloadSummary float-right">
				<small>
					{ this.itemsDownload(downloadItems) }
					<Link className={`btn btn-sm bg-dark text-white ${!downloadItems ? 'disabled' : ''}`} to="/downloads">
						<i className="fas fa-download"></i>
					</Link>
				</small>
			</div>
		);
	}
}
export default DownloadSummary;