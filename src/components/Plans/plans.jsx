import React, {Fragment, useContext, useEffect} from "react";
import {useToggle} from "contexts/ToggleContext";
import Toggle from "../Toggle";
import PageHeader from "../PageHeader";
import Form from "../Form";
import RadioGroup from "../Form/fields/RadioGroup";
import {head} from "lodash";
import {useSubscription} from "contexts/SubscriptionContext";
import FormContext from "../Form/contexts/FormContext";

const Plans = () => {
    const {toggle} = useToggle();
    const {plans, subscription} = useSubscription();
    const {form} = useContext(FormContext);

    useEffect(() => {
        form.resetFields(["plans"]);
    }, [form, toggle]);

    return (
        <Fragment>
            <PageHeader
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <Form.Item
                name="plans"
                rules={[{required: true}]}
                initialValue={head(plans).value}>
                <RadioGroup
                    options={plans}
                    toggle={toggle}
                    subscription={subscription}
                />
            </Form.Item>
            <Toggle />
        </Fragment>
    );
};

export default Plans;
