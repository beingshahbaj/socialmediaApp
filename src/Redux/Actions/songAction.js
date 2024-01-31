import { CLICKED_SONG } from "./Actiontype";


const clicked_song = (song) => {
    return {
        type: CLICKED_SONG,
        payload: song,
    }

}
export default clicked_song;