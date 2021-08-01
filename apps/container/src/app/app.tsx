import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

// process.env
const dashboardHost = 'http://localhost:3001';
const settingsHost = 'http://localhost:3002';

const Nav = () => (
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/settings">Settings</Link>
  </nav>
);

const Dashboard = () => <MicroFrontend name="Dashboard" host={dashboardHost} />;
const Settings = () => <MicroFrontend name="Settings" host={settingsHost} />;

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
