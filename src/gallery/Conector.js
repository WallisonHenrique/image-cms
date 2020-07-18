import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import DownloadQueue from './DownloadQueue';
import {Bait} from './Bait';
import {Thanks} from './Thanks';
import DataSource from '../data/DataSource';
import { connect } from 'react-redux';
import * as GalleryAction from '../data/ActionCreators';
import * as DownloadAction from '../data/DownloadActionCreators';

class Conector extends Component {
	componentDidMount() {
		this.props.loadData('categories');
	}

	render() { 
		return (
			<Switch>
				<Route path="/gallery/:category/:page" render={(routeProps) => 
					<DataSource { ...this.props } { ...routeProps }>
						<Gallery { ...this.props } />
					</DataSource>
				} />
				<Route path="/downloads" render={ (routeProps)=>
					<DownloadQueue { ...this.props }/>
				} />
				<Route path="/bait" render={ (routeProps)=>
					<Bait { ...this.props }/>
				} />
				<Route path="/thanks" render={ (routeProps)=>
					<Thanks { ...this.props }/>
				} />
				<Redirect from="/gallery/:category/" to="/gallery/:category/1" />
				<Redirect to="/gallery/todos/1" />
			</Switch>
		);
	}
}

const mapStateToProps = dataStore => ({
	...dataStore
});

const mapDispatchToProps = ({
	...GalleryAction, ...DownloadAction
});


export default connect( mapStateToProps, mapDispatchToProps )( Conector );
