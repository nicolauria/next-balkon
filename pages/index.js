import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
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
          <Header />
          {/*=============== wrapper ===============*/}
          <div id="wrapper">
            {/* content-holder  */}
            <div className="content-holder">
              {/* home-slider  */}
              <div className="fs-gallery-wrap home-slider fl-wrap full-height" data-autoplayslider={5000}>
                <div className="slide-progress-container">
                  <div className="slide-progress-content">
                    <div className="slide-progress-warp">
                      <div className="slide-progress" />
                    </div>
                  </div>
                </div>
                <div className="swiper-container" data-scrollax-parent="true">
                  <div className="swiper-wrapper">
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '250px' }" />
                      <a href="images/bg/1.jpg" className="  gallery-popup image-popup"><i className="fa fa-search" /></a>
                      <div className="overlay" />
                      {/* hero-wrap*/}           
                      <div className="hero-wrap alt">
                        <div className="container">
                          <div className="hero-item">
                            <h3>predefined chunks</h3>
                            <h2>Balkon Architecture <br /> Studio</h2>
                            <div className="clearfix" />
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                            <div className="clearfix" />
                            <a href="portfolio.html" className="btn float-btn flat-btn">Our portfolio</a>
                          </div>
                        </div>
                      </div>
                      {/* hero-wrap end*/}   
                    </div>
                    {/* swiper-slide end*/}
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '250px' }" />
                      <a href="images/bg/1.jpg" className="gallery-popup image-popup"><i className="fa fa-search" /></a>
                      <div className="overlay" />
                      {/* hero-wrap*/}           
                      <div className="hero-wrap alt">
                        <div className="container">
                          <div className="hero-item">
                            <h3>molestie faucibus</h3>                                            
                            <h2> Architecture Project<br /> Title</h2>
                            <div className="clearfix" />
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                            <div className="clearfix" />
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View Project</a>
                          </div>
                        </div>
                      </div>
                      {/* hero-wrap end*/}   
                    </div>
                    {/* swiper-slide end*/}
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '250px' }" />
                      <a href="images/bg/1.jpg" className="  gallery-popup image-popup"><i className="fa fa-search" /></a>
                      <div className="overlay" />
                      {/* hero-wrap*/}           
                      <div className="hero-wrap alt">
                        <div className="container">
                          <div className="hero-item">
                            <h3>tend to repeat</h3>                                            
                            <h2> Interior <br /> Project Title</h2>
                            <div className="clearfix" />
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                            <div className="clearfix" />
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View Project</a>
                          </div>
                        </div>
                      </div>
                      {/* hero-wrap end*/}   
                    </div>
                    {/* swiper-slide end*/}
                    {/* swiper-slide*/}
                    <div className="swiper-slide">
                      <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '250px' }" />
                      <a href="images/bg/1.jpg" className="gallery-popup image-popup"><i className="fa fa-search" /></a>
                      <div className="overlay" />
                      {/* hero-wrap*/}           
                      <div className="hero-wrap alt">
                        <div className="container">
                          <div className="hero-item">
                            <h3>Cras lacinia magna</h3>                                              
                            <h2> Our services <br /> What we do</h2>
                            <div className="clearfix" />
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                            <div className="clearfix" />
                            <a href="services.html" className="btn float-btn flat-btn">Our Services</a>
                          </div>
                        </div>
                      </div>
                      {/* hero-wrap end*/}   
                    </div>
                    {/* swiper-slide end*/}
                  </div>
                  <div className="sw-button swiper-button-next"><i className="fa fa-angle-right" /></div>
                  <div className="sw-button swiper-button-prev"><i className="fa fa-angle-left" /></div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              {/* home-slider end*/}
              {/*content*/}	 
              <div className="content">
                {/*section */}	
                <section id="sec2" data-scrollax-parent="true">
                  <div className="container">
                    <div className="section-container fl-wrap">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="content-wrap about-wrap">
                            <h3 className="bold-title">Welcome !  We are Balkon .  <br />   Architecture Studio <br /> From NY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.  
                              Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit.  
                            </p>
                            <br /><br />
                            <h3 className="bold-title">What we do</h3>
                            <div className="pr-tags fl-wrap">
                              <span>Services : </span>
                              <ul>
                                <li><a href="#">Architecture</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Photography</a></li>
                              </ul>
                            </div>
                            <span className="bold-separator" />
                            <div className="clearfix" />
                            <a href="portfolio.html" className="btn float-btn flat-btn">Our portfolio</a>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="box-item">
                            <img src="images/folio/1.jpg" className="respimg" alt="" />
                            <div className="overlay" />
                            <a href="images/folio/1.jpg" className="image-popup popup-image"><i className="fa fa-search" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg dec-bg left-pos-dec" data-bg="images/bg/14.jpg" />
                </section>
                {/*section end  */}	
                {/*section */}	
                <section>
                  <div className="bg" data-bg="images/bg/1.jpg" />
                  <div className="overlay" />
                  <div className="container">
                    <div className="intro-text fl-wrap">
                      <h2>Entrust your project <br />to our team of  <br />professionals</h2>
                      <a href="services.html" className="btn float-btn flat-btn">Our Services</a>
                      <a href="contact.html" className="btn float-btn flat-btn">Get in Touch</a>
                    </div>
                  </div>
                </section>
                {/*section end  */}	
                {/*section */}	                             	 
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="pr-title">
                          Our Featured Work
                          <span>Lorem Ipsum generators on the Internet tend to repeat king this the first true generator . </span>
                        </div>
                      </div>
                    </div>
                    {/*parallax-item */}	
                    <div className="row">
                      <div className="col-md-5" />
                      <div className="col-md-7">
                        <div className="parallax-item fl-wrap" data-scrollax-parent="true">
                          <div className="parallax-header fl-wrap">
                            <span>01.</span>
                            <ul>
                              <li><a href="#">Design</a></li>
                              <li><a href="#">Architecture </a></li>
                            </ul>
                          </div>
                          <img src="images/folio/2.jpg" alt="" />
                          <div className="parallax-text left-pos" data-scrollax="properties: { translateY: '-250px' }">
                            <h3><a href="portfolio-single.html">Theatre de Stoep</a></h3>
                            <h4>There are many variations of passages of Lorem Ipsum</h4>
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View project</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*parallax-item end*/}	
                    {/*parallax-item */}	
                    <div className="row">
                      <div className="col-md-7">
                        <div className="parallax-item fl-wrap" data-scrollax-parent="true">
                          <div className="parallax-header fl-wrap">
                            <span>02.</span>
                            <ul>
                              <li><a href="#">Design</a></li>
                              <li><a href="#">Architecture </a></li>
                            </ul>
                          </div>
                          <img src="images/folio/1.jpg" alt="" />
                          <div className="parallax-text right-pos" data-scrollax="properties: { translateY: '-250px' }">
                            <h3><a href="portfolio-single.html">New Acropolis Museum</a></h3>
                            <h4>There are many variations of passages of Lorem Ipsum</h4>
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View project</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*parallax-item end*/}	                    
                    {/*parallax-item */}	
                    <div className="row">
                      <div className="col-md-5" />
                      <div className="col-md-7">
                        <div className="parallax-item fl-wrap" data-scrollax-parent="true">
                          <div className="parallax-header fl-wrap">
                            <span>03.</span>
                            <ul>
                              <li><a href="#">Design</a></li>
                              <li><a href="#">Architecture </a></li>
                            </ul>
                          </div>
                          <img src="images/folio/1.jpg" alt="" />
                          <div className="parallax-text left-pos" data-scrollax="properties: { translateY: '-250px' }">
                            <h3><a href="portfolio-single.html">Theatre de Stoep</a></h3>
                            <h4>There are many variations of passages of Lorem Ipsum</h4>
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View project</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*parallax-item end*/}	
                    {/*parallax-item */}	
                    <div className="row">
                      <div className="col-md-7">
                        <div className="parallax-item fl-wrap" data-scrollax-parent="true">
                          <div className="parallax-header fl-wrap">
                            <span>04.</span>
                            <ul>
                              <li><a href="#">Design</a></li>
                              <li><a href="#">Architecture </a></li>
                            </ul>
                          </div>
                          <img src="images/folio/1.jpg" alt="" />
                          <div className="parallax-text right-pos" data-scrollax="properties: { translateY: '-250px' }">
                            <h3><a href="portfolio-single.html">New Acropolis Museum</a></h3>
                            <h4>There are many variations of passages of Lorem Ipsum</h4>
                            <a href="portfolio-single.html" className="btn float-btn flat-btn">View project</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*parallax-item end*/}	                       
                  </div>
                  <div className="partcile-dec" data-parcount={250} />
                </section>
                {/*section end  */}	
                {/*section */}	
                <section className="parallax-section header-section  " data-scrollax-parent="true" id="sec6">
                  <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '200px' }" />
                  <div className="overlay" />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="pr-title">
                          Testimonials
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="single-slider testilider fl-wrap" data-effects="slide">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <h3>Andy Smith</h3>
                                  <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"</p>
                                  <a href="#" className="btn float-btn flat-btn" target="_blank">Via Twitter</a>
                                </div>
                              </div>
                              {/* swiper-slide end*/}
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <h3>Liza Mirovsky</h3>
                                  <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae"</p>
                                  <a href="#" className="btn float-btn flat-btn" target="_blank">Via Facebook</a>
                                </div>
                              </div>
                              {/* swiper-slide end*/}
                              {/* swiper-slide */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <h3>Gary Trust</h3>
                                  <p>"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."</p>
                                  <a href="#" className="btn float-btn flat-btn" target="_blank">Via Myspace</a>
                                </div>
                              </div>
                              {/* swiper-slide end*/}
                            </div>
                            <div className="swiper-pagination" />
                            <div className="swiper-button-prev"><i className="fa fa-angle-left" /></div>
                            <div className="swiper-button-next"><i className="fa fa-angle-right" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*section end  */}	
                {/*section */}	
                <section>
                  <div className="container">
                    <div className="clients-list fl-wrap">
                      <ul>
                        <li><a href="#" target="_blank"> <img src="images/clients/1.jpg" alt="" /> </a></li>
                        <li><a href="#" target="_blank"> <img src="images/clients/1.jpg" alt="" /> </a></li>
                        <li><a href="#" target="_blank"> <img src="images/clients/1.jpg" alt="" /> </a></li>
                        <li><a href="#" target="_blank"> <img src="images/clients/1.jpg" alt="" /> </a></li>
                        <li><a href="#" target="_blank"> <img src="images/clients/1.jpg" alt="" /> </a></li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*section end  */}	
                {/*social-wrap */}	  
                <div className="social-wrap fl-wrap">
                  <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                  </ul>
                </div>
                {/*social-wrap end*/}	
              </div>
              {/* content  end */} 
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
            <div className="fixed-title"><span>Home Slider</span></div>
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
