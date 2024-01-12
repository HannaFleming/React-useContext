import { useState } from 'react';
import './App.css';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import { Context } from "./Context";

 
function App() {

const [context, setContext ] = useState("Initial state");
  return (

      <Context.Provider value={[context, setContext]}>

              <ComponentOne />
              <ComponentTwo />

      </Context.Provider>

  );
 }

export default App;
