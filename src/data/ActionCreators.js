import { ActionTypes, DataTypes } from './Types';
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
	type: ActionTypes.DATA_LOAD,
	dataType: dataType,
	payload: dataSource.GetData(dataType, params).then((response) => ({
		dataType,
		data: response.data,
		params
	}))
});