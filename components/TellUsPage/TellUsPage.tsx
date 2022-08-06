import { useState } from "react"
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AgeError from './AgeError'
import { useInfo } from "../../core/context-provider/info-context"

const TellUsPage: React.FC = () => {
  const router = useRouter();
  const { name, setName, age, setAge, country, setCountry, packageType, setPackageType , setPremium } = useInfo();
  const [isAgeErrorShow, setIsAgeErrorShow] = useState(false);
  const data = [
    'Hong Kong',
    'USA',
    'Australia',
  ]

  function GetCurrency() {
    if (country === "Hong Kong")
      return "HKD";
    else if (country === "USA")
      return "USD";
    else if (country === "Australia")
      return "AUD";
    else
      return "Wrong Curreny";
  }

  function GetInitialValue() {
    let Rate = (country === "Hong Kong") ? 1 : (country === "USA" ? 2 : 3);
    return 10 * age * Rate;
  }

  function GetPremium() {
    let mul_val = (packageType === "standard") ? 1 : (packageType === "safe" ? 1.5 : 1.75);
    return GetInitialValue() * mul_val;
  }

  const NextBtnClicked = () => {
    if (age > 100) {
      setIsAgeErrorShow(true);
    } else {
      let temp = (GetPremium().toString()).concat(GetCurrency());
      setPremium?.(temp);
      router.push('/summary')
    }
  };

  return (
    <>
      {isAgeErrorShow
        ? <AgeError />
        : <div className="container flex flex-col justify-center">
            <div className="flex flex-col max-w-2xl md:w-full w-11/12 bg-gray-100 mx-auto my-4 justify-evenly rounded-3xl items-center">
              <h2 className="text-5xl font-bold my-8 text-center">Tell us about yourself</h2>
              <div className="flex flex-col my-4">
                <span className="m-1">Name</span>
                <input className="border border-slate-600 p-2" value={name} onChange={(e) => setName?.(e.target.value)} placeholder="Add text" required />
              </div>
              <div className="flex flex-col my-4">
                <span className="m-1">Age</span>
                <input className="border border-slate-600 p-2" type="number" value={age} onChange={(e) => setAge?.(Number(e.target.value))} placeholder="Add age" required />
              </div>
              <div className="flex flex-col my-4">
                <span className="m-1">Where do you live</span>
                <ComboBox
                  options={data}
                  enableAutocomplete
                  editable={false}
                  defaultValue="Hong Kong"
                  onSelect={(option) => setCountry?.(option)}
                />
              </div>
              <div className="flex flex-col my-4">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="covergo-text-project"
                    defaultValue="standard"
                    name="radio-buttons-group"
                    value={packageType}
                    onChange={(e) => setPackageType?.(e.target.value)}
                  >
                    <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                    <FormControlLabel value="safe" control={<Radio />} label={`Safe (+${GetInitialValue() * 0.5}${GetCurrency()}, 50%)`} />
                    <FormControlLabel value="supersafe" control={<Radio />} label={`Safe (+${GetInitialValue() * 0.75}${GetCurrency()}, 75%)`} />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="flex flex-col my-4">
                <span className="text-xl font-bold">Your premium is: {GetPremium()}{GetCurrency()}</span>
              </div>
              <div className="flex flex-col md:flex-row my-4 justify-center">
                <Link href='/'>
                  <a>
                    <button className="my-btn !bg-white !text-black !border-slate-600">Back</button>
                  </a>
                </Link>
                <button className="my-btn" onClick={() => NextBtnClicked()}>Next</button>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default TellUsPage;


