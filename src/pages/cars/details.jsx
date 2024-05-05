import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Image,
  Button,
  Container,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCar, DeleteCar } from "../../redux/actions/cars";

const CarDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { car } = useSelector((state) => state.car);
  const authorizedRoles = ["admin", "superadmin"]; // Replace with your authorized roles
  const shouldHideButtons = user?.role && !authorizedRoles.includes(user.role);
  useEffect(() => {
    // get profile
    dispatch(getCar(navigate, id, setIsLoading));
  }, [dispatch, id, navigate]);

  useEffect(() => {
    const authorizedRoles = ["admin", "superadmin"]; // Replace with your authorized roles
    const shouldHideButtons =
      user?.role && !authorizedRoles.includes(user.role);
  }, [user]);

  // return (
  //   <Row>
  //     <Col md={6} className="offset-md-3">
  //       <Card>
  //         <Card.Header>{car?.manufacture}</Card.Header>

  //         <Card.Body>
  //           <Form>
  //             {!car ? (
  //               <>
  //                 <h2>Loading...</h2>
  //               </>
  //             ) : (
  //               <>

  //                 <Button variant="success">Edit</Button>{" "}
  //                 <Button variant="danger">Delete</Button>
  //                 {car?.image && (
  //                   <Image src={car?.image} className="img-fluid" rounded />
  //                 )}
  //                 <div className={car?.photo && "mt-4"}>
  //                   <Form.Group className="mb-3" controlId="name">
  //                     <Form.Label>Brand</Form.Label>
  //                     <Form.Control
  //                       type="text"
  //                       value={car?.manufacture}
  //                       disabled
  //                     />
  //                   </Form.Group>
  //                   <Form.Group className="mb-3" controlId="model">
  //                     <Form.Label>Model</Form.Label>
  //                     <Form.Control type="model" value={car?.model} disabled />
  //                   </Form.Group>
  //                   <Form.Group className="mb-3" controlId="year">
  //                     <Form.Label>Year</Form.Label>
  //                     <Form.Control type="email" value={car?.year} disabled />
  //                   </Form.Group>
  //                   <Form.Group className="mb-3" controlId="year">
  //                     <Form.Label>Plate</Form.Label>
  //                     <Form.Control type="email" value={car?.plate} disabled />
  //                   </Form.Group>
  //                 </div>
  //               </>
  //             )}
  //           </Form>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  //   </Row>
  // );
  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card className="shadow p-2 mb-5 bg-body-tertiary rounded">
          <Card.Header>{car?.manufacture}</Card.Header>

          <Card.Body>
            <Form>
              {!car ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>
                  {!shouldHideButtons && (
                    <>
                      <Container className="mb-3">
                        <Button
                          className="mx-3"
                          variant="success"
                          onClick={() => navigate(`/update/cars/${id}`)}
                        >
                          EDIT
                        </Button>
                        <Button
                          variant="danger"
                          onClick={(e) => {
                            e.preventDefault();
                            if (
                              window.confirm(
                                "Apakah and yakin akan menghapus data ini"
                              )
                            ) {
                              dispatch(
                                DeleteCar(car?.id, navigate, setIsLoading)
                              );
                            }
                          }}
                          disabled={isLoading}
                        >
                          {isLoading ? "Processing..." : "DELETE"}
                        </Button>
                      </Container>
                    </>
                  )}
                  {car?.image && (
                    <Image src={car?.image} className="img-fluid" rounded />
                  )}
                  <div className={car?.photo && "mt-4"}>
                    <Form.Group className="mb-3" controlId="Id">
                      <Form.Label>CAR ID</Form.Label>
                      <Form.Control type="text" value={car?.id} disabled />
                    </Form.Group>
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
                      <Form.Control type="text" value={car?.year} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="plate">
                      <Form.Label>Plate</Form.Label>
                      <Form.Control type="text" value={car?.plate} disabled />
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
};

export default CarDetail;
