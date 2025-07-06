import LocalData from './LocalData';

// Store only if not already present
if (!localStorage.getItem("appData")) {
  localStorage.setItem("appData", JSON.stringify(LocalData));
}

const localStorageData = JSON.parse(localStorage.getItem("appData"));

const Reducer = (state = localStorageData, action) => {
  switch (action.type) {


    default:
      return state;
  }
};

export default Reducer;
