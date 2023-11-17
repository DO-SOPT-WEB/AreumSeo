import ShowSelectedCategory from "./ShowSelectedCategory";
import Step from "./Step";

const TasteRecommendation = (props) => {
  const { step, setIsStartClicked, setStep } = props;
  const category = "취향대로 추천";

  return step === 0 ? (
    <ShowSelectedCategory
      category={category}
      setIsStartClicked={setIsStartClicked}
      setStep={setStep}
    />
  ) : (
    <Step
      setStep={setStep}
      step={step}
      setIsStartClicked={setIsStartClicked}
      category={category}
    />
  );
};

export default TasteRecommendation;
