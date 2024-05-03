import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarsCard = ({ car }) => {
  return (
    <Col className="cars-card" md={3} sm={6} as={Link} to={`/cars/${car?.id}`}>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img
          className="car-img"
          variant="top"
          src={car.image}
          key={car.id}
        />
        {/* Replace with car image URL */}
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Id Car : {car.id}
          </Card.Subtitle>
          <Card.Title>
            {car.manufacture} {car.model}
          </Card.Title>
          {/* Replace with car property for name */}
          <Card.Text>{car.year}</Card.Text>
          {/* Replace with car description (optional) */}
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

CarsCard.propTypes = {
  car: PropTypes.object,
};

export default CarsCard;
