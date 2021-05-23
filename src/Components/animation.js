// active navbar animation
export const navLineAnimation = {
  hidden: { width: "0%", border: "0px" },
  show: {
    width: "100%",
    border: "2px solid #04befe",
    transition: { duration: 0.5, ease: "backOut", delay: 1 },
  },
};

// animation for title of pages
export const titleContainerAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.75,
    },
  },
};

// animation for the Blue highlighted text
export const specialTextAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: 1 },
  },
};

// animation for image scaling
export const imagePopAnimation = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

// animation page transition
export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: { duration: 1 },
  },
};

// animation for scroll effect
export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
