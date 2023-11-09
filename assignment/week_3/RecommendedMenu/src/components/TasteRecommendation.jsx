import ShowSelectedCategory from "./ShowSelectedCategory";
import Step1 from "./Step1";

const TasteRecommendation = (props) => {
  const step = props.step;
  const category = "취향대로 추천";

  return step === 0 ? (
    <ShowSelectedCategory
      category={category}
      setIsStartClicked={props.setIsStartClicked}
    />
  ) : (
    <Step1 setStep={props.setStep} step={step} setIsStartClicked={props.setIsStartClicked}/>
  );
};

export default TasteRecommendation;
