import CustomRouter from "./CustomRouter";

function MainContent() {
  return (
      <div className="MainContent">
        <Helmet>
          <script data-ad-client={process.env.REACT_APP_GOOGLE_ADSENSE_CLIENT_ID} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet>
        <CustomRouter />
      </div>
  );
}

export default MainContent;
