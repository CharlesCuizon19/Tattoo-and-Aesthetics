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
import MenuIcon from '@mui/icons-material/Menu'; // Added for hamburger icon
import CloseIcon from '@mui/icons-material/Close';
import map from './assets/map.png'
import { useState, useRef} from 'react'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className='h-screen w-screen overflow-x-hidden'>
        {/* First Tab - Home */}
        <div ref={homeRef} className='flex flex-col justify-between bg-[url("./assets/banner.jpg")] bg-cover bg-no-repeat md:bg-cover md:w-full md:h-full'>
          <header className='flex justify-between items-center px-4 py-5'>
            <img src={logo} alt="Logo" className='md:hidden w-9 md:w-25 md:my-5' />

            {/* Hamburger Icon (Visible on smaller screens) */}
            <button className='md:hidden text-white z-50' onClick={toggleMenu}>
              {isMenuOpen ? (
                <CloseIcon sx={{ fontSize: 30 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 30 }} />
              )}
            </button>

            {/* Navigation Links (Horizontal on large screens) */}
            <nav className='hidden md:flex justify-around items-center w-full'>
              <ul className='flex gap-10 text-white sm:text-xs'>
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
              <img src={logo} alt="Logo" className='w-25 my-5' />
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
            </nav>

            {/* Mobile Menu (Visible when hamburger is clicked) */}
            <nav
              className={`fixed left-0 top-0 w-full h-full bg-[#405060] flex flex-col items-center justify-center gap-8 text-white transition-transform duration-300 ease-in-out z-40 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } md:hidden`}
            >
              <ul className='flex flex-col items-center gap-6 text-xl'>
                <li
                  className='hover:cursor-pointer underline-hover'
                  onClick={() => scrollToSection(homeRef)}
                >
                  Home
                </li>
                <li
                  className='hover:cursor-pointer underline-hover'
                  onClick={() => scrollToSection(artistRef)}
                >
                  Artist
                </li>
                <li
                  className='hover:cursor-pointer underline-hover'
                  onClick={() => scrollToSection(galleryRef)}
                >
                  Gallery
                </li>
                <li
                  className='hover:cursor-pointer underline-hover'
                  onClick={() => scrollToSection(servicesRef)}
                >
                  Services
                </li>
                <li
                  className='hover:cursor-pointer underline-hover'
                  onClick={() => scrollToSection(clinicRef)}
                >
                  Clinic
                </li>
              </ul>
            </nav>
          </header>
          <div className='flex flex-col md:justify-between'>
            <div className='flex justify-center text-white'>
              <p className='megrim-regular text-xl md:text-6xl'>
                We Turn Skin Into Art;
              </p>
            </div>
            <div className='mt-10 mb-2'>
              <button className='dosis dosis-hover tracking-widest bg-[#7b7f5d] w-full text-xs py-1 md:py-2 text-white hover:cursor-pointer hover:bg-[#5f6347] transition-colors duration-300'>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        
        {/* Second Tab - Artist */}
        <div ref={artistRef} className="relative py-8 md:py-30 bg-[url('./assets/bg-1.jpg')] bg-cover w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#405060] to-transparent z-10 opacity-50"></div>
          <div className="relative z-20 text-center">
            <p className="megrim-regular text-2xl md:text-6xl text-black" >
              Artists; <br />
              Masterpieces in motion <br />
              <span className="dosis text-xl">
                Crafting Dreams into Stunning, Wearable Art.
              </span>
            </p>
          </div>
        </div>

        {/* Third Tab - Artist Grid */}
        <div className='bg-[url("./assets/bg-2.jpg")] md:min-h-screen pb-5 flex flex-col w-full'>
          <div className='flex flex-col md:grid md:grid-cols-3 px-12 md:px-40 h-fit pt-16 md:pt-32 justify-items-center gap-10'>
            {/* Artist grid content remains unchanged */}
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center">
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl block">Solana Mercure</span>
                  <span className="dosis block text-xs">Tattoo Artist</span>
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
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center">
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl">Solana Mercure</span>
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
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center">
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl">Solana Mercure</span>
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
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center" >
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl">Solana Mercure</span>
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
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center" >
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl">Solana Mercure</span>
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
            <div className="relative w-fit group overflow-hidden hover:cursor-pointer flex items-center justify-center" >
              <div className="mt-55 md:mt-80 ml-8 pt-5 md:pt-8 pb-2 md:pb-5 w-xl md:w-4xl flex items-center justify-center group-hover:bg-[#ffffff60] text-center absolute top-2/3 left-0 rotate-[-90deg] origin-left z-20 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-black text-lg leading-snug">
                  <span className="megrim-regular md:text-2xl">Solana Mercure</span>
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
        <div className="relative py-15 bg-[url('./assets/bg-1.jpg')] bg-cover flex">
          <div className="absolute inset-0 bg-gradient-to-b from-[#405060] to-transparent z-10 opacity-50">
            
          </div>
        </div>

        {/* Fourth Tab - Services */}
        <div ref={servicesRef} className='relative bg-[url("./assets/bg-2.jpg")] text-white flex flex-col py-10 md:py-20'>
          <div className='text-center mb-10' >
            <span className='megrim-regular text-4xl md:text-5xl'>Services;</span> <br />
            <span className='dosis text-xs md:text-xs'>Harmonizing Art and Expression</span>
          </div>
          <div className='flex justify-evenly'>
            <button className='megrim-regular text-4xl md:text-5xl hover:bg-[#7b7f5d] px-10 md:px-20 py-3 hover:shadow-gray-800 hover:shadow-2xl hover:cursor-pointer transition duration-300' >Tattoos</button>
            <button className='megrim-regular text-4xl md:text-5xl hover:bg-[#7b7f5d] px-10 md:px-20 py-3 hover:shadow-gray-800 hover:shadow-2xl hover:cursor-pointer transition duration-300' >Aesthetics</button>
          </div>
        </div>

        {/* Fifth Tab - Gallery */}
        <div ref={galleryRef} className="relative flex flex-col pt-10 md:py-15 bg-[url('./assets/bg-1.jpg')] md:h-[1000px] bg-cover">
          <div className="flex flex-col items-center justify-center md:pt-10 mb-10 md:mb-25">
            <div className="absolute inset-0 bg-gradient-to-b from-[#405060] to-transparent z-10 opacity-50 h-1/5"></div>
            <span className="megrim-regular text-5xl" >Our Works;</span>
            <br />
            <span className="dosis text-xs" >Ink Your Memories, Wear Your Story.</span>
          </div>
          <div className="relative overflow-hidden h-full pt-10" >
            <div
              className="flex gap-15 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / totalImages)}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="relative group w-4/10 flex-shrink-0 hover:cursor-pointer">
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
          <div className="relative flex items-center justify-between md:mx-35 mx-10 mt-10 mb-10">
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
            <div className='flex mx-5 md:mx-30 justify-between'>
              <div className='flex flex-col gap-5'>
                <span className='megrim-regular md:text-5xl'>Location</span>
                <span className='dosis text-xs text-center'>Davao City, Philippines</span>
                <img src={map} alt="" className='w-50 md:w-80'/>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <img src={logofooter} alt="" className='w-20 md:w-30'/>
                <span className='megrim-regular text-3xl md:text-5xl text-center'>InkGie</span>
                <span className='dosis text-xs text-center'>Tattoo & Aesthetics</span>
              </div>
              <div className='flex flex-col gap-5'>
                <span className='megrim-regular text-3xl md:text-5xl text-center'>Hours</span>
                <span className='dosis text-xs text-center'>Mon - Sat : 9AM - 6PM</span>
                <span className='megrim-regular text-3xl md:text-5xl text-center'>Socials</span>
                <div className='flex gap-2'>
                  <span>fb</span>
                  <span>ig</span>
                  <span>tiktok</span>
                </div>
                <span className='megrim-regular text-3xl md:text-5xl text-center'>Contact</span>
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