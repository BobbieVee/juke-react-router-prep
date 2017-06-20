import React from 'react';
import Songs from './Songs';

export default (props) => {
	const songs =  props.songs;
	const currentSong = props.currentSong;
	const isPlaying = props.isPlaying;
	const toggleOne = props.toggleOne;
	return (
		<div>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} 
      />


		</div>
	)
}