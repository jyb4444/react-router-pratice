import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFoundPage(){
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {state: "Error not Page"})
      // navigate(-1) 表示回到上一个界面
    }, 1000)
  }, [])
  return <h1>Not Found</h1>
  // return <Navigate to="/" />
}