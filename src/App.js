import Job from './Components/Job';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const JOBS = []
function App() {
  const [title, setTitle] = useState("")
  return (
    <Container fluid className="center">
      <Job />
    </Container>

  );
}

export default App;
