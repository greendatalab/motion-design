// import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";
import { EventsList } from "../../constants/events";
import { Typography } from "@material-ui/core";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function EventList() {
  return (
      <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {console.log(items)}
        {EventsList.map(event => (
          <Item key={event} event={event} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}>
        <div className="itemHeader">

            <motion.div layout>
                {props.event.icon}
            </motion.div>

            <motion.div className="itemTitle" layout >
                {props.event.title}
            </motion.div>

        </div>
        <AnimatePresence>{isOpen && <Content description={props.event.description}/>}</AnimatePresence>
    </motion.li>
  );
}

function Content(props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Typography variant='body1' >
            {props.description}
        </Typography>
    </motion.div>
  );
}

const items = [0, 1, 2];
