import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
	reducer: rootReducer,
	middleware: (MDW) => MDW(),
});
export default store;
