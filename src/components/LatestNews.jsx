import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-2'>
           <p className='bg-pink-500 text-gray-100 p-2'>Latest</p>
           <Marquee pauseOnHover={true}>
            <Link to={'/news'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt velit accusamus commodi est quo hic culpa 
            </Link>
            <Link to={'/news'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt velit accusamus commodi est quo hic culpa
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;