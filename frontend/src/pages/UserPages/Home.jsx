import { Button } from '@mui/material';
import Navbar from '../../components/UserComponents/Navbar';
import CommunityCard from '../../components/UserComponents/CommunityCard';
import WhiteComponent from '../../components/UserComponents/WhiteComponent';
import GrayComponent from '../../components/UserComponents/GrayComponent';
import HelpCard from '../../components/UserComponents/HelpCard';
import Footer from '../../components/UserComponents/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white font-sans flex flex-col gap-10">
        <div className="">
          <div className="h-170 bg-[#F5F7FA] flex items-center justify-center gap-54">
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Lessons and insights</p>
              <p className="text-5xl font-bold text-green-400">from 8 years </p>
              <p>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-green-500 text-white w-fit px-4 py-2  rounded-2xl mt-4 cursor-pointer hover:bg-green-700 active:scale-92">
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

        <div className="h-70 flex gap-8 flex-col items-center justify-center">
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

        <div className="flex flex-col items-center gap-4 mt-2 p-10">
          <h1 className="w-200 text-center text-gray-500 font-bold text-3xl">
            Manage your entire community <br />
            in a single system
          </h1>
          <p>Who is Nextcent suitable for?</p>
          <div className="grid grid-cols-3 gap-12">
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
              <h2 className="text-4xl font-bold text-green-300">
                business reinvents itself
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <HelpCard
                image="/logImges/pepole.png"
                number="2,245,341"
                text="Members"
              />
              <HelpCard
                image="/logImges/hands.png"
                number="46,328"
                text="Clubs"
              />
              <HelpCard
                image="/logImges/pointfinger.png"
                number="828,867"
                text="Event Booking"
              />
              <HelpCard
                image="/logImges/wallet.png"
                number="1,926,436"
                text="Payments"
              />
            </div>
          </div>

          <WhiteComponent
            image="/userImages/pana.png"
            heading="How to design your site footer like wedid"
            description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.."
            butText="Lern More"
          />

          <div className="flex p-20 gap-12 bg-[#F5F7FA]">
            <img src="/userImages/tesla.png" alt="tesla image" />
            <div className="flex flex-col items-start justify-center gap-3">
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
              <div className="flex gap-2">
                <img
                  src="/logImges/figma-logo.png"
                  className="w-10 h-10"
                  alt=""
                />
                <img
                  src="/logImges/spacios-jet.png"
                  className="w-10 h-10"
                  alt=""
                />
                <img
                  src="/logImges/two-boxes.png"
                  alt=""
                  className="w-10 h-10"
                />
                <img
                  src="/logImges/logo-ipsum.png"
                  alt=""
                  className="w-10 h-10"
                />
                <img src="/logImges/jilabi.png" alt="" className="w-10 h-10" />
                <img src="/logImges/spring.png" alt="" className="w-10 h-10" />
                <p className="mt-2 text-green-800">Meet all customers</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center p-14">
              <h1 className="text-2xl font-bold">Caring is new marketing</h1>
              <p className="w-150 text-center">
                The Nextcent blog is the best place to read about the latest
                membership insights, trends and more. See who's joining the
                community, read about how our community are increasing their
                membership income and lot's more.​
              </p>
            </div>
            <div className="grid grid-cols-3 w-[80%] mx-50">
              <img
                src="/userImages/lap-using-by-girl.png"
                alt="lap image"
                className="relative w-80"
              />
              <img
                src="/userImages/lapOnTable.png"
                alt="image"
                className="relative w-80"
              />
              <img
                src="/userImages/learingLap.png"
                alt="image"
                className="relative w-80"
              />
            </div>
          </div>

          {/* Section 3*/}

          <div className="flex flex-col items-center justify-center gap-5 p-20 bg-[#F5F7FA]">
            <h1 className="text-4xl font-medium text-center">
              Pellentesque suscipit <br /> fringilla libero eu.
            </h1>
            <button className="bg-green-500 px-5 py-1 cursor-pointer rounded-2xl">
              get a demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
