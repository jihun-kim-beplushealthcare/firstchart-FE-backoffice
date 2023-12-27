import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const TIME = 1000;

export default function LoginTimer() {
  const [timer, setTimer] = useState<number>(TIME);

  useEffect(() => {
    document.addEventListener("click", () => setTimer(TIME));
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer <= 0) clearInterval(timerInterval);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  return (
    <TimerWrapper>
      <div>{timer}</div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  width: 150px;
`;
