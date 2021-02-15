import Link from 'next/link'

export default function About() {
    return (
        <>
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
                      <a href="/">Home</a>
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
                      <a href="about.html" className="act-link">About</a>
                      {/*second level end*/}
                      <ul>
                        <li><a href="about-personal.html">Personal</a></li>
                        <li><a href="services.html">Services</a></li>
                      </ul>
                      {/*second level end*/}
                    </li>
                    <li>
                      <a href="contact.html">Contacts </a>
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
                  {/*  sroll-nav-wrap */} 
                  <div className="sroll-nav-wrap">
                    <div className="sroll-nav-container">
                      <nav className="scroll-nav scroll-init fl-wrap">
                        <ul>
                          <li><a className="scroll-link act-scrlink" href="#sec1">01.<span>Hero</span></a></li>
                          <li><a className="scroll-link" href="#sec2">02.<span>About</span></a></li>
                          <li><a className="scroll-link" href="#sec3">03.<span>Skills</span></a></li>
                          <li><a className="scroll-link" href="#sec4">04.<span>Video</span></a></li>
                          <li><a className="scroll-link" href="#sec5">05.<span>Team</span></a></li>
                          <li><a className="scroll-link" href="#sec6">06.<span>Story</span></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/*  sroll-nav-wrap end */} 
                  {/*  section */} 
                  <section className="parallax-section header-section" data-scrollax-parent="true" id="sec1">
                    <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '200px' }" />
                    <div className="overlay" />
                    <div className="container big-container">
                      <div className="section-title">
                        <h3>Who we are</h3>
                        <div className="separator trsp-separator" />
                        <h2>About Or Studio</h2>
                        <p>Curabitur bibendum mi sed rhoncus aliquet. Nulla blandit porttitor justo, at posuere sem accumsan nec.</p>
                        <a href="#sec2" className="custom-scroll-link sect-scroll-link"><i className="fa fa-long-arrow-down" /> <span>scroll down</span></a>
                      </div>
                    </div>
                  </section>
                  {/*  section end */} 
                  {/*  section */} 
                  <section id="sec2" data-scrollax-parent="true">
                    <div className="container">
                      <div className="section-container fl-wrap">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="pr-title">
                              Who We are
                              <span>Lorem Ipsum generators on the Internet tend to repeat king this the first true generator . </span>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="content-wrap about-wrap">
                              <div className="blog-media fl-wrap">
                                <div className="box-item">
                                  <img src="images/folio/1.jpg" className="respimg" alt="" />
                                  <div className="overlay" />
                                  <a href="images/folio/1.jpg" className="image-popup popup-image"><i className="fa fa-search" /></a>
                                </div>
                              </div>
                              <h3 className="bold-title">Welcome!  We  are Balkon</h3>
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
                        </div>
                      </div>
                    </div>
                    <div className="bg dec-bg left-pos-dec" data-bg="images/bg/14.jpg" />
                  </section>
                  {/*  section end */} 
                  {/*  section */} 
                  <section className="sml-pad-sec">
                    <div className="container">
                      <div className="facts-wrap fl-wrap">
                        <div className="inline-facts-holder fl-wrap">
                          {/* inline-facts */}
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div className="num" data-content={461} data-num={461}>461</div>
                              </div>
                            </div>
                            <h6>Finished projects</h6>
                          </div>
                          {/* inline-facts end */}
                          {/* inline-facts  */}
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div className="num" data-content={461} data-num={461}>461</div>
                              </div>
                            </div>
                            <h6>Finished projects</h6>
                          </div>
                          {/* inline-facts end */}
                          {/* inline-facts  */}
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div className="num" data-content={168} data-num={168}>168</div>
                              </div>
                            </div>
                            <h6>Happy customers</h6>
                          </div>
                          {/* inline-facts end */}
                          {/* inline-facts  */}
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div className="num" data-content={222} data-num={222}>222</div>
                              </div>
                            </div>
                            <h6>Working hours </h6>
                          </div>
                          {/* inline-facts end */}
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*  section end */} 
                  {/*  section */} 
                  <section id="sec3">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="pr-title">
                            Our Skills
                            <span>Lorem Ipsum generators on the Internet tend to repeat king this the first true generator</span>
                          </div>
                        </div>
                        <div className="col-md-8">
                          {/* skills  */}
                          <div className="piechart-holder animaper" data-skcolor="#000">
                            <div className="row">
                              {/* 1  */}
                              <div className="piechart col-md-4">
                                <span className="chart" data-percent={85}>
                                  <span className="percent" />
                                </span>
                                <div className="clearfix" />
                                <div className="skills-description">
                                  <h4>Design</h4>
                                </div>
                              </div>
                              {/* 1 end */}
                              {/* 2  */}
                              <div className="piechart col-md-4">
                                <span className="chart" data-percent={95}>
                                  <span className="percent" />
                                </span>
                                <div className="clearfix" />
                                <div className="skills-description">
                                  <h4>Architecture</h4>
                                </div>
                              </div>
                              {/* 2 end  */}
                              {/* 3  */}
                              <div className="piechart col-md-4">
                                <span className="chart" data-percent={80}>
                                  <span className="percent" />
                                </span>
                                <div className="clearfix" />
                                <div className="skills-description">
                                  <h4>Construction</h4>
                                </div>
                              </div>
                              {/* 3  end*/}																
                            </div>
                          </div>
                          {/* skills  end*/}
                        </div>
                      </div>
                    </div>
                    <div className="partcile-dec" />
                    <div className="border-section-wrap">
                      <div className="border-section" />
                    </div>
                  </section>
                  {/*  section end */}
                  {/*  section  */} 									 
                  <section className="parallax-section" id="sec4">
                    <div className="media-container">
                      <div className="video-mask" />
                      <div className="video-holder">
                        <div className="video-container">
                          <video autoPlay loop muted className="bgvid">
                            <source src="http://balkon.kwst.net/site/light/video/intro.mp4" type="video/mp4" />
                          </video>
                        </div>
                        {/*  
                                  Vimeo code
                                  
                                      <div  class="background-vimeo" data-vim="97871257"> </div> */} 
                        {/*  
                                  Youtube code 
                                  
                                      <div  class="background-youtube" data-vid="Hg5iNVSp2z8" data-mv="1"> </div> */}
                        <div className="mob-bg bg" data-bg="images/bg/1.jpg" />
                      </div>
                    </div>
                    <div className="overlay" />
                    <div className="container">
                      <div className="promo-video fl-wrap">
                        <span className="promo-video-text">Our <br />Story  <br /> Promo - Video</span>
                        <p>Internet tend to repeat predefined chunks If you are going to use a passage of Lorem Ipsum.</p>
                        <a href="https://vimeo.com/77416730" className="image-popup"><i className="fa fa-play" /></a>
                      </div>
                    </div>
                  </section>
                  {/*  section end */} 
                  {/*  section */} 
                  <section id="sec5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="pr-title">
                            Our team
                            <span>Internet tend to repeat predefined chunks If you are going to use a passage of Lorem Ipsum.</span>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <ul className="team-holder fl-wrap">
                            {/* 1 */}
                            <li>
                              <div className="team-box">
                                <div className="team-photo">
                                  <div className="overlay" />
                                  <ul className="team-social">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-behance" /></a></li>
                                  </ul>
                                  <img src="images/team/1.jpg" alt="" className="respimg" /><span>Find on</span>										
                                </div>
                                <div className="team-info">
                                  <h3>David Gray</h3>
                                  <h4>Co-manager associated</h4>
                                </div>
                              </div>
                            </li>
                            {/* 2 */}
                            <li>
                              <div className="team-box">
                                <div className="team-photo">
                                  <div className="overlay" />
                                  <ul className="team-social">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-behance" /></a></li>
                                  </ul>
                                  <img src="images/team/1.jpg" alt="" className="respimg" /><span>Find on</span>										
                                </div>
                                <div className="team-info">
                                  <h3>Austin Evon</h3>
                                  <h4>Co-manager associated</h4>
                                </div>
                              </div>
                            </li>
                            {/* 3 */}
                            <li>
                              <div className="team-box">
                                <div className="team-photo">
                                  <div className="overlay" />
                                  <ul className="team-social">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-behance" /></a></li>
                                  </ul>
                                  <img src="images/team/1.jpg" alt="" className="respimg" /><span>Find on</span>										
                                </div>
                                <div className="team-info">
                                  <h3>Taylor Roberts</h3>
                                  <h4>Co-manager associated</h4>
                                </div>
                              </div>
                            </li>
                            {/* 4 */}
                            <li>
                              <div className="team-box">
                                <div className="team-photo">
                                  <div className="overlay" />
                                  <ul className="team-social">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-behance" /></a></li>
                                  </ul>
                                  <img src="images/team/1.jpg" alt="" className="respimg" /><span>Find on</span>										
                                </div>
                                <div className="team-info">
                                  <h3>David Gray</h3>
                                  <h4>Co-manager associated</h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-section-wrap">
                      <div className="border-section" />
                    </div>
                  </section>
                  {/*  section end */} 
                  {/*  section */} 			 
                  <section className=" parallax-section content-parallax-section" data-scrollax-parent="true">
                    <div className="bg" data-bg="images/bg/1.jpg" data-scrollax="properties: { translateY: '200px' }" />
                    <div className="overlay" />
                    <div className="container">
                      <div className="intro-text fl-wrap">
                        <h2>Ready to order your project ?  <br />Get in touch</h2>
                        <a href="contact.html" className="btn float-btn flat-btn">Our Contacts</a>
                      </div>
                    </div>
                  </section>
                  {/*  section end */} 
                  {/*  section  */} 
                  <section id="sec6">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="pr-title">
                            Our Story
                            <span>Lorem Ipsum generators on the Internet tend to repeat king this the first true generator . </span>
                          </div>
                        </div>
                      </div>
                      <div className="custom-inner-holder">
                        {/* 1 */}	
                        <div className="custom-inner">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="cus-inner-title fl-wrap">
                                <h3>2016</h3>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h4>Complete the project "domik"</h4>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                              <ul>
                                <li>Door portals plan</li>
                                <li>Furniture specifications</li>
                                <li>Interior design</li>
                              </ul>
                              <span className="custom-inner-dec" />
                            </div>
                          </div>
                        </div>
                        {/* 1 */}
                        {/* 2 */}	
                        <div className="custom-inner">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="cus-inner-title fl-wrap">
                                <h3>2015</h3>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h4>Passage of Lorem Ipsum</h4>
                              <p>We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above.</p>
                              <span className="custom-inner-dec" />
                            </div>
                          </div>
                        </div>
                        {/* 2 end */}
                        {/* 3 */}	
                        <div className="custom-inner">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="cus-inner-title fl-wrap">
                                <h3>2013</h3>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h4>Making this the first</h4>
                              <p>We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above. All the Lorem Ipsum generators on the Internet tend .</p>
                              <ul>
                                <li>Door portals plan</li>
                                <li>Furniture specifications</li>
                                <li>Interior design</li>
                              </ul>
                              <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                              <span className="custom-inner-dec" />      
                            </div>
                          </div>
                        </div>
                        {/* 3 end */}
                      </div>
                      <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-8">
                          <a href="#" className="btn float-btn flat-btn">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="bg dec-bg left-pos-dec " data-bg="images/bg/15.jpg" />
                  </section>
                  {/*  section end */} 
                  <div className="limit-box fl-wrap" />
                </div>
                {/*  content end */} 
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
              <div className="fixed-title"><span>About us</span></div>
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
        </>
    )
}