import React, { useState } from "react";
import Proplist from "./Proplist";
import AddIcon from '@material-ui/icons/Add';

const Addsauda=()=>{
    const [currInput,setInput]=useState("");
    const [currItem,setItem]=useState([]);
    
    const inputevent=(event)=>{
        setInput(event.target.value);
        
    };
    const addItem=()=>{
          
        setItem((oldcurrItems)=>{
           
            if(currInput=="")
            {
                 alert('First add items');
                 return [...oldcurrItems];
            }
            else{
           return [...oldcurrItems, currInput];
            }
        });
        setInput("");
    };
    const deleteitem=(id)=>{
        setItem((oldcurrItems)=>{
            return oldcurrItems.filter((arrElement,index)=>{
                    return index!=id;
            })
        })
    }
    
    return(
        <>
        <div style={{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:"grey"}}>
            <div style={{width:"25%",height:"60%",backgroundColor:"white",borderRadius:"10px"}}>
            <div style={{width:"100%",height:"40px",backgroundColor:"purple",marginTop:"15px"}}>
                <h2 style={{color:"white",textAlign:"center",padding:"7px 0"}}> Add Sauda Items</h2>
            </div>
            <div style={{marginTop:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>
                <input value={currInput} onChange={inputevent} style={{border:"none",height:"25px",width:"60%",outline:"none",borderBottom:"2px solid black"}} type="text" placeholder="Add Item" />
                <button onClick={addItem} style={{font:"100%",borderRadius:"30%",backgroundColor:"purple",width:"35px",color:"white",height:"25px",fontSize:"25px",outline:"none",border:"none",justifyContent:"center",alignItems:"center",display:"flex"}}><AddIcon /></button>
            </div>
             
             <ol style={{marginTop:"25px",listStyleType:"none"}}>
              { currItem.map((itemval,index)=>{
                   return <Proplist 
                   key={index}
                   id={index}
                   text={itemval}
                   onSelect={deleteitem}
                    />;
               })}
            </ol> 
            
            
            </div>
        </div>
        </>
    )
};
export default Addsauda;