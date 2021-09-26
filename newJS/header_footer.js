const header = `
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="header__logo">
                    <a href="./index.html">
                        <img src="img/logo.png" alt="">
                    </a>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="header__nav">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li id="Homepage"><a href="index.html">Homepage</a></li>
                            <li id="About"><a href="about-us.html">About Us</a></li>
                            <li id="Anime"><a href="allanime.html">All Anime</a></li>
                            <li id="Blog"><a href="blog.html">Our Blog</a></li>
                            <li id="Contacts"><a href="contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="header__right">
                    <a href="#" class="search-switch"><span class="icon_search"></span></a>
                    <a href="./login.html"><span class="icon_profile"></span></a>
                </div>
            </div>
        </div>
        <div id="mobile-menu-wrap"></div>
    </div>
`
const footer=`
    <div class="page-up">
        <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="footer__logo">
                    <a href="./index.html"><img src="img/logo.png" alt=""></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="footer__nav">
                    <ul>
                    <li class="active"><a href="./index.html">Homepage</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="allanime.html">All Anime</a></li>
                    <li><a href="blog.html">Our Blog</a></li>
                    <li><a href="contact.htlm">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved </a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>

              </div>
          </div>
      </div>
`
document.getElementById("header").innerHTML=header;
document.getElementById("footer").innerHTML=footer;

const template = document.createElement('template');
template.innerHTML = `
<div class="search-model">
<div class="h-100 d-flex align-items-center justify-content-center">
    <div class="search-close-switch"><i class="icon_close"></i></div>
    <form class="search-model-form">
        <input type="search" id="search-input" onsearch="search(document.getElementById('search-input').value)" placeholder="Search here.....">
    </form>
</div>
</div>
`
document.body.appendChild(template.content);










