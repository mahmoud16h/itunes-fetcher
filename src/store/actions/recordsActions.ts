import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const itemsPerPage = 10

export const fetchRecords = createAsyncThunk(
    'records/fetchRecords',
    async ({ searchTerm, page = 0 }: { searchTerm: string, page?: number }) => {
        const response = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&limit=${itemsPerPage}&offset=${page * itemsPerPage}`)
        console.log('response', response.data)
        return response.data
    }
)