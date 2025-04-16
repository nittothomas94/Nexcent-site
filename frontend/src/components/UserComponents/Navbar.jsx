import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className=" h-18 px-25 bg-[#F5F7FA] flex items-center justify-between border-b-1 border-gray-300">
      <div className="flex gap-2">
        <img src="/logImges/nexcent.png" alt="nexcent-logo" />
        <h1 className="text-2xl font-black">Nextcent</h1>
      </div>

      <div className="flex gap-2">
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          Home
        </a>
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          Service
        </a>
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          Feature
        </a>
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          Product
        </a>
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          Testimonial
        </a>
        <a
          href="#home"
          className="border border-gray-200 px-2 py-3 hover:bg-[#DDDDDD]"
        >
          FAQ
        </a>
      </div>

      <div className="flex gap-2">
        <Button
          variant="text"
          sx={{
            color: 'black',
            bgcolor: 'white',
            '&:hover': {
              backgroundColor: 'gray', // or any color you want
            },
          }}
        >
          Login
        </Button>
        {/* 'sx' one of the way to custom cusmization */}
        <Button
          sx={{
            color: 'black',
            bgcolor: 'green',
            '&:hover': {
              backgroundColor: 'gray', // or any color you want
            },
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
