import CustomRouter from "./CustomRouter";

function MainContent() {
  return (
      <div className="MainContent">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{siteDataState.IntroText}</title>
          <link rel="canonical" href={siteDataState.WebsiteURL} />
          <meta
            name="description"
            content={siteDataState.SiteDesctiption}
          />
          <script data-ad-client={process.env.REACT_APP_GOOGLE_ADSENSE_CLIENT_ID} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet>
        <CustomRouter />
      </div>
  );
}

export default MainContent;
