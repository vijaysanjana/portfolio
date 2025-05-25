import { motion, AnimatePresence } from "framer-motion";
import "../../styles/globals.css";
import { DarkModeProvider } from "../../context/DarkModeContext";


function MyApp({ Component, pageProps, router }) {
  return (
    <DarkModeProvider>
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </DarkModeProvider>
  );
}

export default MyApp;
