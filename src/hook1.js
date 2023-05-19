import React,{useState} from 'react';

function Hook1()
{ 
    const [val,setVal] = useState()
    const handleButton=(type)=>{
        console.log("Clicked",type)
        if(type==='blue')
        {
            setVal("blue")
        }
        if(type==='green')
        {
            setVal("green")
        }
        if(type==='red')
        {
            setVal("red")
        }
    }
    return(
        <div>
            <button type="button" class="btn btn-primary" onClick={()=> handleButton('blue')}>Primary</button>
            <button type="button" class="btn btn-primary" onClick={()=> handleButton('green')}>Primary</button>
            <button type="button" class="btn btn-primary" onClick={()=> handleButton('red')}>Primary</button>

            <h2>
                color: {val}
            </h2>
            <br/>
            
        </div>
    )
}
export default Hook1