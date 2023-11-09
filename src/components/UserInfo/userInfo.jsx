import React, {Fragment} from "react";
import {Stack} from "@mui/material";
import PageHeader from "../PageHeader";
import Form, {Input} from "../Form";

const UserInfo = () => {
    return (
        <Fragment>
            <PageHeader
                title="Personal Info"
                subtitle="Please provide your name, email address, and phone number."
            />

            <Stack spacing={3}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{required: true}]}
                    preserve>
                    <Input placeholder="eg. Stephen King" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[{required: true, type: "email"}]}>
                    <Input placeholder="eg. stephenking@lorem.com" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    normalize={(v) => parseInt(v)}
                    rules={[{required: true, type: "number"}]}>
                    <Input placeholder="eg. +1 234 567 890" />
                </Form.Item>
            </Stack>
        </Fragment>
    );
};

export default UserInfo;
