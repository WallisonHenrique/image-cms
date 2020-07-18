import React, { Component } from 'react';
import { DataTypes } from './Types';

class DataSource extends Component {
	
	getData = () => {
		const dsData = this.props.images_params || {};
		const rtData = {
            _limit: this.props.pageSize || 1,
            _sort: this.props.sortKey || "name",
            _page: this.props.match.params.page || 1,
            category_like: (this.props.match.params.category || "") === "todos" 
                ? "" : this.props.match.params.category
        } 

		if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadData(DataTypes.IMAGES, rtData);
        }
	}

	componentDidMount() {  this.getData(); }

	componentDidUpdate() {  this.getData(); }

	render() {
		return(
			<React.Fragment>
				{ this.props.children }
			</React.Fragment>
		);
	}
}

export default DataSource;