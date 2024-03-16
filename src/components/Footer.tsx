import { SiAstro } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div className="my-4 flex h-24 flex-col items-center justify-center gap-2 text-gray-800">
        <div className="flex gap-2">
          <p>Powered by</p>
          <SiAstro size={25} />
        </div>
        <p>Copyright© {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;
