import React, { useState, useEffect } from "react";
import { object } from "prop-types";
import { Typography } from "@material-ui/core";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { useEditQuestion } from "../components/CustomHooks";
import { apiRequest, getEnvUrl } from "../services";

export const EditQuestion = ({ match }) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await apiRequest({
        url: `${getEnvUrl()}/questions/number/${match.params.number}`,
        method: "GET",
      });
      setQuestion(response.data);
    }
    fetchData();
  }, []);
  const formContent = useEditQuestion(question);

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
