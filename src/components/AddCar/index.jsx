import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCar } from "../../redux/actions/cars";

function addCar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // dispatch the add car action
    dispatch(
      AddCar(navigate, plate, manufacture, model, year, image, setIsLoading)
    );
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        className="shadow p-3 mb-5 bg-body-primary rounded"
      >
        <Form.Group className="mb-3 " controlId="plate">
          <Form.Label>plate *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="manufacture">
          <Form.Label>manufacture *</Form.Label>
          <Form.Control
            type="manufacture"
            placeholder="Enter manufacture"
            value={manufacture}
            onChange={(e) => setManufacture(e.target.value)}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year *</Form.Label>
          <Form.Control
            type="year"
            placeholder="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="model">
          <Form.Label>model *</Form.Label>
          <Form.Control
            type="model"
            placeholder="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Submit"}
        </Button>
      </Form>
    </>
  );
}

export default addCar;
