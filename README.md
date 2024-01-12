useContext

***

App.js 




```
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

```
***
Context.js

```
import React from 'react';

export const Context = React.createContext();

```

***
ComponentOne.js

```
import { Context } from "./Context";
import { useContext } from "react";

function ComponentOne (){
    const [context, setContext] = useContext(Context);
    return (<div>
        <p>Component One </p>
        <button onClick={() => setContext("New title")}>Click here to change title</button>
    </div>)
}

export default ComponentOne; 
```

***
ComponentTwo.js

```
import { useContext } from "react";
import { Context } from "./Context";

function ComponentTwo (){
const [context, setContext] = useContext(Context)

    return (<div>
        <p>Component Two </p>
        <p>{context}</p>
    </div>)
}

export default ComponentTwo; 
```

![Screenshot 2024-01-12 111410](https://github.com/HannaFleming/React-useContext/assets/124400864/86cf700d-6424-4413-96b2-6a40cf3f79bf)


![Screenshot 2024-01-12 111502](https://github.com/HannaFleming/React-useContext/assets/124400864/d558c120-334e-4c72-9a61-17f559f299a5)




