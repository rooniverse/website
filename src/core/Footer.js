import SiteData from '../data/SiteData';

function Footer() {
  const SiteDataState = SiteData;

  return (
    <div className="Footer">
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
              <strong className="logo-font">Created</strong> in the <a href={SiteDataState.WebsiteURL}>Rooniverse</a>.
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Footer;
