var React = require('react');
var ReactDOM = require('react-dom');
var LargeBox = require('./components/LargeBox.jsx');
var MediumBox = require('./components/MediumBox.jsx');
var LittleBox = require('./components/LittleBox.jsx');

ReactDOM.render(
    <MediumBox number="20" text="New followers added this month"/>, 
    document.getElementById('leftMediumBox')
);

ReactDOM.render(
    <MediumBox number="$ 1250" text="Average Monthly Income"/>, 
    document.getElementById('middleMediumBox')
);

ReactDOM.render(
    <MediumBox number="$ 13865" text="Yearly Income Goal"/>, 
    document.getElementById('rightMediumBox')
);

ReactDOM.render(
    <MediumBox number="18&#176;" text="Paris" color="#ff7306"/>, 
    document.getElementById('orangeMediumBox')
);

ReactDOM.render(
    <LargeBox 
        bodyColor="#0086c5"
        numberLeft="15080"
        textLeft="Shot Views"
        numberCenter="12000"
        textCenter="Likes"
        numberRight="5100"
        textRight="Comments"
    />, 
    document.getElementById('blueLargeBox')
);

ReactDOM.render(
    <LargeBox 
        bodyColor="#c5439d"
        numberLeft="15080"
        textLeft="Shot Views"
        numberCenter="12000"
        textCenter="Likes"
        numberRight="5100"
        textRight="Comments"
    />, 
    document.getElementById('pinkLargeBox')
);

ReactDOM.render(
    <LittleBox number="1.5k" text="New Visitors" color="#0086c5"/>, 
    document.getElementById('blueSmallBox')
);

ReactDOM.render(
    <LittleBox number="50%" text="Bounce Rate" color="#a376cc"/>, 
    document.getElementById('purpleSmallBox')
);

ReactDOM.render(
    <LittleBox number="28%" text="Searches" color="#ff2d1b"/>, 
    document.getElementById('redSmallBox')
);

ReactDOM.render(
    <LittleBox number="140.5kb" text="Traffic" color="#4bb645"/>, 
    document.getElementById('greenSmallBox')
);