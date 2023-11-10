import styled from "styled-components";
import Recommendation from "./Recommendation";
import { useEffect, useState } from "react";

const CountDown = (props) => {
  const category = props.category;
  const [time, setTime] = useState(3);
  const INTERVAL = 1000;

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), INTERVAL);
    }

    return () => {
      clearTimeout(() => setTime(time - 1), INTERVAL);
    };
  }, [time]);

  return time ? (
    <St.CountContainer>
      <St.Count>{time}</St.Count>
    </St.CountContainer>
  ) : (
    <Recommendation
      setIsStartClicked={props.setIsStartClicked}
      category={category}
      setStep={props.setStep}
    />
  );
};

const St = {
  CountContainer: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 9.33rem 0;
  `,
  Count: styled.p`
    font-size: 5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    text-shadow: 0 0.3rem 0 ${({ theme }) => theme.colors.salmon},
      0 0.5rem 0 ${({ theme }) => theme.colors.salmon},
      0 0.7rem 0 ${({ theme }) => theme.colors.salmon},
      0 1rem 1rem rgba(0, 0, 0, 0.4);

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }

    animation: blink 1s step-end infinite;
  `,
};

export default CountDown;
