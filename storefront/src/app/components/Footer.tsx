import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Sales Representative</a>
    <a className="link link-hover">Sales Festivals</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
        {/*ویژگی  rel,target به جهت امنیت  */}
      <a href="www.instagram.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/instagram.png"
          alt="instagram"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
      <a href="www.x.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/x.png"
          alt="x"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
      <a href="www.facebook.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/facebook.png"
          alt="facebook"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
      <a href="www.telegram.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/telegram.png"
          alt="telegram"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
      <a href="www.linkedin.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/linkedin.png"
          alt="linkedin"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
      <a href="www.whatsup.com/Hossein-Yeganeh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/whatsup.png"
          alt="whatsup"

          width="24"
          height="24"
          className="fill-current">

        </img>
      </a>
    
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hossein Yeganeh</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
