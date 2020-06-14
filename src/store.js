const { createStore } = require("redux");
const { default: appReducer } = require("./reducers");


const store = createStore(appReducer)

export default store