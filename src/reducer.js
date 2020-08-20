export const initialState={
    basket:[],
    user:null,
}

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to the basket
            // return {state}
            // break;
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from the basket;
            return {state}

            // break;
        default:
            return state;
    }
}
export default reducer;