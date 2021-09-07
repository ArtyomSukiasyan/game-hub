import React, { useState } from "react";
import Loading from "../../components/loading/loading";
import Auth from "../authentication/authPage";

export default function Register({ verify }) {
  const [loading, setLoading] = useState(false);
  const set_loading = (dt) => {
    setLoading(dt);
  };
  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "20%", marginLeft: "24%" }}>
          <Loading />
        </div>
      ) : (
        <Auth verify={verify} set_loading={set_loading} />
      )}
    </div>
  );
}
