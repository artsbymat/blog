import { SiAstro } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div className="my-4 flex h-24 flex-col items-center justify-center gap-2 text-gray-600">
        <div className="flex gap-2">
          <p>Powered by</p>
          <a href="https://astro.build/" className="hover:text-gray-800">
            <title>Astro</title>
            <SiAstro size={25} />
          </a>
        </div>
        <p>Copyright© {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;
