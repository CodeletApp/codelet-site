import React from "react";
import { object } from "prop-types";
import { Typography } from "@material-ui/core";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { useEditQuestion } from "../components/CustomHooks";

export const EditQuestion = ({ match }) => {
  const formContent = useEditQuestion(match.params.number);

  return (
    <QuestionForm formContent={formContent}>
      <Typography variant="h2">
        Editing Question {match.params.number}
      </Typography>
    </QuestionForm>
  );
};

EditQuestion.propTypes = {
  match: object.isRequired,
};
