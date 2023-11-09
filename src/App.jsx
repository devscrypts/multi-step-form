import React from "react";
import {Box, Card, Grid, Stack, styled, useMediaQuery} from "@mui/material";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import UserInfo from "./components/UserInfo";
import Plans from "./components/Plans";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import {useStepper} from "contexts/StepperContext";
import PageButton from "./components/PageButton";

const App = () => {
    const {handleNext} = useStepper();
    const [form] = Form.useForm();
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <PageLayout>
            {isMd ? (
                <Form form={form} onFinish={() => handleNext()}>
                    <Stack alignItems="center">
                        <Sidebar />
                        <StyledCard>
                            <PageContent steps={steps} />
                        </StyledCard>
                        <StyledPageButton steps={steps} />
                    </Stack>
                </Form>
            ) : (
                <StyledCard>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Form form={form} onFinish={() => handleNext()}>
                                <PageContent steps={steps} />
                            </Form>
                        </Grid>
                    </Grid>
                </StyledCard>
            )}
        </PageLayout>
    );
};

const steps = [
    {
        id: 1,
        step: <UserInfo />
    },
    {
        id: 2,
        step: <Plans />
    },
    {
        id: 3,
        step: <Addons />
    },
    {
        id: 4,
        step: <Summary />
    },
    {
        id: 5,
        step: <Confirmation />
    }
];

const PageLayout = styled(Box)(({theme}) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.neutral.magnolia
}));

const StyledCard = styled(Card)(({theme}) => ({
    width: "70%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        width: "90%",
        margin: "auto",
        top: 100,
        position: "absolute",
        zIndex: 3
    }
}));

const StyledPageButton = styled(PageButton)(({theme}) => ({
    width: "100%",
    top: "100%",
    padding: theme.spacing(2),
    background: theme.palette.common.white,
    position: "absolute",
    zIndex: 3
}));

export default App;
