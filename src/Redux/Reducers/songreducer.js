import { CLICKED_SONG } from "../Actions/Actiontype";

const initialState = null;

const SongReducer = (state = initialState, action) => { 
    if(action.type === CLICKED_SONG){
        return action.payload;
    } else {
        return state;
    }
}

export default SongReducer;