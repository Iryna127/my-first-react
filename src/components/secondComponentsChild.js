import React from 'react';

const GreatingTextChild = (props) => {
  return <h2>Hello, Dear {props.children}</h2>;
};
export default GreatingTextChild;
