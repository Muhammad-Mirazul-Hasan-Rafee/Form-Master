import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import CustomHookForm from './Components/CustomHookForm/CustomHookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SimpleForm from './SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = (data) =>{
    console.log('Sign Up Data' , data);
  };
  
  const handleUpdateProfile = (data) =>{
    console.log('Update Profile Data' , data);
  };

  return (
    <>
  
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
      <div>
          <h2>Update Profile</h2>
          <p>Always update your profile</p>
        </div>
      </ReusableForm>
    
     
    </>
  )
};

export default App
