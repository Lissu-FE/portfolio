import './FooterStyle.scss'

const Footer = (props) => {
  return (
    <div className='footer-wrapper'>
      <div>Make By Lissu❤️</div>
      <div
        className='lissu-finish-logo'
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        &lt; Lissu /&gt;
      </div>
    </div>
  )
}

export default Footer
