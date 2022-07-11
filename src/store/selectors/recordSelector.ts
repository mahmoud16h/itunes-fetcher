import {RootState} from "../index";

export const recordSelector = (state: RootState) => state.records;
export const recordsListSelector = (state: RootState) => recordSelector(state).recordList;
export const recordsLoadingSelector = (state: RootState) => recordSelector(state).loading;
