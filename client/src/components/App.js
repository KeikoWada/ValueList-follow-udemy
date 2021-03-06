import React from 'react';
import { Router, Route } from 'react-router-dom';
import ValueCreate from './values/ValueCreate';
import ValueEdit from './values/ValueEdit';
import ValueDelete from './values/ValueDelete';
import ValueList from './values/ValueList';
import ValueShow from './values/ValueShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={ValueList} />
          <Route path="/values/new" exact component={ValueCreate} />
          <Route path="/values/edit/:id" exact component={ValueEdit} />
          <Route path="/values/delete/:id" exact component={ValueDelete} />
          <Route path="/values/show" exact component={ValueShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
