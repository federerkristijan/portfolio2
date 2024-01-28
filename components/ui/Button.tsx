import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ ...props}: ButtonProps) {
  return (
    <motion.div whileTap={{ scale: 0.95 }} tabIndex={-1}>
      <button
        className='inline-flex items-center justify-center rounded-3xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-white focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none bg-brand-second border border-brand-second text-white lg:hover:bg-opacity-90 focus:ring-brand-second px-6 py-3 shadow-btn-primary w-full'
        {...props}
      />
    </motion.div>
  )
}
