var React = require('react');

var LittleBox = React.createClass({
    render: function() {

    	var headingBoxStyle = {
			background: this.props.color,
			color:  "white"
		},
		headingTxtStyle = {
			fontSize: 12
		},
		headingNumStyle = {
			fontSize: 20,
	        lineHeight: 1.1,
	        fontWeight: "bold"
		};

        return (
            <div className="panel panel-default">
			  <div style = {headingBoxStyle} className="panel-heading">
			  	<div style = {headingTxtStyle} >{this.props.text}</div>
			  	<div style = {headingNumStyle} >{this.props.number}</div>
			  </div>
			  <div className="panel-body"></div>  
			</div>
        );
    }
});

module.exports = LittleBox;
