import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src="http://thepizzacompany-myanmar.com/assets/images/logo.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas architecto accusamus consequatur praesentium voluptatibus obcaecati nobis labore modi cupiditate, nam fugiat ea dignissimos velit, sed perferendis placeat fugit! Dicta, sint?</p>
        <p>© 2023 bla bla bla</p>

        <div className='d-flex justify-content-around footer-icon'>
            <i className='bi bi-facebook'></i>
            <i className='bi bi-youtube'></i>
            <i className='bi bi-instagram'></i>
        </div>
      </div>
    </>
  )
}

export default Footer
