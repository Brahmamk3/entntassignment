import { createStore } from 'redux';
import Reducer from './Reducer'; // assuming Reducer is also in LocalData

const store = createStore(Reducer);

export default store;