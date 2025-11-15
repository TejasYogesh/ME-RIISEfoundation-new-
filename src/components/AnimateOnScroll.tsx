import * as React from "react"
import { motion, useInView } from "framer-motion"

// Define the props for the component
interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Allow passing a custom delay
}

/**
 * A reusable component that animates its children (fades and slides them in)
 * when they scroll into the viewport.
 */
export function AnimateOnScroll({ children, className, delay = 0 }: Props) {
  // A 'ref' to track the DOM element
  const ref = React.useRef(null);
  
  // useInView hook tracks if the element is in view
  // 'once: true' means it will only animate once
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px 0px" // Triggers a little later
  });

  return (
    // Use 'motion.section' which is like a <section> tag
    // but with animation capabilities.
    <motion.section
      ref={ref}
      className={className} // Pass through any classes
      
      // Initial state (before animation)
      initial={{ opacity: 0, y: 50 }}
      
      // Animate to this state (when in view)
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      
      // Transition settings
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut",
        delay: delay // Apply the delay
      }}
    >
      {children}
    </motion.section>
  );
}