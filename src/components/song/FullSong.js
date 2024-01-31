import React from 'react'
import Songlist from './Songlist'
import SongDisplay from './songDisplay'
function FullSong() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Songlist />
      <SongDisplay />
    </div>
  );
}

export default FullSong