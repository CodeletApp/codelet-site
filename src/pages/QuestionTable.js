import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

import { apiRequest, getEnvUrl } from "../services";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ALL_QUESTIONS_ENDPOINT = "questions/all-questions";

export const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    async function getQuestions() {
      const res = await apiRequest({
        url: `${getEnvUrl()}/${ALL_QUESTIONS_ENDPOINT}`,
      });
      setQuestions(res.data);
    }
    getQuestions();
  }, []);

  function navigateToQuestion(questionNumber) {
    history.push(`/cla/questions/portal/edit-question/${questionNumber}`);
  }

  return questions.length ? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((row) => (
            <TableRow
              key={row.questionNumber}
              onClick={() => navigateToQuestion(row.questionNumber)}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {row.published ? "True" : "False"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <CircularProgress />
  );
};
