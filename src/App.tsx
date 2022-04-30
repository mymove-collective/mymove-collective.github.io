import React from 'react';
import { MainPage } from 'components/pages/main/MainPage'
import { Chi2022Page} from 'components/pages/main/Chi2022Page'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { PrivacyPolicyMain } from 'components/pages/PrivacyPolicyMain';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="content">
          <Routes>
            <Route path="/privacy" element={<PrivacyPolicyMain />}/>
            <Route path="/chi2022" element={<Chi2022Page/>} />
            <Route path="/" element={<MainPage />}/>
          </Routes>

          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
