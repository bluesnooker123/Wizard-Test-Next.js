import { createContext, useContext } from 'react'
interface InfoContextInterface {
    name: string;
    setName?: Function;
    age: number,
    setAge?: Function,
    country: string,
    setCountry?: Function,
    packageType: string,
    setPackageType?: Function,
    premium: string,
    setPremium?: Function
}

const defaultState = {
    name: "",
    age: 0,
    country: "Hong Kong",
    packageType: "standard",
    premium: ""
};

export const InfoContext = createContext<InfoContextInterface>(defaultState);

export const useInfo = () => useContext(InfoContext);
