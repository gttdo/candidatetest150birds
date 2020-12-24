import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/navigation/Navbar';
import SettingsView from './components/views/settings/SettingsView';

function App() {
  return (
    <Router className='App'>
      <Navbar/>
      <Route exact path='/' component={() => (<Redirect to="/settings/billingmethod"/>)}/>
      <Route exact path='/settings' component={() => (<Redirect to="/settings/billingmethod"/>)} />
      <Route path="/settings/billingmethod" component={SettingsView} />
      <Route path="/settings/transaction" component={SettingsView} />
    </Router>
  );
}

export default App;
