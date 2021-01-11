import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { string } from "prop-types";
import { apiRequest, getEnvUrl } from "../../services";

export const useEditQuestion = (question) => {
  let submitUrl = `questions/number/${question.questionNumber}`;

  const form = useForm();

  useEffect(() => {
    if (question) {
      /**
       * The form is initially created with no defaultValues.
       * In order to populate it with the default values equivalent to the values of the quesiton,
       * we must reset the form and pass into it any of the useForm() fields we want it to have
       * In this case that is only the defaultValues.
       * We cannot set the defaultValues upon initial creation of the form because question initially starts undefined
       * Using this useEffect, we can update the form by resetting when question updates with the question's default values
       */
      form.reset(makeFormDefaultValuesObject(question));
    }
  }, [question]);

  const { register, control, handleSubmit, errors, ...rest } = form;

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
      published,
      questionNumber,
      like,
      dislike,
      successful,
      unsuccessful,
      tags,
    } = data;
    const rating = {
      like: parseInt(like),
      dislike: parseInt(dislike),
    };
    const globalAttempts = {
      successful: parseInt(successful),
      unsuccessful: parseInt(unsuccessful),
    };
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
        published,
        questionNumber,
        rating,
        globalAttempts,
        tags: tags !== "" ? tags.split(",") : [],
      },
    });
    if (response.status >= 200 && response.status < 300) {
      window.location.assign("/cla/questions/portal/");
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

const findComplexitySolution = (solution, complexityBank) => {
  let index = "";
  // Find the index matching the solution by checking to see which complexityBank value it matches
  if (solution === complexityBank[0]) {
    index = "0";
  } else if (solution === complexityBank[1]) {
    index = "1";
  } else if (solution === complexityBank[2]) {
    index = "2";
  }
  return index;
};

const makeFormDefaultValuesObject = (question) => {
  /**
   * The && operator or a ternary is requried for the properties which are less straightforward than a string, number, or boolean
   * This applies to arrays such as approaches and objects such as solution
   */
  return {
    title: question.title,
    approach1: question.approaches && question.approaches[0],
    approach2: question.approaches && question.approaches[1],
    approach3: question.approaches && question.approaches[2],
    algorithm1: question.codeBank && question.codeBank[0],
    algorithm2: question.codeBank && question.codeBank[1],
    algorithm3: question.codeBank && question.codeBank[2],
    spaceComplexity1:
      question.spaceComplexityBank && question.spaceComplexityBank[0],
    spaceComplexity2:
      question.spaceComplexityBank && question.spaceComplexityBank[1],
    spaceComplexity3:
      question.spaceComplexityBank && question.spaceComplexityBank[2],
    timeComplexity1:
      question.timeComplexityBank && question.timeComplexityBank[0],
    timeComplexity2:
      question.timeComplexityBank && question.timeComplexityBank[1],
    timeComplexity3:
      question.timeComplexityBank && question.timeComplexityBank[2],
    difficulty: question.difficulty,
    description: question.description,
    example: question.example,
    approachSolutionIndex:
      question.solution && question.solution.approachIndex + "",
    algorithmSolutionIndex:
      question.solution && question.solution.codeBlock + "",
    spaceComplexitySolutionIndex:
      question.solution &&
      findComplexitySolution(
        question.solution.spaceComplexity,
        question.spaceComplexityBank
      ),
    timeComplexitySolutionIndex:
      question.solution &&
      findComplexitySolution(
        question.solution.timeComplexity,
        question.timeComplexityBank
      ),
    published: question.published + "",
    questionNumber: question.questionNumber,
    like: question.rating && question.rating.like,
    dislike: question.rating && question.rating.dislike,
    successful: question.globalAttempts && question.globalAttempts.successful,
    unsuccessful:
      question.globalAttempts && question.globalAttempts.unsuccessful,
    tags: question.tags && question.tags.join(","),
  };
};
