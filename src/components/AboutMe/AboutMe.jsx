import './AboutMeStyle.scss'

const AboutMe = (props) => {
  return (
    <div className='about-me-wrapper'>
      <div className='main-title'>About Me 👩🏼</div>
      <div>
        반갑습니다!
        <br />
        저는 풀스택을 향해 달려가고 있는 프론트 엔드 개발자입니다.
      </div>
      <div>디자인 적용시 1px에도 민감한 꼼꼼한 성격을 가지고 있습니다.</div>
      <div>
        업무를 이해하고 능동적으로 기획, UI/UX 개선에도 참여합니다,
        <br />
        뛰어난 실력을 갖추기 위해 서로 배우고 공유하며, 성장하려고 노력합니다.
        <br />
        맡은 바에 최선을 다하고 책임감을 가집니다.
      </div>
      <div>
        커뮤니케이션이 중요하다고 생각하는 저는 팀원들과 함께 코드 리뷰와
        피드백을 주고받는 것을 좋아합니다.
        <br />
        좋은 동료들과 함께 의미있는 개발을 하고, 좋은 개발 문화를 만들고
        싶습니다.
      </div>
    </div>
  )
}

export default AboutMe
