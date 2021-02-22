import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head"

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content{
          text
        }
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
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
      posts {
        id
        title
        content{
          text
        }
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
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ post }) => {
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
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="post-container fl-wrap">
                          {/* post */}
                          <div className="post fl-wrap fw-post single-post">
                            <h2><span>{post.title}</span></h2>
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
                              {post.content.text}
                            </div>
                            <ul className="post-counter single-post-counter">
                              <li><i className="fa fa-eye" /><span>687</span></li>
                              <li><i className="fa fa-comment-o" /><span>10</span></li>
                            </ul>
                          </div>
                          {/* post end*/}
                          {/* post-author*/}                                   
                          <div className="post-author">
                            <div className="author-img">
                              <img alt="" src="images/blog/1.jpg" />	
                            </div>
                            <div className="author-content">
                              <h5><a href="#">Jane Kowalski</a></h5>
                              <p>At one extremity the rope was unstranded, and the separate spread yarns were all braided and woven round the socket of the harpoon; the pole was then driven hard up into the socket; from the lower end the rope was traced half-way along the pole’s length, and firmly secured so, with intertwistings of twine.</p>
                              <div className="author-social">
                                <ul>
                                  <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                  <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                  <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                  <li><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                  <li><a href="#" target="_blank"><i className="fa fa-tumblr" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*post-author end*/}
                          <div id="comments" className="single-post-comm">
                            {/*title*/}
                            <h6 id="comments-title">Comments<span>( 2 )</span></h6>
                            <ul className="commentlist clearafix">
                              <li className="comment">
                                <div className="comment-body">
                                  <div className="comment-author">
                                    <img alt="" src="images/blog/users/1.jpg" width={50} height={50} />
                                  </div>
                                  <cite className="fn"><a href="#">Kevin</a></cite>
                                  <div className="comment-meta">
                                    <h6><a href="#">January 02, 2014 at 07:39 am</a> / <a className="comment-reply-link" href="#">Reply</a></h6>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                </div>
                              </li>
                              <li className="comment">
                                {/*comment body*/}
                                <div className="comment-body">
                                  <div className="comment-author">
                                    <img alt="" src="images/blog/users/1.jpg" width={50} height={50} />
                                  </div>
                                  <cite className="fn"><a href="#">Andy</a></cite>
                                  <div className="comment-meta">
                                    <h6><a href="#">January 22, 2014 at 03:19 am</a> / <a className="comment-reply-link" href="#">Reply</a></h6>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
                                </div>
                              </li>
                            </ul>
                            <div className="clearfix" />
                            <div id="respond" className="clearafix">
                              <h6 id="reply-title">Leave A Review</h6>
                              <div className="comment-reply-form clearfix">
                                <form action="#" method="post" id="commentform" className="form-horizontal" name="commentform">
                                  <div className="comment-form-author control-group">
                                    <div className="controls">
                                      <input id="author" name="author" type="text" defaultValue size={40} aria-required="true" />
                                    </div>
                                    <label className="control-label" htmlFor="author">Name </label>
                                  </div>
                                  <div className="comment-form-email control-group">
                                    <div className="controls">
                                      <input id="email" name="email" type="text" defaultValue size={40} aria-required="true" />
                                    </div>
                                    <label className="control-label" htmlFor="email">Email </label>
                                  </div>
                                  <div className="comment-form-comment control-group">
                                    <div className="controls">
                                      <textarea id="comment" name="comment" cols={50} rows={8} aria-required="true" placeholder="Your comment here.." defaultValue={"                                                                    "} />
                                    </div>
                                  </div>
                                  <div className="form-submit">
                                    <div className="controls">
                                      <button className="transition button" type="submit">Post Comment</button>
                                      <input type="hidden" name="comment_post_ID" defaultValue={30} id="comment_post_ID" /> <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/*end respond*/}
                          </div>
                          {/*comments end */}
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
                        <li><a href="blog-single.html" className="ln"><i className="fa fa fa-angle-left" /><span className="tooltip">Prev - Post Title</span></a></li>
                        <li>
                          <div className="list">
                            <a href="blog.html">
                              <span>
                                <i className="b1 c1" /><i className="b1 c2" /><i className="b1 c3" />
                                <i className="b2 c1" /><i className="b2 c2" /><i className="b2 c3" />
                                <i className="b3 c1" /><i className="b3 c2" /><i className="b3 c3" />
                              </span></a>
                          </div>
                        </li>
                        <li><a href="blog-single.html" className="rn"><i className="fa fa fa-angle-right" /><span className="tooltip">Next - Post title</span></a></li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* section end */}
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
      </>
  );
};
