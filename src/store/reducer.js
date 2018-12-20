const defaultState = {
    Movie_item:[]
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case "GET_DATA_ACTION_FULFILLED":
            let goodsState = JSON.parse(JSON.stringify(state));
            goodsState.Movie_item = action.payload;
            return goodsState;
    }
    return state; 
}
// _FULFILLED
