import React,{useState} from 'react';

function Button1() {
    const [val,setVal] = useState(0 )
    const handleButton=(type)=>{
        console.log("Clicked",type)
  if(type==='inc')
  {
    setVal(val+1)
  }
  
  if(type==='dec')
  {
    setVal(val-1)
  }
}
return (
    <div>
    <button type="button" class="btn btn-primary" onClick={()=> handleButton('dec')}>decrement</button> 
    value:{val}
            <button type="button" class="btn btn-primary" onClick={()=> handleButton('inc')}>increment</button>
    </div>
  )
}

export default Button1