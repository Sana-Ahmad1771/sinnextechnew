"use client";

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

export default function Providers({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {children}
    </>
  );
}
