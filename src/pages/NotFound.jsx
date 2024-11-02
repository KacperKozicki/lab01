// src/pages/NotFound.jsx
import React from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="my-5">
      <Jumbotron className="text-center">
        <h1 className="display-4">404 - Strona nie istnieje</h1>
        <p className="lead">
          Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <hr className="my-4" />
        <p>Wróć na stronę główną lub skontaktuj się z administratorem.</p>
        <Link to="/">
          <Button variant="primary">Wróć na stronę główną</Button>
        </Link>
      </Jumbotron>
    </Container>
  );
};

export default NotFound;
