import { Button } from '@mui/material';
import Navbar from '../../components/UserComponents/Navbar';
import CommunityCard from '../../components/UserComponents/CommunityCard';
import WhiteComponent from '../../components/UserComponents/WhiteComponent';
import GrayComponent from '../../components/UserComponents/GrayComponent';
import HelpCard from '../../components/UserComponents/HelpCard';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white font-sans flex flex-col gap-10">
        <div className="">
          <div className="h-170 bg-[#F5F7FA] flex items-center justify-center gap-54">
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Lessons and insights</p>
              <p className="text-5xl font-bold text-green-500">from 8 years </p>
              <p>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-green-500 text-white w-fit px-4 py-2  rounded-2xl mt-4">
                Register
              </button>
            </div>
            <img
              src="/userImages/busnessManStanding.png"
              className="w-120 h-100"
              alt="bussiness man image"
            />
          </div>
        </div>

        <div className="h-70 flex gap-8 flex-col items-center justify-center border">
          <h1 className="text-gray-500 font-bold text-4xl">Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
          <div className="flex gap-3">
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
            <img src="/logImges/figma-logo.png" className="w-10 h-10" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-2 p-10 border">
          <h1 className="w-200 text-center text-gray-500 font-bold text-3xl">
            Manage your entire community <br />
            in a single system
          </h1>
          <p>Who is Nextcent suitable for?</p>
          <div className="grid grid-cols-3 gap-12 border">
            <CommunityCard
              image="/logImges/pepole.png"
              title="Membership Organisations"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
            <CommunityCard
              image="/logImges/pepole.png"
              title="NationalAssociations"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
            <CommunityCard
              image="/logImges/pepole.png"
              title="Clubs And Groups"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
        </div>

        {/* section 02 */}

        <div className="flex gap-4 flex-col">
          <WhiteComponent
            image="/userImages/login.jpg"
            heading="The unseen of spending three years atPixelgrade"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
            butText="Lern More"
          />

          <div className="flex items-center justify-around p-20 bg-[#F5F7FA] h-100">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">Helping a local</h1>
              <h2 className="text-4xl font-bold text-green-500">
                business reinvents itself
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <HelpCard
                image="public/logImges/pepole.png"
                number="2,245,341"
                text="Members"
              />
              <HelpCard
                image="public/logImges/hands.png"
                number="46,328"
                text="Clubs"
              />
              <HelpCard
                image="public/logImges/pointfinger.png"
                number="828,867"
                text="Event Booking"
              />
              <HelpCard
                image="public/logImges/wallet.png"
                number="1,926,436"
                text="Payments"
              />
            </div>
          </div>

          <WhiteComponent
            image="public/userImages/pana.png"
            heading="How to design your site footer like wedid"
            description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.."
            butText="Lern More"
          />

          <div className="flex p-20">
            <img src="/userImages/tesla.png" alt="tesla image" />
            <div className="">
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h1>Tim Smith</h1>
              <p>British Dragon Boat Racing Association</p>
              <div className="">
                <img src="/logImges/figma-logo.png" alt="" />
                <img src="/logImges/spacios-jet.png" alt="" />
                <img src="/logImges/two-boxes.png" alt="" />
                <img src="/logImges/logo-ipsum.png" alt="" />
                <img src="/logImges/jilabi.png" alt="" />
                <img src="/logImges/spring.png" alt="" />
                <p>Meet all customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
