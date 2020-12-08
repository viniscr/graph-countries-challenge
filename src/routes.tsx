import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CountriesList from './pages/CountriesList/CountriesList';
import CountryDetail from './pages/CountryDetail/CountryDetail';
import CountryEdit from './pages/CountryEdit/CountryEdit';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/countries" exact component={CountriesList} />
        <Route
          path="/countries/:id"
          exact
          render={({ match }) => <CountryDetail match={match} />}
        />
        <Route
          path="/countries/edit/:id"
          render={(routeProps) => <CountryEdit {...routeProps} />}
        />
        <Redirect to="/countries" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
