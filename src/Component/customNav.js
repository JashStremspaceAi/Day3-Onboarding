import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = (url) => {
  const [link, setLink] = useState();
  const nav = useNavigate();
  useEffect(() => {
    setLink(url);
  },[url]);
  const handlenav = () => {
    nav(link);
  };
  return handlenav;
};

export default Navigation;
