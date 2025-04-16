import { Input } from '@mui/material';
const Footer = () => {
  return (
    <div className="bg-[#263238] text-gray-300 grid grid-cols-4 items-center px-30 py-10">
      <div className="">
        <img src="/CommonImages/Logo.png" alt="logo" />
        <p>Copyright © 2023 Nexcent</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" text-xl font-bold">Company</h1>
        <p>About us</p>
        <p>Blog</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" text-xl font-bold">Support</h1>
        <p>Help Center</p>
        <p>Terms of service</p>
        <p>Legal</p>
        <p>Privacy policy</p>
        <p>Status</p>
      </div>
      <div className="flex flex-col gap-10">
        <h1>Stay up to date</h1>
        <Input value="exampl@gmail.com" style={{ color: 'gray' }} />
      </div>
    </div>
  );
};

export default Footer;
