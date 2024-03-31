// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

const store = configureStore({
    reducer: {
        auth: loginReducer
    }
});

export default store;