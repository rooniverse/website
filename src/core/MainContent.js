import CustomRouter from "./CustomRouter";
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function MainContent() {
  return (
      <div className="MainContent">
        <CustomRouter />
      </div>
  );
}

export default MainContent;
