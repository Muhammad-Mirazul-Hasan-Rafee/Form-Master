import { useState } from "react";

const StateFulForm = () => {
    const [name , setName] = useState(null);
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const [error , setError] = useState('');

    const handleNameChange = (e) =>{
        setName(e.target.value);
    };


    const handleSubmit = (e)=> {
        e.preventDefault();
        if(password.length <8){
            setError('Must be 8 characters or longer');
        }
        else{
            setError('');
            console.log(name , email , password);
        }
        
    };


    const handleEmailChange = (e) =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    };


    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    };


    return (
        <div>
              <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br/>
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFulForm;