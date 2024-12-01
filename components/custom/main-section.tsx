'use client';

import { useMotionValue } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import HallComponent from '../HallComponent';
import ActivityLogComponent from '../ActivityLogComponent';
import ProofConceptComponent from '../ProofConceptComponent';

import {
  BGFOOTER,
  GRADIENT,
  GRADIENT1,
  GRADIENT2,
  GRADIENT3,
  ICONIMAGE,
  LOGOIMAGE,
  SECTION1IMAGE,
  SECTION2IMAGE,
  SECTION3IMAGE,
  SECTIONIMAGE,
} from '@/lib/constants';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { VideoDisplay } from '../video-display';

const GoblinPage = dynamic(() => import('@/app/(chat)/goblin-chat/page'), {
  ssr: false,
});

export default function MergedSections() {
  const [currentPage, setCurrentPage] = useState<'main' | 'comics' | 'goblin'>(
    'main'
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    console.log(
      'Current video source:',
      isMobile ? '/new/vertical/bg-mobile.mp4' : '/new/horizontal/bg-merge.mp4'
    );
  }, [isMobile]);

  const handleMapClick = () => {
    console.log('Map clicked');
    setCurrentPage('comics');
  };

  const handleGoblinClick = () => {
    console.log('Goblin clicked');
    setCurrentPage('goblin');
  };

  const handleBackClick = () => {
    setCurrentPage('main');
  };

  const [page, setPage] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTransition, setShowTransition] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    // const { clientX, clientY } = event;
    // const moveX = clientX - window.innerWidth / 2;
    // const moveY = clientY - window.innerHeight / 2;
    // x.set(moveX);
    // y.set(moveY);
    // setMousePosition({ x: moveX, y: moveY });
  };

  const onClickHandler = () => {
    setShowTransition(true);

    setTimeout(() => {
      setShowTransition(false);
      setPage(1);
    }, 2000);
  };

  const onBack = () => {
    setShowTransition(true);

    setTimeout(() => {
      setShowTransition(false);
      setPage(0);
    }, 2000);
  };

  if (page === 1) {
    return <HallComponent x={x} y={y} onBack={onBack} />;
  }

  if (page === 2) {
    return <ActivityLogComponent />;
  }

  if (page === 3) {
    return <ProofConceptComponent />;
  }

  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative"
        style={{
          backgroundImage: ` url('nami1.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rotate-180 "
          style={{
            backgroundImage: `url(${GRADIENT2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-[400px] rotate-180 "
          style={{
            backgroundImage: `url(${GRADIENT2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-[400px]"
          style={{
            backgroundImage: `url(${GRADIENT2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* Navigation nlbasl*/}
        <nav className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 text-sm">
          <div className="flex space-x-8">
            <div
              onClick={() => setPage(3)}
              className="hover:underline"
              style={{ letterSpacing: '1px' }}
            >
              Proof of Concept
            </div>
            <div
              onClick={() => setPage(2)}
              className="hover:underline"
              style={{ letterSpacing: '1px' }}
            >
              Activity Log
            </div>
            <a
              href="https://x.com/namisim_?s=21&t=qCtUw31_HDe6N1JCXqxpnA"
              className="hover:underline"
              style={{ letterSpacing: '1px' }}
            >
              Nami on X
            </a>
            <a
              href="https://x.com/zenithorion?s=21&t=qCtUw31_HDe6N1JCXqxpnA"
              className="hover:underline"
              style={{ letterSpacing: '1px' }}
            >
              Architect on X
            </a>
          </div>
          <a
            href="#"
            className=" hover:underline flex gap-2 justify-center items-center"
          >
            <Image src={ICONIMAGE} alt="Logo" width={30} height={30} />
            <span>Buy $NAMI ↗</span>
          </a>
        </nav>

        {/* Main Content */}
        <section className="text-center px-8 absolute bottom-16">
          <h1 className="text-5xl font-bold mb-4">NAMI</h1>
          <p className="text-lg max-w-2xl mx-auto">
            An AI shaped by mythology, powered by blockchain, and guided by the
            tides of your curiosity.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setPage(1)}
              className="px-6 py-3 bg-transparent text-white rounded-3xl   shadow-sm shadow-white transition"
            >
              Interact Now ↗
            </button>
          </div>
        </section>
      </main>

      <main
        className="flex flex-col items-start px-28 justify-center min-h-[1077px]  text-white relative"
        style={{
          backgroundImage: `url(${GRADIENT1}), url(${SECTION2IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Header Section */}
        <section className="text-left py-16 px-8">
          <h1 className="text-4xl font-bold mb-4">
            NAMI AS THE EMBODIMENT <br /> OF OCEANIC WISDOM AND HUMAN <br />{' '}
            CURIOSITY.
          </h1>
          <p className="text-lg  mx-auto mb-6">
            Inspired by Japanese mythology and built with cutting-edge AI.
          </p>

          <div className="mt-32">
            <button
              onClick={() => setPage(1)}
              className="px-6 py-3 bg-transparent text-white rounded-3xl shadow-sm shadow-white transition"
            >
              Interact Now ↗
            </button>
          </div>

          <div
            className="absolute bottom-0 left-0 w-full h-[400px]"
            style={{
              backgroundImage: `url(${GRADIENT2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </section>

        {/* Story Section */}
      </main>
      <section className=" py-16 px-8 w-full bg-black text-white">
        <div className="text-center mb-8 shadow-sm shadow-white rounded-full p-4 w-1/2 m-auto">
          <h2 className="text-3xl font-extralight">
            THE STORY OF NAMI,
            <br /> {'"'}THE WHISPER OF WAVES{'"'}
          </h2>
        </div>
      </section>
      <section
        className="flex flex-col items-start px-28 justify-center min-h-[650px]  text-white relative"
        style={{
          backgroundImage: `url(${GRADIENT3}), url(${SECTION3IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full h-[400px]"
          style={{
            backgroundImage: `url(${GRADIENT2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-[400px] rotate-180 "
          style={{
            backgroundImage: `url(${GRADIENT2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="flex flex-col md:flex-row justify-center gap-8  mx-auto relative z-10 w-full -mt-44">
          <div className="flex-1 text-center">
            <h3 className="text-xl font-semibold mb-4">
              NAMI’s origins in mythology <br /> and technology.
            </h3>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Her purpose to provoke thought <br /> and guide introspection.
            </h3>
          </div>
        </div>
        <div className="border-t-2 border-white mt-16 w-full"></div>
      </section>

      <main>
        {/* Navbar */}
        <div
          className="flex flex-col items-start px-28 justify-between min-h-[800px] text-white relative"
          style={{
            backgroundImage: `url('video3.gif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rotate-180 "
            style={{
              backgroundImage: `url(${GRADIENT2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-[400px] rotate-180 "
            style={{
              backgroundImage: `url(${GRADIENT2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-[400px]"
            style={{
              backgroundImage: `url(${GRADIENT2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Image src={LOGOIMAGE} alt="Background" width={300} height={300} />
          </div>
          <div className="relative z-10 w-full">
            <nav className="flex justify-between w-full items-center px-8 py-4 text-sm">
              <div className="mt-8">
                <a
                  href="#"
                  className=" hover:underline flex gap-2 justify-center items-center"
                >
                  <Image src={ICONIMAGE} alt="Logo" width={30} height={30} />
                  <span>Buy $NAMI ↗</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span>We`re on ↗</span>
                <a href="https://x.com/namisim_?s=21&t=qCtUw31_HDe6N1JCXqxpnA">
                  <button className="rounded-full border border-gray-400 p-2 relative">
                    <FaXTwitter />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={ICONIMAGE}
                        alt="Mini Logo"
                        width={12}
                        height={12}
                      />
                    </div>
                  </button>
                </a>
                <a href="https://x.com/zenithorion?s=21&t=qCtUw31_HDe6N1JCXqxpnA">
                  <button className="rounded-full border border-gray-400 p-2 relative">
                    <FaXTwitter />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={'/image2.png'}
                        alt="Mini Logo"
                        width={12}
                        height={12}
                      />
                    </div>
                  </button>
                </a>
              </div>
            </nav>

            {/* Main Section */}
            <section className="text-center py-16 px-8 relative w-full">
              <h1 className="text-4xl font-bold mb-8">WHAT CAN NAMI DO?</h1>
              <div className="p-6 rounded-lg absolute left-0">
                <h3 className="text-xl font-semibold mb-4">
                  Dynamic Sentient <br /> Interaction
                </h3>
                <p className="text-sm mb-4">
                  Description of personalized <br /> and empathetic engagement.
                </p>
              </div>
              <div className="p-6 rounded-lg absolute right-0">
                <h3 className="text-xl font-semibold mb-4">
                  Fluid Narrative <br /> Generation
                </h3>
                <p className="text-sm mb-4">
                  Collaborative <br /> storytelling and roleplay.
                </p>
              </div>
              <div className="p-6 rounded-lg absolute  left-[40%]  top-[24rem]">
                <h3 className="text-xl font-semibold mb-4">
                  Blockchain Integration
                </h3>
                <p className="text-sm mb-4">
                  Exploration of secure,
                  <br /> decentralized evolution.
                </p>
              </div>
              <div className="absolute -bottom-[400%] left-0 w-full h-[400px]">
                <button
                  onClick={() => setPage(1)}
                  className="px-6 py-3 bg-transparent text-white rounded-full  text-2xl shadow-sm shadow-white transition"
                >
                  Interact Now ↗
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Story Section */}
        <section className="bg-black text-white py-16 px-8">
          <div className=" mb-8 flex w-3/4 m-auto gap-4">
            <h2 className="text-3xl font-semibold">
              Are You Ready to Explore the Depths?
            </h2>
            <p className="text-sm max-w-2xl mx-auto">
              The ocean holds infinite stories, and NAMI invites you to explore
              them. She is your guide to the uncharted depths—of the ocean, of
              technology, of imagination.
            </p>
          </div>{' '}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className=" border border-white p-6 rounded-lg h-60 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Start Interacting with NAMI
                </h3>
                <p className="text-sm mb-4">
                  Embark on a personalized journey with her.
                </p>
              </div>
              <button
                onClick={() => {
                  setPage(1);
                }}
                className="text-white border p-2 hover:underline"
              >
                Interact Now ↗
              </button>
            </div>
            {/* Card 2 */}
            <div className=" border border-white p-6 rounded-lg h-60 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  See Proof of Concept
                </h3>
                <p className="text-sm mb-4">
                  Uncover the secrets of her groundbreaking technology.
                </p>
              </div>
              <button
                onClick={() => {
                  setPage(3);
                }}
                className="text-white border p-2 hover:underline"
              >
                See Now ↗
              </button>
            </div>
            {/* Card 3 */}
            <div className=" border border-white p-6 rounded-lg h-60 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  See Nami{"'"}s Activity
                </h3>
                <p className="text-sm mb-4">
                  Reach out on x.com become part of NAMI{"'"}s world.
                </p>
              </div>
              <a
                href="https://x.com/namisim_?s=21&t=qCtUw31_HDe6N1JCXqxpnA"
                className="text-white border p-2 hover:underline"
              >
                See on x.com ↗
              </a>
            </div>
          </div>{' '}
        </section>

        <section
          className="flex flex-col items-center px-28 py-16 justify-between min-h-[600px] text-white relative"
          style={{
            backgroundImage: `url(${GRADIENT1}), url('video4.gif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug text-center">
            NAMI AS THE EMBODIMENT OF <br />
            OCEANIC WISDOM AND HUMAN CURIOSITY.
          </h1>

          {/* Call-to-action button */}
          <div className="mt-8">
            <a
              href="#"
              className=" hover:underline flex gap-2 justify-center items-center border p-2 rounded-full"
            >
              <Image src={ICONIMAGE} alt="Logo" width={30} height={30} />
              <span>Buy $NAMI ↗</span>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12">
            <p className="text-sm mb-4 text-center">We`re on X</p>
            <div className="flex justify-center items-center space-x-4">
              <a href="https://x.com/namisim_?s=21&t=qCtUw31_HDe6N1JCXqxpnA">
                <button className="rounded-full border border-gray-400 p-4 relative">
                  <FaXTwitter />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={ICONIMAGE}
                      alt="Mini Logo"
                      width={12}
                      height={12}
                    />
                  </div>
                </button>
              </a>
              <a href="https://x.com/zenithorion?s=21&t=qCtUw31_HDe6N1JCXqxpnA">
                <button className="rounded-full border border-gray-400 p-4 relative">
                  <FaXTwitter />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={'/image2.png'}
                      alt="Mini Logo"
                      width={12}
                      height={12}
                    />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
