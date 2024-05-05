import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  const authorizedRoles = ["admin", "superadmin"]; // Replace with your authorized roles
  const shouldHideButtons = user?.role && !authorizedRoles.includes(user.role);

  useEffect(() => {
    // get user profile if we have token
    dispatch(getProfile());
  }, [dispatch, token]);
  useEffect(() => {
    const authorizedRoles = ["admin", "superadmin"]; // Replace with your authorized roles
    const shouldHideButtons =
      user?.role && !authorizedRoles.includes(user.role);
  }, [user]);

  return (
    <Navbar
      expand="lg"
      className="bg-body-primary shadow p-3 mb-5 bg-body-primary rounded"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kampus Merdeka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {user ? (
              <>
                {!shouldHideButtons && (
                  <>
                    <Nav.Link as={Link} to="/addcar">
                      Add Cars
                    </Nav.Link>
                  </>
                )}
                <Nav.Link as={Link} to="/profile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location = "";
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

// const getProfile = async (token) => {
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
// };

// useEffect(() => {
//   // get user profile if we have token
//   const token = localStorage.getItem("token");
//   if (token) {
//     getProfile(token);
//   }
// }, []);
