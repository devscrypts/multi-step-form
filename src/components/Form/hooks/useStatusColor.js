import {useContext} from "react";
import FormItemContext from "../contexts/FormItemContext";

const useStatusColor = () => {
    const {validating, validated, errors, warnings} =
        useContext(FormItemContext);

    switch (true) {
        case errors.length > 0:
            return "error";
        case warnings.length > 0:
            return "warning";
        case validating:
            return "info";
        case validated:
            return "primary";
        default:
            return undefined;
    }
};

export default useStatusColor;
