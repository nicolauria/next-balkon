export default function Header() {
    return (
        <>
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
                    <a href="index.html" className="act-link">Home </a>
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
                    <a href="/about">About</a>
                    {/*second level end*/}
                    <ul>
                      <li><a href="about-personal.html">Personal</a></li>
                      <li><a href="services.html">Services</a></li>
                    </ul>
                    {/*second level end*/}
                  </li>
                  <li>
                    <a href="/contact">Contacts </a>
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
        </>
    )
}