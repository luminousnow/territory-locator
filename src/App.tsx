import { FC } from "react";
import { Container } from "@material-ui/core";
import { Home } from "./views";

const App: FC = () => {
  return (
    <Container maxWidth="md" fixed>
      <Home />
    </Container>
  );
};

export default App;
