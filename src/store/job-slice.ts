import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Job = {
  title: string;
  company: string;
  source: string;
  link: string;
};
type InitialState = {
  loading: boolean;
  jobs: Job[];
  searchTerm: string;
  error: string
};
const initialState: InitialState = {
  loading: false,
  jobs: [],
  searchTerm: "",
  error: '',
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", (title: string) => {
  return axios.post("http://localhost:8000/api/jobs/search", { title }).then(response => response.data);
});
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
        state.loading = false;
        state.jobs = action.payload
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.jobs =[]
        state.error = action.error.message || 'something went wrong'

    })
  },
});

export default jobSlice.reducer;

