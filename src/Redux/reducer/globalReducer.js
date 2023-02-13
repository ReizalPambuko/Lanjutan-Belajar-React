import ActionType from "./globalActionType";

const stateGlobal = {
  totalOrder: 0
}

//reducer
const rootReducer = (state = stateGlobal, action) => {
    if(action.type === ActionType.ADD_PLUS){
        return{
        ...state,
        totalOrder: state.totalOrder + 1
        }
    }

    if(action.type === ActionType.ADD_MINUS){
        let totalOrder = 0;
        if(state.totalOrder > 0){
            totalOrder = state.totalOrder -1
        }
        return{
            ...state,
            totalOrder: totalOrder
        }
    }
        return state;
    }


    export default rootReducer;