import UpdateCarComponent from "../../components/UpdateCars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CarDetail from "../cars/details";
const updateCars = () => {
  return (
    <>
      <Row>
        <Col md={7}>
          <CarDetail />
        </Col>
        <Col md={5}>
          <Card className="shadow p-2 mb-5 bg-body-tertiary rounded">
            <Card.Header>Update Car</Card.Header>
            <Card.Body>
              <UpdateCarComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default updateCars;
