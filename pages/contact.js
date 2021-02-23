import React from 'react';

const BLANK_FORM = {
  name: "",
  email: "",
  phone: "",
  message: ""
}

export default function() {
  const [contactForm, setContactForm] = React.useState(BLANK_FORM);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setContactForm(prevState => ({ ...prevState, [name]: value }))
  }

  // /api/contact request
  async function handleSubmit(event) {
    event.preventDefault();
    // https://next-balkon.vercel.app
    const res = await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactForm)
    })
    
    const data = await res.json()
    
    if (res.status === 200) {
      setContactForm(BLANK_FORM)
      setError("")
      setSuccess(data.message)
    } else {
      setError(data.message)
    }
  }

    return (
        <>
        <div>
            {/* loader */}
            <div className="loader">
              <div id="movingBallG">
                <div className="movingBallLineG" />
                <div id="movingBallG_1" className="movingBallG" />
              </div>
            </div>
            {/* loader end */}
            {/*================= Main   ================*/}
            <div id="main">
              {/*================= header ================*/}
              <header className="main-header">
                {/* logo */}
                <a className="logo-holder" href="index.html"><img src="images/logo.png" alt="" /></a>
                {/* logo end */}  
                {/* share button*/}  
                <div className="show-share-wrap">
                  <div className="show-share"><span>Share</span><img src="images/share.png" alt="" /></div>
                </div>
                {/* share button end*/}  		
                {/* search button*/} 	 
                <div className="show-search show-fixed-search vissearch"><i className="fa fa-search" /></div>
                {/* search button end */} 
                {/* mobile nav */} 
                <div className="nav-button-wrap">
                  <div className="nav-button vis-main-menu"><span /><span /><span /></div>
                </div>
                {/* mobile nav end*/} 
                {/*  navigation */} 
                <div className="nav-holder">
                  <nav>
                    <ul>
                      <li>
                        <a href="index.html">Home </a>
                        {/*second level */}   
                        <ul>
                          <li><a href="index.html">Slider</a></li>
                          <li><a href="index2.html">Image</a></li>
                          <li><a href="index3.html">Video</a></li>
                          <li><a href="index4.html">Slideshow</a></li>
                          <li><a href="index5.html">Carousel</a></li>
                          <li><a href="index6.html">Sidebar menu</a></li>
                          <li>
                            {/*third level */}
                            <a>Onepage</a>
                            <ul>
                              <li><a href="onepage-slider.html">Slider</a></li>
                              <li><a href="onepage-image.html">Image</a></li>
                              <li><a href="onepage-video.html">Video</a></li>
                              <li><a href="onepage-slideshow.html">Slideshow</a></li>
                              <li><a href="onepage-carousel.html">Carousel</a></li>
                              <li><a href="onepage-sidebarmenu.html">Sidebar menu</a></li>
                            </ul>
                            {/*third level end*/}
                          </li>									
                        </ul>
                        {/*second level end*/}
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                        {/*second level */}
                        <ul>
                          <li>
                            {/*third level */}
                            <a>Single</a>
                            <ul>
                              <li><a href="portfolio-single.html">Carousel</a></li>
                              <li><a href="portfolio-single2.html">Gallery </a></li>
                              <li><a href="portfolio-single3.html">Fullwidth Slider</a></li>
                              <li><a href="portfolio-single4.html">Slider</a></li>
                              <li><a href="portfolio-single5.html">Video</a></li>
                              <li><a href="portfolio-single6.html">Vertical Images</a></li>
                            </ul>
                            {/*third level end*/}
                          </li>
                          <li><a href="portfolio2.html">Fullwidth 2</a></li>
                          <li><a href="portfolio3.html">Sibebar filter</a></li>
                          <li><a href="portfolio4.html">Boxed</a></li>
                          <li><a href="portfolio5.html">Boxed 2</a></li>
                          <li><a href="portfolio6.html">Sibebar filter 2</a></li>
                          <li><a href="portfolio7.html">Parallax</a></li>
                          <li><a href="portfolio8.html">Fullwidth 3</a></li>
                          <li><a href="portfolio9.html">Fullwidth 4</a></li>
                        </ul>
                        {/*second level end*/}
                      </li>
                      <li>
                        <a href="about.html">About</a>
                        {/*second level end*/}
                        <ul>
                          <li><a href="about-personal.html">Personal</a></li>
                          <li><a href="services.html">Services</a></li>
                        </ul>
                        {/*second level end*/}
                      </li>
                      <li>
                        <a href="contact.html" className="act-link">Contacts </a>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                        {/*second level end*/}
                        <ul>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="product-single.html">Product Single</a></li>
                        </ul>
                        {/*second level end*/}
                      </li>
                      <li>
                        <a href="blog.html">Journal</a>
                        {/*second level end*/}
                        <ul>
                          <li><a href="blog-grid.html">Grid</a></li>
                          <li><a href="blog-masonry.html">Masonry</a></li>
                          <li><a href="blog-single.html">Post Single</a></li>
                          <li><a href="404.html">404</a></li>
                        </ul>
                        {/*second level end*/}
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* navigation  end */}
              </header>
              {/* header  end */}
              {/*=============== wrapper ===============*/}
              <div id="wrapper">
                {/* content-holder  */}
                <div className="content-holder">
                  {/*  content */} 
                  <div className="content">
                    {/*  section  */} 
                    <section className="parallax-section header-section" data-scrollax-parent="true">
                      <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '200px' }" />
                      <div className="overlay" />
                      <div className="container big-container">
                        <div className="section-title">
                          <h3>Contact Details</h3>
                          <div className="separator trsp-separator" />
                          <h2>Get In Touch <br /> with us</h2>
                          <p>Curabitur bibendum mi sed rhoncus aliquet. Nulla blandit porttitor justo, at posuere sem accumsan nec.</p>
                          <a href="#sec1" className="custom-scroll-link sect-scroll-link"><i className="fa fa-long-arrow-down" /> <span>scroll down</span></a>
                        </div>
                      </div>
                    </section>
                    {/*  section  end*/} 
                    {/*  section  */} 
                    <section>
                      <div className="container">
                        <div className="contact-details-wrap fl-wrap" id="sec1">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="small-sec-title">
                                <h3>Contact details :</h3>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <div className="contact-details fl-wrap">
                                <div className="row border-dec">
                                  <div className="col-md-6">
                                    <h4><span>01.</span>Office in New York</h4>
                                    <ul>
                                      <li><span>Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                                      <li><span>Adress :</span><a href="#" target="_blank">USA 27TH Brooklyn NY</a></li>
                                      <li><span>Phone :</span><a href="#">+7(111)123456789</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6">
                                    <h4><span>02.</span>Work Hours</h4>
                                    <ul>
                                      <li><span>Monday - Friday : </span> 08h.00 - 17h.30</li>
                                      <li><span>Saturday: </span> 08h.00 - 12h.00 </li>
                                      <li><span>Sunday :</span> Off work </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="map-box">
                          <div id="map-canvas" />
                        </div>
                        <div className="contact-details-wrap fl-wrap">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="small-sec-title">
                                <h3>Get in Touch  : </h3>
                              </div>
                            </div>
                            <div className="col-md-9">
                              {/* contact form */}
                              <div className="contact-form-holder fl-wrap">
                                <div id="contact-form">
                                  <div id="success">{success}</div>
                                  <div id="error">{error}</div>
                                  <form onSubmit={handleSubmit} name="contactform">
                                    <input name="name" type="text" id="name" value={contactForm.name} onChange={handleChange} placeholder="Name" />
                                    <input name="email" type="email" id="email" value={contactForm.email} onChange={handleChange} placeholder="Email" />            
                                    <input type="text" name="phone" id="phone" value={contactForm.phone} onChange={handleChange} placeholder="Phone" /> 
                                    <textarea name="message" id="comments" value={contactForm.message} onChange={handleChange} placeholder="Message" />
                                    {/* <div className="verify-wrap">
                                      <span className="verify-text"> How many gnomes were in the story about the "Snow-white" ?</span> 
                                      <input name="verify" type="text" id="verify" onclick="this.select()" defaultValue={0} />
                                    </div>  */}
                                    <button type="submit" id="submit" data-top-bottom="transform: translateY(-50px);" data-bottom-top="transform: translateY(50px);"><span>Send Message </span></button>          										           											
                                  </form>
                                </div>
                              </div>
                              {/* contact form  end*/} 
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  partcile-dec  */}                    
                      <div className="partcile-dec" data-parcount={200} />
                      {/*  partcile-dec  end*/} 
                    </section>
                    {/*  section  end*/} 	
                    {/*  social-wrap  */} 			  
                    <div className="social-wrap fl-wrap">
                      <ul>
                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                      </ul>
                    </div>
                    {/*  social-wrap  end*/} 	
                  </div>
                  {/* content end */}	
                  {/*=============== content-footer   ===============*/}
                  <div className="height-emulator" />
                  <footer className="content-footer">
                    <div className="footer-inner">
                      <div className="row">
                        <div className="col-md-3">
                          <a className="footer-logo" href="index.html"><img src="images/logo.png" alt="" /></a>
                        </div>
                        <div className="col-md-4">
                          <div className="footer-header fl-wrap"><span>01.</span> Contacts</div>
                          <div className="footer-box fl-wrap">
                            <ul>
                              <li><span>Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                              <li> <span>Adress :</span><a href="#" target="_blank">USA 27TH Brooklyn NY</a></li>
                              <li><span>Phone :</span><a href="#">+7(111)123456789</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="footer-header fl-wrap"><span>02.</span> Subscribe</div>
                          <div className="footer-box fl-wrap">
                            <div className="subcribe-form fl-wrap">
                              <span>Newsletter</span>
                              <form id="subscribe">
                                <input className="enteremail" name="email" id="subscribe-email" placeholder="email" spellCheck="false" type="text" />
                                <button type="submit" id="subscribe-button" className="subscribe-button">Submit</button>
                                <label htmlFor="subscribe-email" className="subscribe-message" />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-9">
                          <div className="fl-wrap policy-box">
                            <p> © Balkon   2017.  All rights reserved.</p>
                          </div>
                        </div>
                      </div>
                      <div className="to-top"><i className="fa fa-long-arrow-up" /></div>
                    </div>
                  </footer>
                  {/* content-footer end    */}
                </div>
                {/* content-holder end */}
              </div>
              {/* wrapper end */}
              {/*search-form-holder */}  
              <div className="search-form-holder fixed-search">
                <div className="search-form-bg" />
                <div className="search-form-wrap">
                  <div className="container">
                    <form className="searchform" method="get">
                      <input type="text" autoComplete="off" name="s" placeholder="Type and Enter to Search" />
                    </form>
                    <div className="close-fixed-search" />
                  </div>
                  <div className="dublicated-text" />
                </div>
              </div>
              {/*search-form-holder  end*/}  
              {/* Share container  */}
              <div className="share-wrapper isShare">
                <div className="share-container" />
              </div>
              {/* Share container  end*/}
              {/* footer */}
              <footer className="main-footer">
                <div className="fixed-title"><span>Contacts</span></div>
                <div className="footer-social">
                  <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                  </ul>
                </div>
              </footer>
              {/* footer end*/}
            </div>
          </div>
        </>
    )
}