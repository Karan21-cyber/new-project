"use client";
import React, { useRef } from "react";

export default function PageNotFound() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="flex h-screen overflow-hidden justify-center items-center">
      <div className="animation-wrapper ">
        <lottie-player
          autoplay
          loop
          src="/notfound.json"
          mode="normal"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></lottie-player>
      </div>
    </div>
  );
}
