import React from "react";
import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default BoardDetail;
