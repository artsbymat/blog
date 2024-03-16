import { useState } from 'react';

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Posts', link: '/posts' },
  { title: 'About', link: '/about' }
];

const Navbar = ({ path }: { path: string }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <div className="h-16 bg-white sm:h-24">
        <div className="flex h-full items-center justify-between px-4">
          <div className="z-10 text-2xl font-medium">
            <a href="/">Blog.</a>
          </div>
          <svg
            className={`ham hamRotate hamMenu z-10 block sm:hidden ${isNavOpen ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="55"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
          <nav
            className={`absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-16 bg-white transition-transform duration-500 sm:static sm:h-auto sm:w-auto sm:translate-y-0 sm:flex-row sm:gap-10 ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}
          >
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className={`text-[1.1rem] hover:font-medium ${item.link === path ? 'font-medium' : 'font-normal'}`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
