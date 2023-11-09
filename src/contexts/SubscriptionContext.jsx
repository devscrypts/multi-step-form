import React, {createContext, useContext, useMemo} from "react";
import {useToggle} from "contexts/ToggleContext";
import arcadeIcon from "assets/images/icon-arcade.svg";
import advancedIcon from "assets/images/icon-advanced.svg";
import proIcon from "assets/images/icon-pro.svg";

const SubscriptionContext = createContext(null);

const useSubscription = () => useContext(SubscriptionContext);

const SubscriptionProvider = ({children}) => {
    const {toggle} = useToggle();

    const plans = useMemo(
        () => [
            {
                id: 1,
                name: "Arcade",
                icon: arcadeIcon,
                value: toggle ? 90 : 9
            },
            {
                id: 2,
                name: "Advanced",
                icon: advancedIcon,
                value: toggle ? 120 : 12
            },
            {
                id: 3,
                name: "Pro",
                icon: proIcon,
                value: toggle ? 150 : 15
            }
        ],
        [toggle]
    );

    const addOns = useMemo(
        () => [
            {
                id: 1,
                name: "Online Service",
                description: "Access to multiplayer games",
                value: toggle ? 10 : 1,
                checked: false
            },
            {
                id: 2,
                name: "Larger Storage",
                description: "Extra 1TB of cloud save",
                value: toggle ? 20 : 2,
                checked: false
            },
            {
                id: 3,
                name: "Customizable Profile",
                description: "Custom theme on your profile.",
                value: toggle ? 20 : 2,
                checked: false
            }
        ],
        [toggle]
    );

    const subscription = useMemo(() => (toggle ? "/yr" : "/mo"), [toggle]);

    const value = useMemo(
        () => ({
            plans,
            addOns,
            subscription
        }),
        [plans, addOns, subscription]
    );

    return (
        <SubscriptionContext.Provider value={value}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export {SubscriptionProvider, useSubscription};
export default SubscriptionContext;
