import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {recordsError, recordsListSelector, recordsLoadingSelector} from "../store/selectors/recordSelector";
import {fetchRecords} from "../store/actions/recordsActions";
import {reset} from "../store/slices/recordsSlice";
import {RecordType} from "../components/recordCard";

const useRecordSearch = (query: string) => {
    const dispatch = useDispatch<AppDispatch>()
    const records = useSelector<RootState>(recordsListSelector) as RecordType[]
    const isLoading = useSelector<RootState>(recordsLoadingSelector)
    const error = useSelector<RootState>(recordsError)

    useEffect(() => {
        if (query.length > 2) {
            dispatch(fetchRecords({searchTerm: query.toLowerCase()}))
        }

        if (!query.length) {
            dispatch(reset())
        }
    },[query, dispatch])

    const nextPage = (page: number) => {
        return dispatch(fetchRecords({ searchTerm: query.toLowerCase(), page }))
    }

    return {
        records,
        isLoading,
        error,
        nextPage,
        reset: () => dispatch(reset())
    }

}

export default useRecordSearch;
