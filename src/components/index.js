import React from "react";
import {Box, Card, Grid, styled} from "@mui/material";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";

const Main = () => {
    return (
        <PageLayout>
            <StyledCard>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <PageContent />
                    </Grid>
                </Grid>
            </StyledCard>
        </PageLayout>
    );
};

const PageLayout = styled(Box)(({theme}) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.neutral.magnolia
}));

const StyledCard = styled(Card)(({theme}) => ({
    width: "60%",
    padding: theme.spacing(2)
}));

export default Main;
