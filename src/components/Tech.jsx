import {SectionWrapper} from '../hoc'
import {technologies} from "../constants/index.js";
import {BallCanvas} from "./canvas/index.js";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologies)=>(
          <div className='w-28 h-28' key={technologies.name}>
            <BallCanvas icon={technologies.icon}/>
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')
