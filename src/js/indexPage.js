import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class IndexPage extends React.Component {

	constructor(props) {
	    super(props);
  	}

	render() {
		return (
			<div style={{color:'orange', backgroundColor:'gray'}}>
				<h1>Hello World !</h1>
			</div>
		);
	}
}

export default IndexPage;