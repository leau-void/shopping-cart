const emitData = (data) => {
  const event = new CustomEvent("newData", {
    detail: data.results,
  });
  window.dispatchEvent(event);
};

export default emitData;
