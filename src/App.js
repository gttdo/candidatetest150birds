import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/sitewide/Navbar';
import SettingsPage from './components/pages/SettingsPage';

function App() {
  return (
    <Router className='App'>
      <Navbar/>
      <Route exact path='/' component={() => (<Redirect to="/settings/billingmethod"/>)}/>
      <Route exact path='/settings' component={() => (<Redirect to="/settings/billingmethod"/>)} />
      <Route path="/settings/billingmethod" component={SettingsPage} />
      <Route path="/settings/transaction" component={SettingsPage} />
    </Router>
  );
}

export default App;
