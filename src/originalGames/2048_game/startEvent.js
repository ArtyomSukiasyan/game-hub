import MoveTop from "./blockMovement";

const go = {
  left: "left",
  top: "top",
  right: "right",
  bottom: "bottom",
};
const startEvent = (condition = "start", func = false, mtr) => {
  const escFunction = (event) => {
    switch (event.keyCode) {
      case 37:
        func(MoveTop(go.left, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 38:
        func(MoveTop(go.top, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 39:
        func(MoveTop(go.right, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 40:
        func(MoveTop(go.bottom, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", escFunction, false);
};
export const endEvent = () => {};
export default startEvent;
