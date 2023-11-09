import {useEffect} from "react";

const useFormReset = (form, state) => {
    useEffect(() => {
        if (state) form.resetFields();
    }, [form, state]);
};

export default useFormReset;
