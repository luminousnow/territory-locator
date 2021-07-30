import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { AboutView, ContactusView, HomeView, PartnersView } from "./views";
import { Navbar, Footer } from "./components";

const App: FC = () => (
  <Container maxWidth="md" fixed>
    <Navbar />

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/partners" component={PartnersView} />
      <Route path="/contact-us" component={ContactusView} />
      <Route path="/about" component={AboutView} />
      <Redirect to="/" />
    </Switch>

    <Footer />
  </Container>
);
export default App;
