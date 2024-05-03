import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Empty dependency array to run only once on mount

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   // make loading
  //   setIsLoading(true);

  //   /* login action (fetch api) */
  //   let data = JSON.stringify({
  //     email,
  //     password,
  //   });

  //   let config = {
  //     method: "post",
  //     url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   try {
  //     const response = await axios.request(config);

  //     // get and save the token to local storage
  //     const { data } = response.data;
  //     const { token } = data;
  //     localStorage.setItem("token", token);

  //     setIsLoggedIn(true);
  //     window.location = "/";
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }

  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   setIsLoggedIn(!!storedToken);
  // }, []);
  const onSubmit = async (e) => {
    e.preventDefault();

    /* login action (fetch api) */
    dispatch(login(navigate, email, password, setIsLoading));
  };

  // return (
  //   <>
  //     {isLoggedIn ? (
  //       (window.location = "/") // Use a proper redirect component based on
  //     ) : (
  //       <Form onSubmit={onSubmit}>
  //         <Form.Group className="mb-3" controlId="formBasicEmail">
  //           <Form.Label>Email address</Form.Label>
  //           <Form.Control
  //             type="email"
  //             placeholder="Enter email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <Form.Text className="text-muted">
  //             We will never share your email with anyone else.
  //           </Form.Text>
  //         </Form.Group>

  //         <Form.Group className="mb-3" controlId="formBasicPassword">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control
  //             type="password"
  //             placeholder="Password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </Form.Group>
  //         <Button variant="primary" type="submit" disabled={isLoading}>
  //           {isLoading ? "Processing..." : "Submit"}
  //         </Button>
  //       </Form>
  //     )}
  //   </>
  // );
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Login"}
      </Button>
    </Form>
  );
}

export default Login;
