import { motion } from 'framer-motion';

export const MotionDiv = ({ children, className, ...props }) => (
  <motion.div className={className} {...props}>
    {children}
  </motion.div>
);

export const MotionButton = ({ children, className, onClick, ...props }) => (
  <motion.button className={className} onClick={onClick} {...props}>
    {children}
  </motion.button>
);

export const MotionSpan = ({ children, className, ...props }) => (
  <motion.span className={className} {...props}>
    {children}
  </motion.span>
); 