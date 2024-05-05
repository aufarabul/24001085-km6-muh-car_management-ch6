import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const NonProtected = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // get user profile if we have token
    dispatch(getProfile(navigate, "/", null));
  }, [dispatch, navigate]);

  return children;
};

export default NonProtected;
