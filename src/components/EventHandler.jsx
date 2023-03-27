function EventHandler() {
  const styleObj = {
    width: "150px",
    padding: "20px",
    backgroundColor: "orange",
  };

  const alertFunc = () => {
    alert("button has clicked!");
  };

  return (
    <div>
      <button style={styleObj} onClick={alertFunc}>
        버튼
      </button>
    </div>
  );
}

export default EventHandler;
