import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt="gif"/>
  </li>
);

export default Gif;