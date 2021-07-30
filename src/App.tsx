import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { About, Contactus, Home, Partners } from "./views";
import { Navbar, Footer } from "./components";

const App: FC = () => (
  <Container maxWidth="md" fixed>
    <Navbar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/partners" component={Partners} />
      <Route path="/contact-us" component={Contactus} />
      <Route path="/about" component={About} />
      <Redirect to="/" />
    </Switch>

    <Footer />
  </Container>
);
export default App;
