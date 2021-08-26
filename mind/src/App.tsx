import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@material-ui/core/styles';
// https://github.com/mui-org/material-ui/issues/13394#issuecomment-815452717
import { AlertProvider } from './contexts/AlertContext';
import Home from './pages/Home';
import New from './pages/New';
import About from './pages/About';
import Update from './pages/Update';
import NotFound from './pages/NotFound';
import theme from './constants/theme';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AlertProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/new">
                <New />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="/update/:id">
                <Update />
              </Route>
              <Route path="/">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </AlertProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
