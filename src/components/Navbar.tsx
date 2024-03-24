import { useEffect, useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Posts', link: '/posts' },
  { title: 'Tags', link: '/tags' },
  { title: 'About', link: '/about' }
];

const Navbar = ({ path }: { path: string }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [border, setBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setBorder(true);
    } else {
      setBorder(false);
    }

    if (isNavOpen) return;

    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (window.scrollY > 0) {
      setShow(false);
    }
  }, []);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('overflow-y-hidden');
  };

  const isDesktop = useMediaQuery('(min-width: 640px)');
  if (isDesktop && isNavOpen) {
    document.body.classList.remove('overflow-hidden');
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header>
      <div
        className={`z-50 h-16 bg-white duration-500 sm:h-24 sm:static fixed top-0 w-full max-w-screen-xl transition-all sm:translate-y-0 sm:border-none ${show ? '-translate-y-0' : '-translate-y-full'} ${border && 'border-b-gray-300 border-2'}`}
      >
        <div className="flex h-full items-center justify-between px-4">
          <div className="z-20 text-2xl font-medium">
            <a href="/">Blog.</a>
          </div>
          <svg
            className={`ham hamRotate hamMenu z-20 block sm:hidden ${isNavOpen ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="55"
            onClick={handleClick}
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
            className={`z-10 absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-16 bg-white transition-transform duration-500 sm:static sm:h-auto sm:w-auto sm:translate-y-0 sm:flex-row sm:gap-10 ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}
          >
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className={`text-[1.1rem] hover:font-medium ${item.link === path ? 'text-red-500 font-medium' : 'text-black font-normal'}`}
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
