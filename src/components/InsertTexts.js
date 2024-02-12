const InsertTexts = ({ db }) => {
  return (
    <>
      {db.split("\n").map((item) => (
        <p
          key={item}
          className={item.includes("subttl - ") ? "subtitle" : "text"}
        >
          {item.replace("subttl - ", "")}
        </p>
      ))}
    </>
  );
};

export default InsertTexts;
