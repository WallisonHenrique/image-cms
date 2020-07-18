import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => {
	
	return {
	    ...dataStore, ...router, ...actionCreators,
	    currentPage: Number(router.match.params.page),
	    pageCount: Math.ceil((dataStore.images_total)/(dataStore.pageSize || 1)),
	    navigateToPage: (page) => router.history
	        .push(`/gallery/${router.match.params.category}/${page}`),    
	}
}

export const ImagePageConnector = (PageComponent) => 
    withRouter(connect(mapStateToProps, mapDispatchToProps, 
        mergeProps)(PageComponent))
