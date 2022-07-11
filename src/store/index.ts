import { configureStore } from '@reduxjs/toolkit'
import recordsSliceReducer from './slices/recordsSlice'

const store = configureStore({
    reducer: {
        records: recordsSliceReducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch