import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Anime, ApiResponse } from '../types';

interface SearchState {
  query: string;
  page: number;
  totalPages: number;
  results: Anime[];
  loading: boolean;
  error: string | null;
}



const initialState: SearchState = {
query: '',
page: 1,
totalPages: 1,
results: [],
loading: false,
error: null
}


export const fetchAnimes = createAsyncThunk<
{ data: Anime[]; pagination: ApiResponse['pagination'] },
{ query: string; page: number },
{ rejectValue: string }
>('anime/fetch', async ({ query, page }, thunkAPI) => {
try {
const encoded = encodeURIComponent(query)
const res = await axios.get<ApiResponse>(
`https://api.jikan.moe/v4/anime?q=${encoded}&page=${page}&limit=20`,
{ signal: thunkAPI.signal as any }
)
return { data: res.data.data, pagination: res.data.pagination }
} catch (err: any) {
if (axios.isCancel(err)) {
return thunkAPI.rejectWithValue('canceled')
}
return thunkAPI.rejectWithValue(err?.message ?? 'Unknown error')
}
})


const slice = createSlice({
name: 'anime',
initialState,
reducers: {
setQuery(state, action: PayloadAction<string>) {
state.query = action.payload
state.page = 1
},
setPage(state, action: PayloadAction<number>) {
state.page = action.payload
}
},
extraReducers: (builder) => {
builder
.addCase(fetchAnimes.pending, (state) => {
state.loading = true
state.error = null
})
.addCase(fetchAnimes.fulfilled, (state, action) => {
state.loading = false
state.results = action.payload.data
state.totalPages = action.payload.pagination.last_visible_page || 1
})
.addCase(fetchAnimes.rejected, (state, action) => {
state.loading = false
if (action.payload === 'canceled') return
state.error = action.payload ?? 'Failed to fetch'
})
}
})


export const { setQuery, setPage } = slice.actions
export default slice.reducer