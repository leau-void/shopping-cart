const fetchData = (src) => {
  const s = document.createElement("script");
  s.setAttribute("src", src);
  s.onload = () => document.body.removeChild(s);
  document.body.appendChild(s);
};

export default fetchData;
