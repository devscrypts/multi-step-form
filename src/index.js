import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AddonProvider} from "contexts/addonContext";
import {PlanProvider} from "contexts/planContext";
import {UserProvider} from "contexts/userContext";
import {ToggleProvider} from "contexts/toggleContext";
import {StepperProvider} from "contexts/stepperContext";
import ThemeConfig from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeConfig>
        <StepperProvider>
            <UserProvider>
                <ToggleProvider>
                    <PlanProvider>
                        <AddonProvider>
                            <App />
                        </AddonProvider>
                    </PlanProvider>
                </ToggleProvider>
            </UserProvider>
        </StepperProvider>
    </ThemeConfig>
);
