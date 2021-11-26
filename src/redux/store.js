import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer/index";

export const store = createStore(rootReducer, composeWithDevTools());

export default { store };
