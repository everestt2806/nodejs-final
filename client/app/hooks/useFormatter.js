import { useState, useEffect } from "react";

export function useFormatter() {
  const [formatter, setFormatter] = useState(null);

  useEffect(() => {
    setFormatter(
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      })
    );
  }, []);

  const formatPrice = (price) => {
    if (!formatter) return ""; // Return empty string during SSR
    return formatter.format(price);
  };

  return { formatPrice };
}
