import React from "react";

const alertContext = React.createContext({
  message: "",
  type: "",
});

export default alertContext;
