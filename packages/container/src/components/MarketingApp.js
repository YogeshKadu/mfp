import { MountMarketing } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    MountMarketing(ref.current);
  }, []);
  return <div ref={ref} />;
};
