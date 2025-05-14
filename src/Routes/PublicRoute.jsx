import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { userInfo } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });
  return <>{children}</>;
};

export default PublicRoute;
