import Blog from "./blog";

const check = (gametablevalue) => {
  return gametablevalue.map((item, index) =>
    item.map((item2, index2) => (
      <Blog key={"" + index + index2} isBlack={item2} />
    ))
  );
};

export default check;
