import { useEffect } from "react";
import TasteRecommendation from "./TasteRecommendation";
import CountDown from "./CountDown";

const RecommendMenu = (props) => {
  const { category, step, setStep, setIsStartClicked } = props;

  useEffect(() => {
    category === "랜덤 추천" ? setStep(4) : setStep(1);
  }, []);

  return step === 4 && category === "랜덤 추천" ? (
    <CountDown
      setIsStartClicked={setIsStartClicked}
      category={category}
      setStep={setStep}
    />
  ) : (
    <TasteRecommendation
      setIsStartClicked={setIsStartClicked}
      setStep={setStep}
      step={step}
    />
  );
};

export default RecommendMenu;
