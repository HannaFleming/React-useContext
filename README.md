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

*** Change Color ***

```
import './App.css';
import React from 'react'
import MyTheme from './MyTheme';
import { useState } from 'react';

export const ColorContext = React.createContext();

function App() {

  const [myColor, setMyColor] = useState(true);
  
function changeColor() {

  setMyColor((myFirstColor) => !myFirstColor)
}
return(
  <div>
    <h1>Click and the color will change</h1>
    <ColorContext.Provider value={(myColor)}>

    <button onClick = {changeColor}>Change a color</button>
    <MyTheme />

    </ColorContext.Provider>
  </div>
)

}

export default App;

```
***create new component MyTheme.js***
```
import { useContext } from "react";
import { ColorContext } from "./App";

function MyTheme (){

    const myColor = useContext(ColorContext);

    const themeIdeas = {
    
    backgroundColor: myColor ? 'pink': 'blue',
    color:myColor ? 'black' : 'white',
    padding: "100px",
    margin:"100px"



}

    return(<div style={themeIdeas}>
        <p>My Block</p>
    </div>)
}
export default MyTheme;
```
![Screenshot 2024-01-15 094925](https://github.com/HannaFleming/React-useContext/assets/124400864/e6255a43-b162-4c54-97c1-efa1fbfcbc3e)

![Screenshot 2024-01-15 094945](https://github.com/HannaFleming/React-useContext/assets/124400864/e40f42ca-bedc-4c62-b11e-c816d9067690)










