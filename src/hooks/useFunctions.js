import { useContext } from "react";
import FunctionsContext from "../context/FunctionsListContext.js"

function useFunctionsList() {
    return useContext(FunctionsContext);
}

export default useFunctionsList;