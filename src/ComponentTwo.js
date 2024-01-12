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