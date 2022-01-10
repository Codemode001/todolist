import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

const Home = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/todo");
  };

  return (
    <div className="home-main">
      <h1>you are in home</h1>
      <Button onClick={handleOnClick} variant="text">Text</Button>
     </div>
  );
};
export default Home;
