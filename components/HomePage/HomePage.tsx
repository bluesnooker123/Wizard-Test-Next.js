import Link from 'next/link'

const HomePage: React.FC = () => {

  return (
    <div className="container flex flex-col justify-center">
      <div className="flex flex-col max-w-lg h-96 p-8 md:w-full w-11/12 bg-gray-100 mx-auto justify-evenly rounded-3xl text-center items-center">
        <h2 className="text-5xl font-bold">Hello There!</h2>
        <span className="text-base">Let's buy some insurance. It is going to take only a few step</span>
        <Link href='/tellus'>
          <a>
            <button className="my-btn">Start</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;


