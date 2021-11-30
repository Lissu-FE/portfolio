import './SkillsStyle.scss'
import { frontEndSkills } from './skillList'

const Skills = (props) => {
  return (
    <div className='lissu-skills-wrapper'>
      <div className='main-title'>I Can Do 💪</div>
      <div className='sub-title'>Front - end</div>
      <div className='icon-wrapper'>
        {frontEndSkills.map((skill) => (
          <div className='one-icon'>
            <img src={skill.src} alt={skill.alt} className='skill-icons' />
          </div>
        ))}
      </div>
      <div className='sub-title'>Version Control</div>
      <div className='icon-wrapper'></div>
      <div className='sub-title'>Communication</div>
      <div className='icon-wrapper'></div>
      <div className='sub-title'>Certificate</div>
      <div className='icon-wrapper'></div>
    </div>
  )
}

export default Skills
