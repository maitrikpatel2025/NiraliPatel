import React from 'react';
import Button from '@material-ui/core/Button';
import './Btn.css';

const Btn =(props)=> {
 const {Name} =props;
return(
<Button className="Btn" variant="outlined" color="primary">
  {Name}
</Button>
)
}
export default Btn;