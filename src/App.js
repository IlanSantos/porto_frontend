import { Container } from "react-bootstrap";
import Router from "./router";

function App() {
  return (
    <Container className="mt-4">
      <h1 className="title text-center mb-3">Sistema portuário</h1>
      <Router />
    </Container>
  );
}

export default App;
