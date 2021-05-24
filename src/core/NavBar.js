import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://www.rooniverse.co.uk">
            <span className="logo-font is-size-2 is-size-4-mobile">R</span>
          </a>
          <div className="navbar-burger" data-target="mainNavbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item" href="">
              Home
            </a>
            <a className="navbar-item" href="">
              Blog
            </a> */}
            <div className="navbar-item is-hidden-desktop pt-6">
              <a href="https://twitter.com/DavidRooN3y">
                <span className="icon is-twitter-blue">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </span>
              </a>
            </div>
          </div>

          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="navbar-item" href="https://twitter.com/DavidRooN3y">
                    <span className="icon is-twitter-blue pr-6">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default NavBar;
