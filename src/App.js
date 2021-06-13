import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut} from '@aws-amplify/ui-react'


Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Amplify</h1>
        <AmplifySignOut/>
      </header>
    </div>
    <AmplifySignUp
        headerText="My Custom Sign Up Text"
        slot="sign-up"
        formFields={[
            { type: "username" },
            {
              type: "password",
              label: "Password *",
              placeholder: "Enter your password"
            },
            { type: "email" }
          ]} 
      ></AmplifySignUp>
    </AmplifyAuthenticator>
  );
}

export default App;
