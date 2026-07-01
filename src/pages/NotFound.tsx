import { motion } from 'framer-motion';
import { TbHome } from 'react-icons/tb';
import { PrimaryButton } from '../components/ui/Buttons';

export function NotFound() {
  return (
    <section className="grid-backdrop flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-8xl font-bold text-gradient sm:text-9xl"
      >
        404
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-md text-sm text-white/50 sm:text-base"
      >
        This page doesn't exist — maybe it was filtered out. Let's get you back to the dashboard.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <PrimaryButton href="/" icon={<TbHome className="h-4 w-4" />}>
          Back to Home
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
