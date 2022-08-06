import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/imgs/logo.svg'

const Navbar: React.FC = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center h-20">
      <div className="flex items-center ml-4">
        <Link href="/">
          <a>
            <Image className="" alt="Logo Image" src={Logo} width={112} height={24}/>
          </a>
        </Link>
        <span className="text-4xl font-Righteous p-4">Test Project</span>
      </div>
    </div>
  );
};

export default Navbar;


