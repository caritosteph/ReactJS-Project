var React = require('react');

var MediumBox = React.createClass({
    render:function() {
    	var panelStyle = {
    			height: 100
    		},
    		bodyStyle = {},
    		bodyTxtStyle = {},
    		bodyNumStyle = {};
        
        if(this.props.color){
        	panelStyle.background = this.props.color;
        	bodyStyle.textAlign = "center";
        	bodyNumStyle.fontSize = 24;
            bodyNumStyle.color = "white";
            bodyTxtStyle.fontSize = 10;
            bodyTxtStyle.color = "white";
        }else{
        	bodyNumStyle.paddingTop = 10;
            bodyNumStyle.fontSize = 16;
            bodyNumStyle.color = "#373c3c";
            bodyNumStyle.fontWeight = "bold";
            bodyTxtStyle.fontSize = 10;
            bodyTxtStyle.color = "#aaa";
        }

        return (
            <div style = {panelStyle} className="panel panel-default">
				<div style = {bodyStyle} className="panel-body">
					<div style = {bodyNumStyle} >{this.props.number}</div>
			  		<div style = {bodyTxtStyle} >{this.props.text}</div>
				</div>  
			</div>
        );
    }
});

module.exports = MediumBox;