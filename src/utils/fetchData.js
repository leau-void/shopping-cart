const fetchData = (src) => {
  const s = document.createElement("script");
  s.setAttribute("src", src);
  document.body.appendChild(s);
};

export default fetchData;
