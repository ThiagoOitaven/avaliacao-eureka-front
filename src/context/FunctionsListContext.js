import { createContext } from "react";
import useFunctionsProvider from "../hooks/useFunctionsProvider";

const FunctionsContext = createContext();

export function FunctionsListProvider(props) {
    const valuesProvider = useFunctionsProvider();
    return (
        <FunctionsContext.Provider value={valuesProvider} >
            {props.children}
        </FunctionsContext.Provider>
    );
}

export default FunctionsContext;