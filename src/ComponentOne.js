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