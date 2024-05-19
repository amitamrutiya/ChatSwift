import { getServerSession } from "next-auth";
import React from "react";

const DashBoard = async () => {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
};

export default DashBoard;
