import { createStore } from 'redux';
import { Reducer } from './Reducer';

export const ImageCMSDataStore = createStore( Reducer );