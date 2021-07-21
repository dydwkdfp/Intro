import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {items,skills1} from "./data.js";
import '../styles.css';
import Chip from '@material-ui/core/Chip';

export const Items = ({id}) => {
    const { title } = items.find(item => item.id === id);
    const { text } = items.find(item => item.id === id);
    const { link } = items.find(item => item.id === id);
    const { skills1 } = items.find(item => item.id === id);

    return (
        <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        >
        <Link to="/" />
        </motion.div>
        <div className="card-content-container open">
          <motion.div className="card-content" layoutId={`card-container-${id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
                <a target="_blank" href={link}>
              <img className="card-image" src={require(`./images/${id}.jpg`).default} alt="" />
              </a>
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <h2>{title}</h2>
            </motion.div>
            <motion.div className="content-container" animate>
                <text className="card-text">{text}</text>
                <div className="chip-container">
                    {skills1.map( item => (
                        <Chip className="chip" label={item.skill}/>
                    ))}
                </div>
            </motion.div>
          </motion.div>
        </div>
        </>
    )
}

export default Items
