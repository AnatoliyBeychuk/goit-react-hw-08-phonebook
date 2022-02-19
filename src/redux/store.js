import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsApi } from "./Contacts/contacts-slice";
import { authApi } from "./Auth/auth-slice";
import { filterReducer } from "./Contacts/contacts-reducers";
import { userReducer } from "./Auth/auth-reducers";

const persistConfig = {
  key: "user",
  storage,
};

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    user: persistReducer(persistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    contactsApi.middleware,
  ],
  // devTools: process.env.NODE_ENV === "development", //Чтобы тулзы работали на GhPages
});

const persistor = persistStore(store);

export { store, persistor };
