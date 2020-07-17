import { ActionTypes } from './Types';
export const GalleryReducer = (storeData, action) => {
	switch(action.type) {
		case ActionTypes.DATA_LOAD:
			console.log('reducer', action.payload.data);
			return { ...storeData, [action.payload.dataType]: action.payload.data };
		default: 
			return storeData || {};
	}
}