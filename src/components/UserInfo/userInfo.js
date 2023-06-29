import React from "react";
import {Box, Button, Stack, styled, Typography} from "@mui/material";
import {useStepper} from "contexts/stepperContext";
import Form, {Field} from "rc-field-form";

import {ButtonContainer, RootStyle} from "../styles";
import PageHeader from "../PageHeader";

const UserInfo = () => {
    const {handleNext} = useStepper();
    const [form] = Form.useForm();

    const handleClick = () => {
        form.validateFields(["name", "email", "phone"])
            .then((message) => {
                console.log(message);
                handleNext();
            })
            .catch(err => null);
    };

    return (
        <RootStyle>
            <PageHeader
                title="Personal Info"
                subtitle="Please provide your name, email address, and phone number."
            />

            <Form form={form} preserve={true}>
                <Stack spacing={3}>
                    <FormField name="name">
                        {({getFieldError}) => {
                            const error = getFieldError("name");

                            return error ? (
                                <Typography>{error}</Typography>
                            ) : null;
                        }}
                        <Input
                            label="Name"
                            placeholder="eg. Stephen King"
                            name="name"
                        />
                    </FormField>
                    <FormField name="email">
                        <Input
                            name="email"
                            label="Email Address"
                            placeholder="eg. stephenking@lorem.com"
                        />
                    </FormField>

                    <FormField name="phone">
                        <Input
                            name="phone"
                            label="Phone Number"
                            placeholder="eg. +1 234 567 890"
                        />
                    </FormField>
                </Stack>
                <ButtonContainer justifyContent="flex-end">
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleClick}>
                        Next Step
                    </Button>
                </ButtonContainer>
            </Form>
        </RootStyle>
    );
};

const Input = ({value = "", label, name, ...props}) => (
    <Box>
        <Typography color="primary.dark">{label}</Typography>
        <StyledInput value={value} {...props} />
    </Box>
);

const FormField = ({children, ...props}) => (
    <Field
        rules={[{required: true, message: "This field is required"}]}
        {...props}>
        {children}
    </Field>
);

const StyledInput = styled("input")(({theme}) => ({
    width: "100%",
    borderRadius: theme.shape.borderRadius * 2,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    color: theme.palette.primary.dark,
    fontSize: 16,
    padding: theme.spacing(2, 3),
    outline: "none",
    border: `1px solid ${theme.palette.grey[100]}`,
    "&::placeholder": {
        fontSize: 16,
        fontFamily: theme.typography.fontFamily,
        fontWeight: 500,
        color: theme.palette.grey[0]
    },
    "&:focus": {
        border: `1px solid ${theme.palette.primary.main}`
    }
}));

export default UserInfo;
