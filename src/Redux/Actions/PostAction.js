import { STARTED_POST, FINISHED_POST, ERROR_POST } from "./Actiontype";
import axios from "axios";


export const startedpost = () => {
  return {
    type: STARTED_POST,
  };
};

export const finisedpost = (data) => {
  return {
    type: FINISHED_POST,
    payload: data,
  };
};

export const errorpost = (error) => {
  return {
    type: ERROR_POST,
    payload: error,
  };
};


export  function postrequest() {
    return async (dispatch) => {
        dispatch(startedpost());

        try {
            const response = await axios.get(
              "https://gauravgitacc.github.io/postAppData/posts.json"
            );
            const data = (response.data)
            dispatch(finisedpost(data))
        }catch(error){
            dispatch(errorpost(error))
        }
    }
}