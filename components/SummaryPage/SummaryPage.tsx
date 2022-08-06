import Link from 'next/link'
import { useInfo } from "../../core/context-provider/info-context"

const SummaryPage: React.FC = () => {
  const { name, age, country, packageType, premium } = useInfo();
  return (
    <div className="container flex flex-col justify-center">
      <div className="flex flex-col max-w-lg p-8 md:w-full w-11/12 bg-gray-100 mx-auto justify-evenly rounded-3xl text-center items-center">
        <h2 className="text-5xl font-bold my-8">Summary</h2>
        <span className="text-xl my-4">Name: {name}</span>
        <span className="text-xl my-4">Age: {age}</span>
        <span className="text-xl my-4">Where do you live: {country}</span>
        <span className="text-xl my-4">package: {packageType}</span>
        <span className="text-xl my-4">Premium: {premium}</span>
        <div className="flex flex-col md:flex-row my-4 justify-center">
          <Link href='/tellus'>
            <a>
              <button className="my-btn !bg-white !text-black !border-slate-600">Back</button>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <button className="my-btn">Buy</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;


