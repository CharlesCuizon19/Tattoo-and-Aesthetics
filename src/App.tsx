import logo from './assets/logo-header.png'
import logofooter from './assets/logo-footer.png'
import artist1 from './assets/img-artist-1.png'
import artist1_bnw from './assets/img-artist-bnw-1.png'
import artist2 from './assets/img-artist-2.png'
import artist2_bnw from './assets/img-artist-bnw-2.png'
import artist3 from './assets/img-artist-3.png'
import artist3_bnw from './assets/img-artist-bnw-3.png'
import artist4 from './assets/img-artist-4.png'
import artist4_bnw from './assets/img-artist-bnw-4.png'
import artist5 from './assets/img-artist-5.png'
import artist5_bnw from './assets/img-artist-bnw-5.png'
import artist6 from './assets/img-artist-6.png'
import artist6_bnw from './assets/img-artist-bnw-6.png'
import work1 from './assets/img-works-1.png'
import work1_bnw from './assets/img-works-bnw-1.png'
import work2 from './assets/img-works-2.png'
import work2_bnw from './assets/img-works-bnw-2.png'
import work3 from './assets/img-works-3.png'
import work3_bnw from './assets/img-works-bnw-3.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import map from './assets/map.png'
import { useState, useRef, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { bnw: work1_bnw, color: work1},
    { bnw: work2_bnw, color: work2 },
    { bnw: work3_bnw, color: work3 },
  ];
  const totalImages = images.length;

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const artistRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const clinicRef = useRef<HTMLDivElement>(null);

  // Scroll handler function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <>
      <div className='h-screen'>
        {/* First Tab - Home */}
        <div ref={homeRef} className='flex flex-col justify-between bg-[url("./assets/banner.jpg")] bg-cover w-full h-full object-cover'>
          <header className='flex justify-around dosis items-center'>
            <ul className='flex gap-10 text-white'>
              <li 
                className='hover:cursor-pointer underline-hover my-0 h-fit' 
                onClick={() => scrollToSection(homeRef)}
              >
                Home
              </li>
              <li 
                className='hover:cursor-pointer underline-hover my-0 h-fit' 
                onClick={() => scrollToSection(artistRef)}
              >
                Artist
              </li>
              <li 
                className='hover:cursor-pointer underline-hover my-0 h-fit' 
                onClick={() => scrollToSection(galleryRef)}
              >
                Gallery
              </li>
            </ul>
            <img src={logo} alt="" className='w-25 items-center justify-center my-5'/>
            <ul className='flex gap-10 text-white'>
              <li 
                className='hover:cursor-pointer underline-hover my-0 h-fit' 
                onClick={() => scrollToSection(servicesRef)}
              >
                Services
              </li>
              <li 
                className='hover:cursor-pointer underline-hover my-0 h-fit' 
                onClick={() => scrollToSection(clinicRef)}
              >
                Clinic
              </li>
            </ul>
          </header>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex justify-center text-white mt-40'>
              <p className='megrim-regular text-6xl' data-aos="zoom-out">We Turn Skin Into Art;</p>
            </div>
            <div className='mb-3'>
              <button className='dosis dosis-hover tracking-widest bg-[#7b7f5d] w-full py-2 text-white hover:cursor-pointer hover:bg-[#5f6347] transition-colors duration-300'>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        
        {/* Second Tab - Artist */}
        <div ref={artistRef} className="relative py-30 bg-[url('./assets/bg-1.jpg')] bg-cover w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#405060] to-transparent z-10 opacity-50"></div>
          <div className="relative z-20 text-center">
            <p className="megrim-regular text-6xl text-black" data-aos="fade-up" data-aos-duration="1000">
              Artists; <br />
              Masterpieces in motion <br />
              <span className="dosis text-xl">
                Crafting Dreams into Stunning, Wearable Art.
              </span>
            </p>
          </div>
        </div>

        {/* Third Tab - Artist Grid */}
        <div className='bg-[url("./assets/bg-2.jpg")] h-[1100px] pb-5 flex flex-col justify-center'>
          <div className='grid grid-cols-3 px-40 h-fit pt-30'>
            {/* Artist grid content remains unchanged */}
            <div className="relative w-9/10 group overflow-hidden" data-aos="fade-down-right">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist1_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist1}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
            {/* ... (other artist grid items remain unchanged) */}
            <div className="relative w-9/10 group overflow-hidden" data-aos="fade-down">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist2_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist2}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
            <div className="relative w-9/10 group overflow-hidden" data-aos="fade-down-left">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist3_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist3}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
            <div className="relative w-9/10 mt-7 group overflow-hidden" data-aos="fade-up-right">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist4_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist4}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
            <div className="relative w-9/10 mt-7 group overflow-hidden" data-aos="fade-up">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist5_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist5}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
            <div className="relative w-9/10 mt-7 group overflow-hidden" data-aos="fade-up-left">
              <div className="mt-80 ml-8 pt-8 pb-5 w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular text-2xl block">Solana Mercure</span>
                  <span className="dosis block">Tattoo Artist</span>
                </p>
              </div>
              <img
                src={artist6_bnw}
                alt=""
                className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
              />
              <img
                src={artist6}
                alt=""
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 z-10"
              />
            </div>
          </div>
          <div className='mt-10'>
            <button className='dosis dosis-hover tracking-widest bg-[#7b7f5d] w-full py-2 text-white hover:cursor-pointer hover:bg-[#5f6347] transition-colors duration-300'>
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* Division */}
        <div className="relative py-15 bg-[url('./assets/bg-1.jpg')] bg-cover">
          <div className="absolute inset-0 bg-gradient-to-b from-[#405060] to-transparent z-10 opacity-50"></div>
        </div>

        {/* Fourth Tab - Services */}
        <div ref={servicesRef} className='bg-[url("./assets/bg-2.jpg")] text-white flex flex-col py-20'>
          <div className='text-center mb-10' data-aos="zoom-in">
            <span className='megrim-regular text-5xl'>Services;</span> <br />
            <span className='dosis text-xs'>Harmonizing Art and Expression</span>
          </div>
          <div className='flex justify-evenly'>
            <button className='megrim-regular text-5xl hover:bg-[#7b7f5d] px-20 py-3 hover:shadow-gray-800 hover:shadow-2xl hover:cursor-pointer transition duration-300' data-aos="fade-right">Tattoos</button>
            <button className='megrim-regular text-5xl hover:bg-[#7b7f5d] px-20 py-3 hover:shadow-gray-800 hover:shadow-2xl hover:cursor-pointer transition duration-300' data-aos="fade-left">Aesthetics</button>
          </div>
        </div>

        {/* Fifth Tab - Gallery */}
        <div ref={galleryRef} className="relative flex flex-col py-15 bg-[url('./assets/bg-1.jpg')] h-[1000px] bg-cover">
          <div className="flex flex-col items-center justify-center pt-10 mb-25">
            <div className="absolute inset-0 bg-gradient-to-b from-[#405060] to-transparent z-10 opacity-50 h-1/5"></div>
            <span className="megrim-regular text-5xl" data-aos="fade-down">Our Works;</span>
            <br />
            <span className="dosis text-xs" data-aos="fade-up">Ink Your Memories, Wear Your Story.</span>
          </div>
          <div className="relative overflow-hidden h-full pt-10" data-aos="fade-right">
            <div
              className="flex gap-15 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / totalImages)}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="relative group w-4/10 flex-shrink-0">
                  <img
                    src={image.bnw}
                    alt=""
                    className="block transition duration-500 group-hover:opacity-0 group-hover:scale-105 z-10"
                  />
                  <img
                    src={image.color}
                    alt=""
                    className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#405060] z-20"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-between mx-35 mb-10">
            <button onClick={handlePrev}>
              <ArrowBackIcon sx={{ fontSize: 40 }} className="hover:cursor-pointer" />
            </button>
            <button onClick={handleNext}>
              <ArrowForwardIcon sx={{ fontSize: 40 }} className="hover:cursor-pointer" />
            </button>
          </div>
          <button className='relative dosis dosis-hover tracking-widest bg-[#7b7f5d] w-full py-2 text-white hover:cursor-pointer hover:bg-[#5f6347] transition-colors duration-300'>
            BOOK NOW
          </button>
        </div>

        {/* Sixth Tab - Clinic */}
        <div ref={clinicRef} className='bg-[url("./assets/bg-2.jpg")] text-white flex flex-col py-8'>
          <footer className='flex flex-col justify-between'>
            <div className='flex mx-30 justify-between'>
              <div className='flex flex-col gap-5'>
                <span className='megrim-regular text-5xl'>Location</span>
                <span className='dosis text-xs text-center'>Davao City, Philippines</span>
                <img src={map} alt="" className='w-80'/>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <img src={logofooter} alt="" className='w-30'/>
                <span className='megrim-regular text-5xl text-center'>InkGie</span>
                <span className='dosis text-xs text-center'>Tattoo & Aesthetics</span>
              </div>
              <div className='flex flex-col gap-5'>
                <span className='megrim-regular text-5xl text-center'>Hours</span>
                <span className='dosis text-xs text-center'>Mon - Sat : 9AM - 6PM</span>
                <span className='megrim-regular text-5xl text-center'>Socials</span>
                <div className='flex gap-2'>
                  <span>fb</span>
                  <span>ig</span>
                  <span>tiktok</span>
                </div>
                <span className='megrim-regular text-5xl text-center'>Contact</span>
                <span className='dosis text-xs text-center'>sample@gmail.com</span>
                <span className='dosis text-xs text-center'>+63 999 492 8190</span>
              </div>
            </div>
            <div className='text-center mt-10 border-t-1 border-white'>
              <span className='dosis text-xs text-center'>Copyright © Tattoo Website. All Rights Reserved. Designed & Developed by R Web Solutions Corp.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App