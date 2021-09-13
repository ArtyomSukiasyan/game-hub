import React from "react";
import Games from "../../components/games/Games";
import Rating from "../../components/rating/rating";
import Slider from "../../components/slider/Slider";
import MySlder from "../../components/slider/slider2/slider";

export default function Home() {
  return (
    <main>
      <MySlder />
      <Rating />
      <Games />
    </main>
  );
}
