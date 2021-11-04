import './HelloStyle.scss'
import memoji from '../../assets/memoji.png'
import gitHub from '../../assets/git-hub.png'
import tistory from '../../assets/tistory.png'
import instagram from '../../assets/instagram.png'

const Hello = () => {
  return (
    <div className='lissu-hello-wrapper'>
      <div className='memoji-wrapper'>
        <img src={memoji} alt='memoji' className='memoji' />
      </div>
      <div className='my-role'>Front-end Developer</div>
      <div className='social-wrapper'>
        <img
          src={gitHub}
          alt='gitHub'
          className='social-icons git'
          onClick={() => {
            window.open('https://github.com/Lissu-FE', '_blank')
          }}
        />
        <img
          src={tistory}
          alt='tistory'
          className='social-icons'
          onClick={() => {
            window.open('https://lissu.tistory.com/', '_blank')
          }}
        />
        <img
          src={instagram}
          alt='instagram'
          className='social-icons'
          onClick={() => {
            window.open('https://www.instagram.com/lissu_o_o/', '_blank')
          }}
        />
      </div>
      <div>안녕하세요!</div>
      <div>저는 이슬 입니다 :D</div>
    </div>
  )
}

export default Hello
