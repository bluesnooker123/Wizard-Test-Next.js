import React, { useState } from 'react'
import { InfoContext } from "./info-context"

interface TellUsPageProps {
}

export const InfoProvider: React.FC<TellUsPageProps> = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("Hong Kong");
  const [packageType, setPackageType] = useState("standard");
  const [premium, setPremium] = useState("");

  return (
    <InfoContext.Provider value={{
      name: name,
      setName: setName,
      age: age,
      setAge: setAge,
      country: country,
      setCountry: setCountry,
      packageType: packageType,
      setPackageType: setPackageType,
      premium: premium,
      setPremium: setPremium,
      }}>
        { props.children }
    </InfoContext.Provider>
  )
}
