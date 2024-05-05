import { useEffect, useState } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // const getProfile = async (token) => {
  //   setIsLoading(true);

  //   let config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   try {
  //     const response = await axios.request(config);
  //     const { data } = response.data;

  //     // set user by response
  //     setUser(data);
  //   } catch (error) {
  //     // because token is not valid, we will delete it from local storage
  //     setUser(null);
  //     localStorage.removeItem("token");
  //   }

  //   setIsLoading(false);
  // };

  useEffect(() => {
    // get profile
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card className="shadow p-2 mb-5 bg-body-primary rounded">
          <Card.Header>My Profile</Card.Header>
          <Card.Body>
            <Form>
              {!user ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {user?.photo && (
                    <Image src={user?.photo} className="img-fluid" rounded />
                  )}

                  <div className={user?.photo && "mt-4"}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value={user?.name} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={user?.email} disabled />
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

export default Profile;
