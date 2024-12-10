class MobilelNavbar{
constructor(hamburger, navLinks, navbar)   {
    this.hamburger = document.querySelector(hamburger);
    this.navLinks = document.querySelector(navLinks);
    this.navList = document.querySelectorAll(navbar);
    this.activeCalss = "active";

    this.handleClick = this.handleClick.bind(this);
}


animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navLinks.classList.toggle(this.activeCalss);
    this.hamburger.classList.toggle(this.activeCalss);
    this.animateLinks();
  }

addClickEvent(){
    this.hamburger.addEventListener("click", this.handleClick);
}

init() {
    if (this.hamburger) {
      this.addClickEvent();
    }
    return this;
  }
}

const hamburger = new MobileNavbar(
  ".hamburguer",
  ".nav-links",
  ".nav-links li",
);
hamburger.init();
