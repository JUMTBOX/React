function Ex() {
  const helloStr = "Hello, first Exercise!";
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => {
        alert("클릭 됨..");
      }}
    >
      {helloStr}
    </div>
  );
}

export default Ex;
