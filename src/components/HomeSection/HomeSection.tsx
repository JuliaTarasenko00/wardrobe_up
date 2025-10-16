import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { heroContent } from './options';
import './home_style.css';

export const HomeSection = () => {
  const [slide, setSlide] = useState<number>(0);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % heroContent.length);
    setUserInteracted(true);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
    setUserInteracted(true);
  };

  useEffect(() => {
    if (!userInteracted) {
      intervalRef.current = setInterval(() => {
        setSlide((prev) => (prev + 1) % heroContent.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [userInteracted]);

  useEffect(() => {
    if (userInteracted) {
      const timeout = setTimeout(() => setUserInteracted(false), 20000);
      return () => clearTimeout(timeout);
    }
  }, [userInteracted]);

  return (
    <section className="hero">
      <div className="container hero__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroContent[slide].title}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeIn' }}
            className="hero__wrapper"
          >
            <div className="hero__img">
              <img src={heroContent[slide].imgUrl} alt="" />
            </div>
            <div className="hero__content">
              <h1 className="hero__title">{heroContent[slide].title}</h1>
              <p className="hero__subtitle">{heroContent[slide].subtitle}</p>
              <button type="button" className="hero__btn">
                {heroContent[slide].buttonContent}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="hero__arrow-wrapper">
          <button onClick={prevSlide} className="prev">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={nextSlide} className="next">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  );
};
