import { bebasNeue } from '../ui/font';
import { FaReact } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className={`${bebasNeue.className} flex flex-row items-center leading-none text-white`}>
        <FaReact className="h-20 w-20 rotate-[15deg]" />
        <p className="text-[30px] ml-3">RuneMesh</p>
    </div>
    );
};

export default Logo;