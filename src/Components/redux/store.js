import { createStore } from 'redux';
import Reducer from './Reducer';
import LocalData from './LocalData';

let persistedData;

try {
  const stored = JSON.parse(localStorage.getItem("appData"));
  // Validate it has 'users'
  if (stored && stored.users && Array.isArray(stored.users)) {
    persistedData = stored;
  } else {
    persistedData = LocalData;
  }
} catch (e) {
  persistedData = LocalData;
}

const store = createStore(Reducer, persistedData);

// Save to localStorage on any state update
store.subscribe(() => {
  localStorage.setItem("appData", JSON.stringify(store.getState()));
});

export default store;
