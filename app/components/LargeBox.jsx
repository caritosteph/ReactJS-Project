var React = require('react');

var LargeBox = React.createClass({
	render: function(){
		var headingBoxStyle = {
				height: 100
			},
			footerStyle = {
				background: "#373c3c",
            	borderTop: "1px solid #373c3c",
            	textAlign: "center"
            },
			footerNumStyle = {
				fontSize: 18,
            	color: "white"
			},
			footerTxtStyle = {
				fontSize: 10,
            	color: "#aaa"
			};

        if (this.props.bodyColor) {
            headingBoxStyle.background = this.props.bodyColor;
            headingBoxStyle.borderBottom = "1px solid " + this.props.bodyColor;
        }

		return (
			<div style = {panelStyle} className="panel panel-default">
			  <div style = {headingBoxStyle} className="panel-heading"></div>
			  <div style={footerStyle} className="panel-footer">
			  	<div className = "row" >
			  		<div style = {footerNumStyle} className="col-xs-4">{this.props.numberLeft}</div>
			  		<div style = {footerNumStyle} className="col-xs-4">{this.props.numberCenter}</div>
			  		<div style = {footerNumStyle} className="col-xs-4">{this.props.numberRight}</div>
			  	</div>
			  	<div className = "row" >
			  		<div style = {footerTxtStyle} className="col-xs-4">{this.props.textLeft}</div>
			  		<div style = {footerTxtStyle} className="col-xs-4">{this.props.textCenter}</div>
			  		<div style = {footerTxtStyle} className="col-xs-4">{this.props.textRight}</div>
			  	</div>
			  </div>  
			</div>
		);
	}
});

module.exports = LargeBox;