import CustomRouter from "./CustomRouter";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-198025571-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function MainContent() {
  return (
      <div className="MainContent">
        <CustomRouter />
      </div>
  );
}

export default MainContent;
