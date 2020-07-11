import { ActionTypes } from './Types';
export const Reducer = (storeData, action) => {
	switch(action.type) {
		case ActionTypes.DATA_LOAD:
			return { ...storeData, [action.content.dataType]: action.content.images };
		default: 
			return storeData;
	}
}