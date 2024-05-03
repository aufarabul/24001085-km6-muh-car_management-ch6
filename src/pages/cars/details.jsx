import { useEffect, useState } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCar } from "../../redux/actions/cars";

const CarDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { car } = useSelector((state) => state.car);
  useEffect(() => {
    // get profile
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>{car?.manufacture}</Card.Header>
          <Card.Body>
            <Form>
              {!car ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {car?.image && (
                    <Image src={car?.image} className="img-fluid" rounded />
                  )}

                  <div className={car?.photo && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Brand</Form.Label>
                      <Form.Control
                        type="text"
                        value={car?.manufacture}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="model">
                      <Form.Label>Model</Form.Label>
                      <Form.Control type="model" value={car?.model} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                      <Form.Label>Year</Form.Label>
                      <Form.Control type="email" value={car?.year} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                      <Form.Label>Plate</Form.Label>
                      <Form.Control type="email" value={car?.plate} disabled />
                    </Form.Group>
                  </div>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
  setIsLoading(false);
};

export default CarDetail;
