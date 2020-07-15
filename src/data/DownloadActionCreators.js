import { ActionTypes } from './Types.js'

export const addToDownload = (image, quantity) => ({
	type: ActionTypes.DOWNLOAD_ADD,
	payload: {
		image,
		quantity: quantity || 1
	}
});

export const removeFromDownload = (image) => ({
	type: ActionTypes.DOWNLOAD_REMOVE,
	payload: image
})