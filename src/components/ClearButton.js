import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return <button onClick={handleClearValue}>Clear</button>;
};

export default ClearButton;
