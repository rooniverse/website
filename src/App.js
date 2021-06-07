import './App.css';
import './App.sass';
import Header from  "./core/Header";
import Footer from  "./core/Footer";
import MainContent from  "./core/MainContent";
import {HelmetProvider} from "react-helmet-async";
import GAListener from './components/GAListener';

function App() {
  return (
    <HelmetProvider>
      <GAListener>
        <div className="App">
          <Header />  
          <MainContent />
          <Footer />
        </div>
      </GAListener>
    </HelmetProvider>
  );
}

export default App;

// Font Awesome free icons installed in this app. You can find available icons here:
// Regular icons: https://fontawesome.com/icons?d=gallery&p=2&s=regular&m=free
// Brand icons: https://fontawesome.com/icons?d=gallery&p=2&s=brands&m=free
