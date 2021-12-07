import './SkillsStyle.scss'
import {
  frontEndSkills,
  versionControlSkills,
  communicationSkills,
  certificateSkills,
  backEndSkills
} from './skillList'

const Skills = (props) => {
  return (
    <div className='lissu-skills-wrapper'>
      <div className='main-title'>I Can Do 💪</div>
      <div className='sub-title'>Front - end</div>
      <div className='icon-wrapper'>
        {frontEndSkills.map((skill) => (
          <div className='one-skill'>
            <div className='one-icon'>
              <img src={skill.src} alt={skill.alt} className='skill-icons' />
            </div>
            <div>{skill.alt} </div>
          </div>
        ))}
      </div>
      <div className='sub-title'>Version Control</div>
      <div className='icon-wrapper'>
        {versionControlSkills.map((skill) => (
          <div className='one-skill'>
            <div className='one-icon'>
              <img src={skill.src} alt={skill.alt} className='skill-icons' />
            </div>
            <div>{skill.alt} </div>
          </div>
        ))}
      </div>
      <div className='sub-title'>Communication</div>
      <div className='icon-wrapper'>
        {communicationSkills.map((skill) => (
          <div className='one-skill'>
            <div className='one-icon'>
              <img src={skill.src} alt={skill.alt} className='skill-icons' />
            </div>
            <div>{skill.alt} </div>
          </div>
        ))}
      </div>
      <div className='sub-title'>Certificate</div>
      <div className='icon-wrapper'>
        {certificateSkills.map((skill) => (
          <div className='one-skill'>
            <div className='one-icon'>
              <img src={skill.src} alt={skill.alt} className='skill-icons' />
            </div>
            <div>{skill.alt} </div>
          </div>
        ))}
      </div>
      <div className='sub-title'>Back - end</div>
      <div className='icon-wrapper'>
        {backEndSkills.map((skill) => (
          <div className='one-skill'>
            <div className='one-icon'>
              <img src={skill.src} alt={skill.alt} className='skill-icons' />
            </div>
            <div>{skill.alt} </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
