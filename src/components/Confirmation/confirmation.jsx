import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import ThankYouIcon from "assets/images/icon-thank-you.svg";

const Confirmation = () => {
    return (
        <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}>
            <Box component="img" src={ThankYouIcon} width={100} />
            <Typography variant="h4" sx={{fontWeight: 600}}>
                Thank you!
            </Typography>
            <Typography color="grey.0" variant="body2" align="center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
            </Typography>
        </Stack>
    );
};

export default Confirmation;
