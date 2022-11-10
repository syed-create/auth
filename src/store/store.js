import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "../features/auth/store/slice";
import dashboardSlice from "../features/dashboard/store/slice";

const reducers = combineReducers({
	userSlice,
	dashboardSlice,
});

const persistConfig = {
	key: "root",
	storage,
	version: 1,
	// whitelist: ["userSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export const persistor = persistStore(store);

export default store;
