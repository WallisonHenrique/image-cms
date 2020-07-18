import { ActionTypes } from './Types';

export const DownloadReducer = (storeData, action) => {
	const newStore = { downloadQueue: [], downloadItems: 0, ...storeData };
	switch (action.type) {
		case ActionTypes.DOWNLOAD_ADD:
			const { image, quantity } = action.payload;
			const exist = newStore.downloadQueue.find((item)=> item.image.id === image.id);

			if (!exist) {
				newStore.downloadQueue = [ ...newStore.downloadQueue, { image, quantity } ]
				newStore.downloadItems += quantity;
			}
			
			return newStore;
		case ActionTypes.DOWNLOAD_REMOVE:
			newStore.downloadQueue = newStore.downloadQueue.filter((item) => item.image.id !== action.payload.id);
			newStore.downloadItems -= 1;
			return newStore;
		case ActionTypes.DOWNLOAD_CLEAR:
            return { ...storeData, downloadQueue: [], downloadItems: 0 }
		default: 
			return storeData || {};
	}
}