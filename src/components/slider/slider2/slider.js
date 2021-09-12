import { useEffect, useMemo, useState } from "react";
import SlidBox from "./minisSlider";
import styles from "./style.module.css";

const arr = [
  {
    img: "https://images.crazygames.com/2048-multiplayer-qbs/20210326145509/2048-multiplayer-qbs-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    miniImg:
      "https://www3.minijuegosgratis.com/v3/games/thumbnails/228958_7_sq.jpg",
    text: "Shavarsh astvatain",
    gameName: "2048",
  },
  {
    img: "https://www.nintendo.com//content/dam/noa/es_LA/games/switch/s/sudoku-relax-2-summer-waves-switch/sudoku-relax-2-summer-waves-switch-hero.jpg",
    miniImg:
      "https://static.wixstatic.com/media/76608c_01e50738546b47c78e29731c9a3226a6~mv2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/sudoku_icon_ios_rounded_1024x1024%20(NOT%20F.webp",
    text: "Shavarsh astvatain",
    gameName: "Sudoku",
  },
  {
    img: "https://store.my.games/pre_640x360_resize/hotbox/showcase/gamehighlight/pic/7b68b8e0-4e66-11ea-b0b1-6ae292d3eab2.jpg?quality=85&format=webp",
    miniImg:
      "https://media.istockphoto.com/photos/casino-roulette-top-view-isolated-picture-id480649654",
    text: "Shavarsh astvatain",
    gameName: "Roulette",
  },
  {
    img: "http://android-obzor.com/wp-content/uploads/2018/01/shahmaty-1-1024x576.png",
    miniImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCc17MTuosn4Xs3OvEfy8Ib-AU_Ic65oEW-g&usqp=CAU",
    text: "Shavarsh astvatain",
    gameName: "Chess",
  },
  {
    img: "https://miro.medium.com/max/603/1*1LzDyOaDaDrIDu9hksV35Q.jpeg",
    miniImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3oRIEy-B3Kqlj5HhLABhGhN4NLMprhfRsIOJTrPmfFdnp4VDwSLWlfTAIftzm4FL8e8&usqp=CAU",
    text: "Shavarsh astvatain",
    gameName: "Interviewer",
  },
  {
    img: "https://luckforfree.com/media/images/online-durak.webp",
    miniImg: "https://cdn-icons-png.flaticon.com/512/1801/1801118.png",
    text: "Shavarsh astvatain",
    gameName: "Reverso context",
  },
];

const MySlder = () => {
  const [queue, setQueue] = useState(0);
  const [img, setImg] = useState(arr[0].img);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (arr.length === queue + 1) {
        setQueue(0);
        setImg(arr[0].img);
      } else {
        setQueue(queue + 1);
        setImg(arr[queue + 1].img);
      }
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [queue]);

  const changeQueue = (index) => {
    setQueue(index);
    setImg(arr[index].img);
  };

  const slidData = useMemo(() => {
    return arr.map((item, index) => (
      <SlidBox
        key={index}
        obj={item}
        isSlid={queue === index ? true : false}
        index={index}
        changeQueue={changeQueue}
      />
    ));
  }, [queue]);

  return (
    <div className={styles.center}>
      <div className={styles.flex}>
        <div className={styles.mainSlid}>
          <img className={styles.bigImg} src={img} />
        </div>
        <div className={styles.allSlid}>{slidData}</div>
      </div>
    </div>
  );
};

export default MySlder;
