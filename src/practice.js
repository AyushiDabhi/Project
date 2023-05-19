import React from "react";
import Practice1 from "./practice1";
function Practice(props)
{
    let{name,course}=props;
    console.log(props)
    return(
        <div>
            Hiii {name}<br></br>
            My course is {course}
            {/* <Practice1 name={name}/> */}
        </div>
    )
}
export default Practice