import React from 'react';
import AppBar from 'material-ui/AppBar';

class IndexPage extends React.Component {

	constructor(props) {
	    super(props);
  	}

	render() {
		return (
	      	<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
	    );
	}
}

export default IndexPage;