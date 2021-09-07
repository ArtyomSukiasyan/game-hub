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
        <Loading />
      ) : (
        <Auth verify={verify} set_loading={set_loading} />
      )}
    </div>
  );
}
