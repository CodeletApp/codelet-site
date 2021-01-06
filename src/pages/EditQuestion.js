import React, { useState, useEffect } from "react";
import { object } from "prop-types";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { useEditQuestion } from "../components/CustomHooks";
import { apiRequest, getEnvUrl } from "../services";

export const EditQuestion = ({ match }) => {
  const [question, setQuestion] = useState({});
  const [invalidQuestionNumber, setInvalidQuestionNumber] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await apiRequest({
        url: `${getEnvUrl()}/questions/number/${match.params.number}`,
        method: "GET",
      });
      if (response.status === 404) {
        setInvalidQuestionNumber(true);
      } else {
        setQuestion(response.data);
      }
    }
    fetchData();
  }, []);
  const formContent = useEditQuestion(question);

  return !invalidQuestionNumber ? (
    <QuestionForm formContent={formContent} showAdminFields>
      <Typography variant="h2">
        Editing Question {match.params.number}
      </Typography>
    </QuestionForm>
  ) : (
    <Redirect to="/cla/questions/portal" />
  );
};

EditQuestion.propTypes = {
  match: object.isRequired,
};