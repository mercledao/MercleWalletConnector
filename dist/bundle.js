'use strict';

var React = require('react');

const Button = ({}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => console.log("its working")
  }, "This is a test button");
};

exports.Button = Button;
