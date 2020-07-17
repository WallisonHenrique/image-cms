import { createStore, applyMiddleware } from "redux";
import { GalleryReducer } from './GalleryReducer';
import { DownloadReducer } from './DownloadReducer';
import { CommonReducer } from './CommonReducer';
import { asyncActions } from "./AsyncMiddleware";

export const ImageCMSDataStore = createStore(CommonReducer(GalleryReducer, DownloadReducer), 
	applyMiddleware(asyncActions));