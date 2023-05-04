import React, { useEffect, useState } from "react";

import SignIn from "../pages/SignIn";
import SplashScreen from "../components/SplashScreen";

export default function Routes() {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 3000);
  }, []);
  if (loaded) {
    return <SplashScreen />;
  }
  return (
    <>
      <SignIn />
    </>
  );
}
