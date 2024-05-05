import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import "../../style/style.css";
import Row from "react-bootstrap/Row";
import CarsCard from "../../components/CarsCard";

const home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return (
    <>
      {token ? (
        <Row>
          {cars.length > 0 &&
            cars.map((car) => <CarsCard key={car?.id} car={car} />)}
        </Row>
      ) : (
        <div className="welcome-message">
          <h2>Welcome!</h2>
          <p>Silahkan Login Terlebih Dahulu Untuk Melihat Mobil-Mobil.</p>
        </div>
      )}
    </>
  );
};
export default home;
