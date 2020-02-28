import React from 'react';
import './Btn.css';

const Btn =(props)=> {
 const {Name} =props;
return(
  <li>
    <button class="ui button btn">{Name}</button>
  </li>
)
}
export default Btn;