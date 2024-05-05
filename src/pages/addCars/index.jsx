import AddCarComponent from "../../components/AddCar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AddCars = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <Card className="shadow p-3 mb-5 bg-body-primary rounded">
            <Card.Header>Add Car</Card.Header>
            <Card.Body>
              <AddCarComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddCars;
