import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import noteReducer from "../features/noteSlice";

const persistConfig = {
    key: "root",
    storage,
};

export const rootReducer = combineReducers({
    counter: counterReducer,
    notes: noteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})

export const persistor = persistStore(store);
