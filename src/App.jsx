import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import AddCar from "./pages/addCars";
import UpdateCar from "./pages/UpdateCars";
import Register from "./pages/register";
import CarDetail from "./pages/cars/details";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import store from "./redux/store";
const backgroundColor = "#f5f5f5";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Container className="mt-5">
          <Home />
        </Container>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <NonProtected>
        <Navbar />
        <Container className="mt-5">
          <Login />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <NonProtected>
        <Navbar />
        <Container className="mt-5">
          <Register />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <CarDetail />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/addcar",
    element: (
      <Protected roles={["admin", "superadmin"]}>
        <Navbar />
        <Container className="mt-5">
          <AddCar />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/update/cars/:id",
    element: (
      <Protected roles={["admin", "superadmin"]}>
        <Navbar />
        <Container className="mt-5">
          <UpdateCar />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />

      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;
