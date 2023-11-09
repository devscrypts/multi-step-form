import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ToggleProvider} from "contexts/ToggleContext";
import ThemeConfig from "./theme";
import {FormProvider} from "rc-field-form";
import {StepperProvider} from "contexts/StepperContext";
import {SubscriptionProvider} from "contexts/SubscriptionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeConfig>
        <FormProvider>
            <StepperProvider>
                <ToggleProvider>
                    <SubscriptionProvider>
                        <App />
                    </SubscriptionProvider>
                </ToggleProvider>
            </StepperProvider>
        </FormProvider>
    </ThemeConfig>
);
