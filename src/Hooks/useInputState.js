// Creating a Custom Hook
import { useState } from "react";

const useInputState = (defaultValue = null) =>{ 
    const [value , setValue] = useState(defaultValue);

    const handleChange = (e) =>{
        setValue(e.target.value);
    };


    // const onChange = (e) =>{
    //     setValue(e.target.value);
    // };
     // array return
   return [value , handleChange]; 

//    object return
// return{
//     value , 
//     onChange
// }

};

export default useInputState;