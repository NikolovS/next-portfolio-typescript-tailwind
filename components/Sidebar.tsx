import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCloudDownload,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Image from 'next/image';

function Sidebar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C5603AQFTi2IrXj2Rdg/profile-displayphoto-shrink_800_800/0/1521985178179?e=1665014400&v=beta&t=BxY6fHEiEMSp0EtH5TvAN-beNONDKeWZUKZtbb7pmxk"
        alt="user avatar"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
        className="justify-center mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-mouse-memours">
        <span className="text-green">Stefan </span>
        Nikolov
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Junior fullstack developer
      </p>
      <a
        href="/assets/Stefan Nikolov.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        download="Stefan Nikolov.pdf"
      >
        {' '}
        <AiOutlineCloudDownload className="w-6 h-6" /> Download CV
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://www.youtube.com/channel/UCXLNxTrWVgZHgpFnbBmyS9g"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube className="w-8 h-8" />
        </a>
        <a href="https://github.com/NikolovS" target="_blank" rel="noreferrer">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/stefan-nikolov-461179100/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Sofia, Bulgaria</span>
        </div>
        <p className="my-2">snikolov8910@gmail.com</p>
        <p className="my-2">+359 898 74 30 97</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto: snikolov8910@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle theme
      </button>
    </div>
  );
}

export default Sidebar;
