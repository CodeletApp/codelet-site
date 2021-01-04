import { useState } from "react";
import { useForm } from "react-hook-form";
import { string } from "prop-types";
import { apiRequest, getEnvUrl } from "../../services";

export const useEditQuestion = (questionNumber) => {
  let submitUrl = `questions/number/${questionNumber}`;

  const getQuestion = async () => {
    return await apiRequest({
      url: `${getEnvUrl()}/${submitUrl}`,
      method: "GET",
    });
  };
  const question = getQuestion();

  const { register, control, handleSubmit, errors, ...rest } = useForm({
    defaultValues: { ...question },
  });
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    const {
      title,
      approach1,
      approach2,
      approach3,
      algorithm1,
      algorithm2,
      algorithm3,
      spaceComplexity1,
      spaceComplexity2,
      spaceComplexity3,
      timeComplexity1,
      timeComplexity2,
      timeComplexity3,
      difficulty,
      description,
      example,
      approachSolutionIndex,
      algorithmSolutionIndex,
      spaceComplexitySolutionIndex,
      timeComplexitySolutionIndex,
    } = data;
    const approaches = [approach1, approach2, approach3];
    const codeBank = [algorithm1, algorithm2, algorithm3];
    const spaceComplexityBank = [
      spaceComplexity1,
      spaceComplexity2,
      spaceComplexity3,
    ];
    const timeComplexityBank = [
      timeComplexity1,
      timeComplexity2,
      timeComplexity3,
    ];
    const solution = {
      approachIndex: parseInt(approachSolutionIndex),
      codeBlock: parseInt(algorithmSolutionIndex),
      spaceComplexity:
        spaceComplexityBank[parseInt(spaceComplexitySolutionIndex)],
      timeComplexity: timeComplexityBank[parseInt(timeComplexitySolutionIndex)],
    };
    const response = await apiRequest({
      url: `${getEnvUrl()}/${submitUrl}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title,
        difficulty,
        description,
        example,
        approaches,
        codeBank,
        spaceComplexityBank,
        timeComplexityBank,
        solution,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      window.location.assign("/submit-question/thanks");
    } else {
      setSubmitError(response.data.message);
    }
  };
  return {
    ...rest,
    register,
    control,
    errors,
    submitQuestion: handleSubmit(onSubmit),
    submitError,
  };
};

useEditQuestion.propTypes = {
  questionNumber: string.isRequired,
};
