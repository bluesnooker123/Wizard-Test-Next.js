import Link from 'next/link'

const AgeError: React.FC = () => {
  return (
    <div className="container flex flex-col justify-center">
      <div className="flex flex-col max-w-lg h-96 p-8 md:w-full w-11/12 bg-gray-100 mx-auto justify-evenly rounded-3xl text-center items-center">
        <h2 className="text-5xl font-bold">Ooops</h2>
        <span className="text-base">Your age is over our accepted limit.</span>
        <span className="text-base">We are sorry but we can not insure you now.</span>
        <Link href='/'>
          <a>
            <button className="my-btn">Ok :(</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AgeError;


