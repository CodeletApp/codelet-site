import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest, getEnvUrl } from "../../services";

// @TODO
export const useEditQuestion = (id) => {
  let submitUrl = `questions/number/${id}`;
  const { register, control, handleSubmit, errors, ...rest } = useForm();
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
      method: "POST",
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
