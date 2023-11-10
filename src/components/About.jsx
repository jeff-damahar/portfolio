import React from "react";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {services} from "../constants/index.js";
import {Tilt} from "react-tilt";
import {SectionWrapper} from '../hoc'

const ServiceCard =({index,title,icon})=>{
    return(
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
            variants={fadeIn('right','spring',0.5*index,0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title}
                    className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About =()=>{
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                variants={fadeIn('','',0.1,1)}
            >
                Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word
                in classical literature, discovered the undoubtable
                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC.
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((services,index)=>(
                    <ServiceCard key={services.title} index={index} {...services} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About,'about')
