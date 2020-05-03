import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const composeEnhancers = composeWithDevTools({
  name: "MyApp",
  actionsBlacklist: ["REDUX_STORAGE_SAVE"]
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
