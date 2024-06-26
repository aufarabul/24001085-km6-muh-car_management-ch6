import RegisterComponent from "../../components/Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Register = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <Card className="shadow p-3 mb-5 bg-body-primary rounded">
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <RegisterComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Register;
