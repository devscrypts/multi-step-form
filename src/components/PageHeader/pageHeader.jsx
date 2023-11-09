import React from "react";
import {Box, Typography} from "@mui/material";

const PageHeader = ({title, subtitle}) => {
    return (
        <Box sx={{mb: 5}}>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{fontWeight: 700}}>
                {title}
            </Typography>
            <Typography color="grey.0" sx={{mt: 1}}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default PageHeader;
