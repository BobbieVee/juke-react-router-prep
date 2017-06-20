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
		const albums = this.props.artistAlbums;
		const songs = this.props.artistSongs;
		const currentSong= this.props.currentSong;
	  const isPlaying=this.props.isPlaying;
	  const toggleOne=this.props.toggleOne; 
	  const selectAlbum = this.props.selectAlbum;
	  const selectedArtist = this.props.selectedArtist;
	  const children = this.props.children;
		const propsToPassToChildren = {
			albums: this.props.artistAlbums,
			songs: this.props.artistSongs,
			currentSong: this.props.currentSong,
		  isPlaying: this.props.isPlaying,
		  toggleOne: this.props.toggleOne, 
		  selectAlbum: this.props.selectAlbum,
		  selectedArtist: this.props.selectedArtist			
  		/**todo: make sure to include all the props that the child components need! **/
		}
		return(
			  <div>
				  <h3>{ selectedArtist.name }</h3>
				  <ul className="nav nav-tabs">
				    <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
				    <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
				  </ul>
				  { children && React.cloneElement(children, propsToPassToChildren) }
				</div>

		)
	}

}



