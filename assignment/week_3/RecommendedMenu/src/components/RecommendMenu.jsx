import { useEffect } from "react";
import RandomRecommendation from "./RandomRecommendation";
import TasteRecommendation from "./TasteRecommendation";

const RecommendMenu = (props) => {
  const category = props.category;
  const step = props.step;

  useEffect(() => {
    category === "랜덤 추천" ? props.setStep(4) : props.setStep(1);
  }, []);

  return step === 4 ? <RandomRecommendation setIsStartClicked={props.setIsStartClicked} /> : <TasteRecommendation setIsStartClicked={props.setIsStartClicked}/>;
};

export default RecommendMenu;
