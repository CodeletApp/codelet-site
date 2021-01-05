import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { string } from "prop-types";
import { apiRequest, getEnvUrl } from "../../services";

export const useEditQuestion = (question) => {
  let submitUrl = `questions/number/${question.questionNumber}`;

  const form = useForm();

  useEffect(() => {
    if (question) {
      form.reset({
        title: question.title ? question.title : "",
        approach1: question.approaches ? question.approaches[0] : "",
        approach2: question.approaches ? question.approaches[1] : "",
        approach3: question.approaches ? question.approaches[2] : "",
        algorithm1: question.codeBank ? question.codeBank[0] : "",
        algorithm2: question.codeBank ? question.codeBank[1] : "",
        algorithm3: question.codeBank ? question.codeBank[2] : "",
        spaceComplexity1: question.spaceComplexityBank
          ? question.spaceComplexityBank[0]
          : "",
        spaceComplexity2: question.spaceComplexityBank
          ? question.spaceComplexityBank[1]
          : "",
        spaceComplexity3: question.spaceComplexityBank
          ? question.spaceComplexityBank[2]
          : "",
        timeComplexity1: question.timeComplexityBank
          ? question.timeComplexityBank[0]
          : "",
        timeComplexity2: question.timeComplexityBank
          ? question.timeComplexityBank[1]
          : "",
        timeComplexity3: question.timeComplexityBank
          ? question.timeComplexityBank[2]
          : "",
        difficulty: question.difficulty ? question.difficulty : "",
        description: question.description ? question.description : "",
        example: question.example ? question.example : "",
        approachSolution: question.solution
          ? question.solution.approachIndex
          : "",
        algorithmSolution: question.solution ? question.solution.codeBlock : "",
        spaceComplexitySolution: question.solution
          ? question.solution.spaceComplexity
          : "",
        timeComplexitySolution: question.solution
          ? question.solution.timeComplexity
          : "",
      });
    }
  }, [question]);

  const { register, watch, control, handleSubmit, errors, ...rest } = form;

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

    /**
     * The issue is that approachSolutionIndex and algorithmSolutionIndex are coming back undefined from the form
     * The two need to come back with their actual values, their values being the values associated to the radio buttons selected
     * The QuestionForm is used for both SubmitQuestion and EditQuestion
     * It works perfectly (it gets the values) in SubmitQuestion
     * So we know the problem is not with QuestionForm but rather with the useEditQuestion hook
     * So the question is: Why is the data the two hooks are receiving different?
     * There shouldn't be a difference but there is and I can't find it...
     * Once this console.log prints an object with NO undefined values, we know it works
     */
    console.log(data);
    // Everything under this console.log is commented out to simplify the debugging of this issue

    // const response = await apiRequest({
    //   url: `${getEnvUrl()}/${submitUrl}`,
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     title,
    //     difficulty,
    //     description,
    //     example,
    //     approaches,
    //     codeBank,
    //     spaceComplexityBank,
    //     timeComplexityBank,
    //     solution,
    //   },
    // });
    // if (response.status >= 200 && response.status < 300) {
    //   window.location.assign("/submit-question/thanks");
    // } else {
    //   setSubmitError(response.data.message);
    // }
  };
  return {
    ...rest,
    register,
    watch,
    control,
    errors,
    submitQuestion: handleSubmit(onSubmit),
    submitError,
  };
};

useEditQuestion.propTypes = {
  questionNumber: string.isRequired,
};
