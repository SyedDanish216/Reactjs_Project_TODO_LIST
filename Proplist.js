import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
const Proplist=(props)=>{
    
        
        return(
            <>
            <div>
            <button onClick={()=>{
            props.onSelect(props.id);
            }}
            style={{float:"left",fontSize:"6px",marginTop:"5px",marginRight:"10px"}}>X</button>
            <li>{props.text}</li>
            </div>
            </>
        )
        
    

};
export default Proplist;