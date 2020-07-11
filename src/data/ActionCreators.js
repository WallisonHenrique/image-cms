import { data as cmsData } from './placeholderData';
import { ActionTypes, DataTypes } from './Types';

export const loadData = (dataType) => ({
	type: ActionTypes.DATA_LOAD,
	content: {
		dataType: DataTypes[dataType],
		images: cmsData[DataTypes[dataType]]
	}
});