import React, {forwardRef, useCallback, useImperativeHandle} from "react";
// eslint-disable-next-line no-restricted-imports
import BaseForm from "rc-field-form";
import {isObject} from "lodash";
import {FormProvider} from "./contexts/FormContext";
import useForm from "./hooks/useForm";

const InternalForm = forwardRef(function (
    {form, name, onFinishFailed, scrollToFirstError = true, ...otherProps},
    ref
) {
    const [wrapForm] = useForm(form);

    wrapForm.__INTERNAL__.name = name;

    useImperativeHandle(ref, () => wrapForm);

    const handleFinishFailed = useCallback(
        (errorInfo) => {
            onFinishFailed?.(errorInfo);

            if (errorInfo.errorFields.length) {
                const fieldName = errorInfo.errorFields[0].name;

                if (scrollToFirstError) {
                    const options = isObject(scrollToFirstError)
                        ? scrollToFirstError
                        : {block: "center"};

                    wrapForm.scrollToField(fieldName, options);
                }
            }
        },
        [onFinishFailed, scrollToFirstError, wrapForm]
    );

    return (
        <FormProvider form={wrapForm} name={name}>
            <BaseForm
                form={wrapForm}
                id={name}
                name={name}
                onFinishFailed={handleFinishFailed}
                {...otherProps}
            />
        </FormProvider>
    );
});

InternalForm.displayName = "Form";

export default InternalForm;
