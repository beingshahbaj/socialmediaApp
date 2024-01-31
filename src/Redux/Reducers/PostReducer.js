import { STARTED_POST, FINISHED_POST, ERROR_POST } from "../Actions/Actiontype";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const Postreducer = (state = initialState, action) => { 
    switch (action.type) {
    case STARTED_POST:
      return { ...state, loading: true };
    case FINISHED_POST:
      return { ...state, loading: false, data: action.payload };
    case ERROR_POST:
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
}
export default Postreducer