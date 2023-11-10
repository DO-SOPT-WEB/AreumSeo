import { useEffect } from "react";
import Recommendation from "./Recommendation";
import TasteRecommendation from "./TasteRecommendation";

const RecommendMenu = (props) => {
  const category = props.category;
  const step = props.step;

  useEffect(() => {
    category === "랜덤 추천" ? props.setStep(4) : props.setStep(1);
  }, []);

  return step === 4 && category === "랜덤 추천"?  (
    <Recommendation setIsStartClicked={props.setIsStartClicked} category={category} setStep={props.setStep}/>
  ) : (
    <TasteRecommendation
      setIsStartClicked={props.setIsStartClicked}
      setStep={props.setStep}
      step={props.step}
    />
  );
};

export default RecommendMenu;
