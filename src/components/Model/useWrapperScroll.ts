import { MotionValue, useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ModelsContext from './ModelsContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function useWrapperScroll(): {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
} {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = (): void => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop);
        scrollYProgress.set(scrollTop / fullScroll);
      };

      element.addEventListener('scroll', updateScrollValue);

      return () => element.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return {
    scrollY,
    scrollYProgress,
  };
}
