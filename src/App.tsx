import { FC } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import {
  AboutView,
  ContactusView,
  HomeView,
  PartnersView,
  PokemonsView,
  CatFacktsViews,
} from "./views";
import { Navbar, Footer } from "./components";
import history from "./history";

const App: FC = () => (
  <Router history={history}>
    <Container maxWidth="md" fixed>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/partners" component={PartnersView} />
        <Route path="/contact-us" component={ContactusView} />
        <Route path="/about" component={AboutView} />
        <Route path="/pokemons" component={PokemonsView} />
        <Route path="/cat-fackt" component={CatFacktsViews} />

        <Redirect to="/" />
      </Switch>

      <Footer />
    </Container>
  </Router>
);
export default App;
