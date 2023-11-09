import React, {Fragment} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {CustomCard} from "../styled";
import PageHeader from "../PageHeader";
import Form, {Checkbox} from "../Form";
import {useSubscription} from "contexts/SubscriptionContext";

const Addons = () => {
    const {addOns, subscription} = useSubscription();

    return (
        <Fragment>
            <PageHeader
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <Stack spacing={2}>
                {addOns.map((addon) => (
                    <CustomCard
                        key={addon.id}
                        direction="row"
                        selected={addon.checked === true}
                        alignItems="center">
                        <Form.Item
                            name={addon.name}
                            initialValue={addon.checked}
                            valuePropName="checked"
                            rules={[{type: "boolean"}]}>
                            <Checkbox />
                        </Form.Item>
                        <Stack sx={{ml: {xs: 0, sm: 2}}}>
                            <Typography
                                color="primary.dark"
                                sx={{fontWeight: 500}}>
                                {addon.name}
                            </Typography>
                            <Typography color="grey.0" variant="body2">
                                {addon.description}
                            </Typography>
                        </Stack>
                        <Box sx={{flex: 1}} />
                        <Typography color="primary.main" variant="body2">
                            {"$" + addon.value + subscription}
                        </Typography>
                    </CustomCard>
                ))}
            </Stack>
        </Fragment>
    );
};

export default Addons;
