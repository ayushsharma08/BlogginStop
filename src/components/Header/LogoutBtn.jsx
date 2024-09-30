import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    //using logout service
    authService.logout().then(() => {
      //For updating the initial state using the reducer action.
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogoutBtn}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
