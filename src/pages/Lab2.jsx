import React from 'react';
import { useParams } from 'react-router-dom';  // Importujemy useParams z react-router-dom
import { data } from '../data/module-data';  // Importujemy dane samochodów
import { Container, Row, Col, Card, Badge , Alert} from 'react-bootstrap';  // Import komponentów Bootstrap
import '../styles/CarPage.css';  // Import stylów

const Lab2 = () => {
  const { id } = useParams();  // Pobieramy parametr id z URL

  // Sprawdzamy, czy id zostało podane oraz czy jest prawidłową liczbą
  

  const carId = parseInt(id, 10);  // Konwertujemy id na liczbę

  // Znalezienie samochodu na podstawie id
  const car = data.find(c => c.id === carId);

if (isNaN(carId)) {
  return (
    <Container className="my-5">
      <Alert variant="danger" className="text-center">
        <h2>Brak poprawnego identyfikatora samochodu.</h2>
        <p>Proszę podać poprawny identyfikator, aby zobaczyć szczegóły pojazdu.</p>
      </Alert>
    </Container>
  );
}

// Jeśli samochód o podanym id nie istnieje
if (!car) {
  return (
    <Container className="my-5">
      <Alert variant="warning" className="text-center">
        <h2>Nie znaleziono samochodu o tym identyfikatorze.</h2>
        <p>Samochód, którego szukasz, nie istnieje w bazie danych. Sprawdź identyfikator i spróbuj ponownie.</p>
      </Alert>
    </Container>
  );
}


  // Prezentacja indywidualnych danych o wybranym samochodzie
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Szczegóły samochodu: {car.car}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={car.image} alt={car.car} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{car.car}</Card.Title>
              <Card.Text>
                <strong>Rejestracja:</strong> {car.registration}
              </Card.Text>
              <Card.Text>
                <strong>Rok produkcji:</strong> {car.year}
              </Card.Text>
              <Card.Text>
                <strong>Kolor:</strong> {car.color}
              </Card.Text>
              <Card.Text>
                <strong>Silnik:</strong> {car.engine}
              </Card.Text>
              <Card.Text>
                <strong>Cena za godzinę:</strong> ${car.price}
              </Card.Text>
              <Card.Text>
                <strong>Ocena:</strong> {car.rating} ⭐
              </Card.Text>
              <Card.Text>
                <strong>Dystans:</strong> {car.distance}m
              </Card.Text>
              <Card.Text>
                <strong>Liczba miejsc:</strong> {car.seats}
              </Card.Text>
              <Card.Text>
                <strong>Paliwo:</strong> {car.fuel}
              </Card.Text>
              <Card.Text>
                <strong>Skrzynia biegów:</strong> {car.transmission}
              </Card.Text>
              <Badge bg="success">Dostępny</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Lab2;
