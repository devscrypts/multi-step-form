import {useContext} from "react";
import FormItemContext from "../contexts/FormItemContext";

const useHelperText = () => {
    const {errors, warnings, help} = useContext(FormItemContext);

    return errors.length > 0
        ? errors.join(", ")
        : warnings.length > 0
        ? warnings.join(", ")
        : help;
};

export default useHelperText;
