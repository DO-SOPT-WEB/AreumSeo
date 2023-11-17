import styled from "styled-components";
import { useEffect, useRef, useReducer } from "react";
import Recommendation from "./Recommendation";
import { reducer } from "../libs/reducer";

const CountDown = (props) => {
  const { category, setIsStartClicked, setStep } = props;
  const INTERVAL = 1000;
  const [timerState, dispatch] = useReducer(reducer, {
    time: 3,
  });

  // useRef(): setState 값이 변하면 렌더링이 발생함. useRef의 current를 사용하면 current 값이 변하더라도 리렌더링되지 않기 때문에 렌더링 최적화를 이룰 수 있음.
  const timer = useRef(0);

  // setTimeout(): 두 번째 인자로 전달받은 시간이 지나면 한 번만 동작, 타이머 만료 후 첫 번째 인자로 전달받은 콜백함수를 호출함.
  // setInterval(): 두 번째 인자로 전달받은 시간을 간격으로 동작, 첫 번째 인자인 콜백함수가 시간 간격을 두고 반복적으로 호출됨.
  useEffect(() => {
    if (timerState.time > 0) {
      timer.current = setInterval(() => {
        dispatch({ type: "SET_TIME", payload: 1 });
      }, INTERVAL);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [timerState.time]);

  return timerState.time ? (
    <St.CountContainer>
      <St.Count>{timerState.time}</St.Count>
    </St.CountContainer>
  ) : (
    <Recommendation
      setIsStartClicked={setIsStartClicked}
      category={category}
      setStep={setStep}
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
