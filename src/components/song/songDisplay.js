import React from "react";
import { useSelector } from "react-redux";

const SongDisplay = () => {
     const songDetail = useSelector(state => state.song);

     console.log(songDetail);

     return (
       <div>
         <h1>Song Display</h1>
         {songDetail && (
           <div>
             <p>{songDetail.name}</p>
             <p> {songDetail.album} </p>
             <p> {songDetail.artist} </p>
             <p> {songDetail.duration} </p>
           </div>
         )}
       </div>
     );
};
export default SongDisplay;