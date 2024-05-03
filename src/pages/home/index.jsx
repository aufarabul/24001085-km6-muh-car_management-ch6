import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import "../../style/style.css";
import Row from "react-bootstrap/Row";
import CarsCard from "../../components/CarsCard";

const home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return (
    <Row>
      {cars.length > 0 &&
        cars.map((car) => <CarsCard key={car?.id} car={car} />)}
    </Row>
  );
};
export default home;

// return (
//   <>
//     <h1>Home</h1>
//     <p>Count: {count}</p>
//     <p>Fauzan: {fauzan}</p>

//     <Button
//       variant="primary"
//       onClick={() => {
//         setCount(count + 1);
//         setFauzan("Richard");
//       }}
//     >
//       Add Count
//     </Button>
//     <Button
//       variant="primary"
//       onClick={() => {
//         setCount(count - 1);
//         setFauzan("Fauzan");
//       }}
//     >
//       Reduce Count
//     </Button>
//   </>
// );
