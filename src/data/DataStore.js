import { createStore, combineReducers } from 'redux';
import { GalleryReducer } from './GalleryReducer';
import { DownloadReducer } from './DownloadReducer';
import { CommonReducer } from './CommonReducer';

export const ImageCMSDataStore = createStore(CommonReducer(GalleryReducer, DownloadReducer));