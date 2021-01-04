import React from "react";
import { any } from "prop-types";
import { Typography } from "@material-ui/core";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { useEditQuestion } from "../components/CustomHooks";

export const EditQuestion = ({ match }) => {
  return (
    <QuestionForm submitHook={useEditQuestion(match.params.number)}>
      <Typography variant="h2">Submit a Question</Typography>
      <Typography variant="h5">
        Submit a question you'd like to see in Codelet.
      </Typography>
    </QuestionForm>
  );
};

EditQuestion.propTypes = {
  match: any.isRequired,
};
