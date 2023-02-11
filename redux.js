const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 19
}

//reducer
const rootReducer = (state = initialState, action) => {
   if(action.type === 'ADD_AGE'){
       return{
            ...state,
            age: state.age + 1
        }
   }
    
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState())


//dispatch 
store.dispatch({type: 'ADD_AGE'})
console.log(store.getState())

