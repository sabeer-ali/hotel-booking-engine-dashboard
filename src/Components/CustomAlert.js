import React from "react";
import { Alert } from "@material-ui/lab";

export const CustomAlert = ({ type, message }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);

  if (visible) {
    return (
      <div className="position-absolute bottom-0 end-0 p-5">
        <Alert severity={type}>{message}</Alert>
      </div>
    );
  } else {
    return null;
  }
};
