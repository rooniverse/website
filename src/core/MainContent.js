import CustomRouter from "./CustomRouter";
// import {Helmet} from "react-helmet-async";

function MainContent() {
  return (
      <div className="MainContent">
        {/* <Helmet>
          <script data-ad-client="ca-pub-2181872713880883" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet> */}
        <CustomRouter />
      </div>
  );
}

export default MainContent;
