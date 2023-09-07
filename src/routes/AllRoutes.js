import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AllRoutes = () => {
  // const { isLoggedIn } = useSelector(state => state.auth);
  let isLoggedIn=true;
  return (
    <Routes>
        <Route index path={`/login`} element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route
          path={`/`}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Main/>
            </ProtectedRoute>
          }
        />
    </Routes>
  )
}

export default AllRoutes;