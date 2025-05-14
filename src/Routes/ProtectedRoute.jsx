import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });
  return <>{children}</>;
};

export default ProtectedRoute;
