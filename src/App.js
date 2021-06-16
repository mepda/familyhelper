import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut} from '@aws-amplify/ui-react'
import {listLists} from './graphql/queries'
import { useEffect, useState } from 'react';
import 'semantic-ui/dist/semantic.min.css';
Amplify.configure(awsConfig);

function App() {
  const[list, setList] = useState([])
  async function fetchList(){
    const {data} = await API.graphql(graphqlOperation(listLists));
    setList(data.listLists.items)
    console.log(data);
  }
  //fetch when application loads first time
  //blank array for the above, specify variable to fetch when that var changes
  useEffect(()=> {
    fetchList()
  }, [])
  return (
    <AmplifyAuthenticator>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Amplify</h1>
        <ul>
          {list.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
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
