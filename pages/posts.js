import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export async function getStaticProps() {
    const { posts } = await graphcms.request(
      `
      query Posts() {
        posts {
          id
          title
          excerpt
          slug
          coverImage {
            id
            url
          }
          author {
            id
            name
          }
          date
        }
      }
    `
    );
  
    return {
      props: {
        posts,
      },
    };
  }
  
  export default ({ posts }) => {
    return (
    //   <div className="py-16 bg-gray-100">
        // {posts.map((post) => {
        //   return (
        //     <Link key={post.id} as={`/post/${post.slug}`} href="/post/[slug]">
        //       <a className="max-w-lg shadow-lg mb-16 rounded-lg mx-auto flex">
        //         <div
        //           className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        //           style={{ backgroundImage: `url(${post.coverImage.url})` }}
        //           title={post.title}
        //         />
        //         <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        //           <div className="mb-8">
        //             <div className="text-gray-900 font-bold text-xl mb-2">
        //               {post.title}
        //             </div>
        //             <p className="text-gray-700 text-base">{post.excerpt}</p>
        //           </div>
        //           <div className="flex items-center">
        //             <div className="text-sm">
        //               <p className="text-gray-900 leading-none">
        //                 {post.author.name}
        //               </p>
        //               <p className="text-gray-600">{post.date}</p>
        //             </div>
        //           </div>
        //         </div>
        //       </a>
        //     </Link>
        //   );
        // })}
    //   </div>
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
                    <a href="blog.html" className="act-link">Journal</a>
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
                  <div className="overlay op1" />
                  <div className="container big-container">
                    <div className="section-title">
                      <h3>Our Blog</h3>
                      <div className="separator trsp-separator" />
                      <h2>Our  Journal </h2>
                      <p>Curabitur bibendum mi sed rhoncus aliquet. Nulla blandit porttitor justo, at posuere sem accumsan nec.</p>
                      <a href="#sec1" className="custom-scroll-link sect-scroll-link"><i className="fa fa-long-arrow-down" /> <span>scroll down</span></a>
                    </div>
                  </div>
                </section>
                {/*  section end*/} 
                {/*  section  */} 
                <section id="sec1">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="post-container fl-wrap">

                        {posts.map((post) => {
                            return (
                                <>
                                {/* post */}
                          <div className="post fl-wrap fw-post">
                            <h2><span>Blog post title</span></h2>
                            <ul className="blog-title-opt">
                              <li><a href="#">{post.date}</a></li>
                              <li>{post.author.name}</li>
                              <li><a href="#">Interviews </a></li>
                              <li><a href="#">Design</a></li>
                            </ul>
                            {/* blog media */}
                            <div className="blog-media fl-wrap">
                              <div className="single-slider fl-wrap" data-effects="slide">
                                <div className="swiper-container">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide"><img src={`${post.coverImage.url}`} alt="" /></div>
                                    <div className="swiper-slide"><img src={`${post.coverImage.url}`} alt="" /></div>
                                    <div className="swiper-slide"><img src={`${post.coverImage.url}`} alt="" /></div>
                                  </div>
                                  <div className="swiper-pagination" />
                                  <div className="swiper-button-prev"><i className="fa fa-angle-left" /></div>
                                  <div className="swiper-button-next"><i className="fa fa-angle-right" /></div>
                                </div>
                              </div>
                            </div>
                            {/* blog media end */}
                            <div className="blog-text fl-wrap">
                              <div className="pr-tags fl-wrap">
                                <span>Tags : </span>
                                <ul>
                                  <li><a href="#">Architecture</a></li>
                                  <li><a href="#">Design</a></li>
                                  <li><a href="#">Photography</a></li>
                                  <li><a href="#">House</a></li>
                                </ul>
                              </div>
                              <h3><a href={`/post/${post.slug}`}>{post.title}</a></h3>
                              <p>
                                {post.excerpt}
                              </p>
                              <a href={`/post/${post.slug}`} className="btn float-btn flat-btn">Read more </a>
                              <ul className="post-counter">
                                <li><i className="fa fa-eye" /><span>687</span></li>
                                <li><i className="fa fa-comment-o" /><span>10</span></li>
                              </ul>
                            </div>
                          </div>
                          {/* post end*/}
                                </>
                            );
                        })}
                              
                        </div>
                      </div>
                      {/* blog-sidebar  */}
                      <div className="col-md-4">
                        <div className="blog-sidebar fl-wrap fixed-bar">
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>01.</span> Search</h4>
                            <div className="widget-container fl-wrap">
                              <div className="searh-holder">
                                <form action="#" className="searh-inner fl-wrap">
                                  <input name="se" id="se" type="text" className="search" placeholder="Search.." defaultValue="Search..." />
                                  <button className="search-submit" id="submit_btn"><i className="fa fa-search transition" /> </button>
                                </form>
                              </div>
                            </div>
                          </div>
                          {/* widget-wrap end  */}
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>02.</span> About Author</h4>
                            <div className="widget-container fl-wrap">
                              <div className="about-widget fl-wrap">
                                <img src="images/team/1.jpg" alt="" />
                                <p>Etiam in nulla arcu, ut vehicula velit. Vivamus dapibus rutrum mi ut aliquam. In hac habitasse platea dictumst. Integer sagittis neque a tortor tempor in porta sem vulputate.</p>
                              </div>
                            </div>
                          </div>
                          {/* widget-wrap end  */}   
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>03.</span> Last Posts</h4>
                            <div className="widget-container fl-wrap">
                              <div className="widget-posts fl-wrap">
                                <ul>
                                  <li className="clearfix">
                                    <a href="#" className="widget-posts-img"><img src="images/folio/1.jpg" className="respimg" alt="" /></a>
                                    <div className="widget-posts-descr">
                                      <a href="#" title>Vivamus dapibus rutrum</a>
                                      <span className="widget-posts-date"> 21 Mar 09.05 </span> 
                                    </div>
                                  </li>
                                  <li className="clearfix">
                                    <a href="#" className="widget-posts-img"><img src="images/folio/1.jpg" className="respimg" alt="" /></a>
                                    <div className="widget-posts-descr">
                                      <a href="#" title> In hac habitasse platea</a>
                                      <span className="widget-posts-date"> 7 Mar 18.21 </span> 
                                    </div>
                                  </li>
                                  <li className="clearfix">
                                    <a href="#" className="widget-posts-img"><img src="images/folio/1.jpg" className="respimg" alt="" /></a>
                                    <div className="widget-posts-descr">
                                      <a href="#" title>Tortor tempor in porta</a>
                                      <span className="widget-posts-date"> 7 Mar 16.42 </span>
                                    </div>
                                  </li>
                                  <li className="clearfix">
                                    <a href="#" className="widget-posts-img"><img src="images/folio/1.jpg" className="respimg" alt="" /></a>
                                    <div className="widget-posts-descr">
                                      <a href="#" title>Praesent aliquet tortor</a>
                                      <span className="widget-posts-date"> 2 Mar 14.42 </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* widget-wrap end  */} 
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>04.</span> Tags</h4>
                            <div className="widget-container fl-wrap">
                              <ul className="tagcloud">
                                <li><a href="#" className="transition link">Portfolio</a></li>
                                <li><a href="#" className="transition link">Tag</a></li>
                                <li><a href="#" className="transition link">Demo</a></li>
                                <li><a href="#" className="transition link">Blog</a></li>
                                <li><a href="#" className="transition link">Photography</a></li>
                                <li><a href="#" className="transition link">Web desighn</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* widget-wrap end  */}                                                 
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>05.</span>Our Instagram</h4>
                            <div className="widget-container fl-wrap">
                              <div className="jr-insta-thumb">
                                <ul>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                  <li>
                                    <a href="#"><img src="images/instagram/1.jpg" alt="" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* widget-wrap end  */}                                            
                          {/* widget-wrap */}
                          <div className="widget-wrap fl-wrap">
                            <h4 className="widget-title"><span>06.</span> Categories</h4>
                            <div className="widget-container fl-wrap">
                              <ul className="cat-item">
                                <li><a href="#">Standard</a> <span>(3)</span></li>
                                <li><a href="#">Video</a> <span>(6) </span></li>
                                <li><a href="#">Gallery</a> <span>(12) </span></li>
                                <li><a href="#">Quotes</a> <span>(4)</span></li>
                              </ul>
                            </div>
                          </div>
                          {/* widget-wrap end  */}                                                                                                                                          
                        </div>
                      </div>
                      {/* blog-sidebar end */}
                      <div className="limit-box fl-wrap" />
                    </div>
                    <div className="content-nav blog-nav">
                      <ul>
                        <li><a href="blog.html" className="ln"><i className="fa fa fa-angle-left" /><span className="tooltip">Prev - Page 1</span></a></li>
                        <li>
                          <a href="#" className="cur-page"><span>Page 02. </span></a>
                        </li>
                        <li><a href="blog.html" className="rn"><i className="fa fa fa-angle-right" /><span className="tooltip">Next - Page 3 </span></a></li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*  section end*/} 
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
            <div className="fixed-title"><span>Blog</span></div>
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
    );
  };