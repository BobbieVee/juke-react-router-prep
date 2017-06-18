import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';
import Albums from './Albums';

export default class Artist extends React.Component{


	componentDidMount(){
		const artistId = this.props.params.artistId;
		const selectArtist = this.props.selectArtist;
		this.props.selectArtist(artistId);
	}

	render(){
		console.log('props = ', this.props)
		const albums = this.props.artistAlbums;
		const songs = this.props.artistSongs;
		const currentSong= this.props.currentSong;
	  const isPlaying=this.props.isPlaying;
	  const toggleOne=this.props.toggleOne; 
	  const selectAlbum = this.props.selectAlbum;
	  const selectedArtist = this.props.selectedArtist
		return(
			<div>
			  <h3>{selectedArtist.name}</h3>
					<div>
			      <Albums 
			      	albums = {albums}
			      	selectAlbum = {selectAlbum} />

				    <h3>SONGS</h3>
		        <Songs
		          songs={songs}
		          currentSong={currentSong}
		          isPlaying={isPlaying}
		          toggleOne={toggleOne} />
      		</div>
    		</div>			  

		)
	}

}

