import { createSlice } from '@reduxjs/toolkit'
import { fetchRecords } from "../actions/recordsActions";
import {RecordType} from "../../components/recordCard";

interface RecordsState {
    recordList: RecordType[],
    loading: boolean,
    error: string
}

const initialState = {
    recordList: [],
    loading: false,
    error: ''
} as RecordsState

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        reset(state) {
            state.recordList = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecords.pending, (state) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchRecords.fulfilled, (state, action) => {
            const { meta: { arg: { page } } } = action;
            state.recordList = page && page > 0 ? [...state.recordList, ...action.payload.results] : action.payload.results
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchRecords.rejected, (state) => {
            state.loading = false
            state.error = "failed to fetch"
        })
    },
})

export const { reset } = recordsSlice.actions
export default recordsSlice.reducer