import { useState } from 'react';
import { quizData } from './quizData';

export function useCinemaQuiz() {
  const [currentStep, setCurrentStep] = useState('start');
  const [stepCount, setStepCount] = useState(1);
  const [resultKey, setResultKey] = useState(null);

  const currentData = quizData[currentStep];

  const handleOptionClick = (option) => {
    if (option.result) {
      setResultKey(option.result);
    } else {
      setCurrentStep(option.next);
      setStepCount((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep('start');
    setStepCount(1);
    setResultKey(null);
  };

  const maxSteps = 5;
  const progressPercentage = resultKey ? 100 : Math.min((stepCount / maxSteps) * 100, 95);

  return {
    currentData,
    stepCount,
    resultKey,
    handleOptionClick,
    handleRestart,
    progressPercentage
  };
}