import {useCallback, useContext} from "react";
import FormContext from "../contexts/FormContext";
import {composeRef} from "../helpers";

const useItemRef = () => {
    const {itemRef} = useContext(FormContext);

    return useCallback(
        (name, ...originalRefs) => {
            return composeRef(itemRef(name), ...originalRefs);
        },
        [itemRef]
    );
};

export default useItemRef;
