import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        hasLoaded: false,
        isLoading: false,
        isError: false,
        searchTerm: '',
        selectedTrack: '',
        isTrackView: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        saveSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        saveSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        saveSelectedTrack: (state, action) => {
            state.selectedTrack = action.payload;
        },
        deleteSelectedTrack: (state, action) => {
            state.selectedTrack = '';
        },
        setTrackView: (state, action) => {
            state.isTrackView = action.payload;
        },
        setHasLoaded: (state, action) => {
            state.hasLoaded = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        }
    },
});

export const { saveSearchResults,
    saveSearchTerm,
    setIsLoading,
    setHasLoaded,
    saveSelectedTrack,
    deleteSelectedTrack,
    setTrackView,
    setIsError
} = searchSlice.actions;

export default searchSlice.reducer