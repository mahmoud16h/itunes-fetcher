import React from "react";
import * as reactRedux from 'react-redux'
import { fireEvent, render, screen}  from '@testing-library/react'
import useRecordSearch from "./useRecordSearch";
import {RecordType} from "../components/recordCard";

jest.mock('react-redux')
jest.mock('../store/actions/recordsActions', () => ({
    fetchRecords: (props: { searchTerm: string; page: string }) => props,
}))
const mockDispatch = jest.fn()

const mockState = {
    records: {
        recordList: [{ trackName: 'test1' }, { trackName: 'test2' }],
        loading: false
    }
}


const TestComponent = ({ query = '' }) => {
    const { records, isLoading, nextPage, reset } = useRecordSearch(query)

    return (
        <>
            {(records as RecordType[]).map((rec, key) => <div key={key} data-testid="record-element" >{rec.trackName}</div>)}
            <button data-testid="next-button" onClick={() => nextPage(1)}>next page</button>
            <button data-testid="reset-button" onClick={reset}>next page</button>
            {isLoading && <p data-testid="loading-text">loading</p>}
        </>
    )
}

const setup = (state: typeof mockState) => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation((selector) => selector(state))
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => mockDispatch)
    render(<TestComponent query="kanye"/>)
}

it('Should call dispatch searchTerm on initial mount', () => {
    setup(mockState)
    expect(mockDispatch).toHaveBeenCalledWith({ searchTerm: 'kanye'})
});

it('Should dispatch reset action when reset clicked', () => {
    setup(mockState)
    const next = screen.getByTestId('next-button')
    fireEvent.click(next);
    expect(mockDispatch).toHaveBeenCalledWith({page: 1, searchTerm: "kanye"})
});

it('Should dispatch with page 1 when next page fired', () => {
    setup(mockState)
    const reset = screen.getByTestId('reset-button')
    fireEvent.click(reset);
    expect(mockDispatch).toHaveBeenCalledWith({type: "records/reset" })
});

it('Should return 2 record elements from the store', () => {
    setup(mockState)
    const records = screen.getAllByTestId('record-element')
    expect(records.length).toBe(2)
});

it('Should not render loading when loading is false in store', () => {
    setup(mockState)
    const loadingText = screen.queryByTestId('loading-text')
    expect(loadingText).toBeFalsy()
});

it('Should render loading when loading is true in store', () => {
    setup({ records: {...mockState.records, loading: true}})
    const loadingText = screen.getByTestId('loading-text')
    expect(loadingText).toBeTruthy()
});