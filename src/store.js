import { createStore } from "redux"

const initialState = {
      search: ''
}

const searchRducer = (state=initialState, action) => {
      switch(action.type){
            case 'SEARCH':
                  return {...state, search: action.value2};
            default:
                  return state;
      }
} 

const store = createStore(searchRducer);
export default store;