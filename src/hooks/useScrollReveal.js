// Shared Framer Motion fade-up-on-scroll variants, reused by every section wrapper.
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export function useScrollReveal() {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
    variants: fadeUpVariants,
  };
}

export default useScrollReveal;
