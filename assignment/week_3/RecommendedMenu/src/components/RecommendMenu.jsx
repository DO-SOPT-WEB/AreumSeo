import { useEffect } from "react";

const RecommendMenu = (props) => {
  useEffect(() => {
    props.setStep(1);
  }, []);

  return <div></div>;
};

export default RecommendMenu;
