import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionDivProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  className?: string;
};

type MotionButtonProps = HTMLMotionProps<'button'> & {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

type MotionSpanProps = HTMLMotionProps<'span'> & {
  children: ReactNode;
  className?: string;
};

export const MotionDiv = ({ children, className, ...props }: MotionDivProps) => (
  <motion.div className={className} {...props}>
    {children}
  </motion.div>
);

export const MotionButton = ({ children, className, onClick, ...props }: MotionButtonProps) => (
  <motion.button className={className} onClick={onClick} {...props}>
    {children}
  </motion.button>
);

export const MotionSpan = ({ children, className, ...props }: MotionSpanProps) => (
  <motion.span className={className} {...props}>
    {children}
  </motion.span>
); 