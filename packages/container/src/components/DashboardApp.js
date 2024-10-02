import { MountDashboard } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";
// import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  //   const history = useHistory();
  useEffect(() => {
    MountDashboard(ref.current);
  }, []);
  return <div ref={ref} />;
};
