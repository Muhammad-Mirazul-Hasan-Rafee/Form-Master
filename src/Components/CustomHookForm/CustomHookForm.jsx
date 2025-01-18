import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
    const [name , handleNameChange] = useInputState('Rafee');
    // const emailState = useInputState('hasanrafee88@yahoo.com');

// array use er jnno:---------------->

    const handleSubmit = (e) => {
        console.log('form data' , name);
        e.preventDefault();
    };
// object use er jnno:---------------->
//     const handleSubmit = (e) =>{
//         console.log('form data' , emailState.value);
//         e.preventDefault();
// };
    return (
        <div>
             <form onSubmit={handleSubmit}>
            
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                {/*... deyar karone value ta o bose jabe r onChange o bose jabe . eta object use er jnno */}
                 {/* <input {...emailState} type="email" name="email" id="" />   */}
                <br/>
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;