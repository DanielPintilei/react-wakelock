import React from 'react';

// method taken from https://github.com/richtr/NoSleep.js/blob/master/NoSleep.js
// needs testing.

let WakeLockIOS = React.createClass({

  displayName: "WakeLockIOS",

  propTypes: {
    preventSleep: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      preventSleep: true
    };
  },

  componentDidMount() {
    this.syncState(this.props.preventSleep);
  },


  componentWillUnmount() {
    this.syncState(false);
  },


  componentWillReceiveProps(nextProps) {
    this.syncState(nextProps.preventSleep);
  },


  syncState(preventSleep) {

    if (preventSleep && !this.timer) {

console.log("start timer");
      this.timer = setInterval(() => {
console.log("TICK");
        location.href = '/';
        setTimeout(window.stop, 0);

      }, 15000);

    }

    if (!preventSleep && this.timer) {

console.log("stop timer");
      clearInterval(this.timer);
      this.timer = null;

    }

  },


  render() {

    return null;

  }

});


export default WakeLockIOS;
