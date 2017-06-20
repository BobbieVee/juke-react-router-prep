import React from 'react';
import Albums from './Albums';

export default (props) => {
	const albums =  props.albums;
	const selectAlbum = props.selectAlbum;
	return (
		<div>
			<Albums 
      	albums = {albums}
      	selectAlbum = {selectAlbum} 
    	/>


		</div>
	)
}

