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

  tableHead: { fontWeight: 700 },
  tableRow: {
    cursor: "pointer",
  },
});

export const QuestionTable = () => {
  const history = useHistory();
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      const ALL_QUESTIONS_ENDPOINT = "questions/all-questions";
      const res = await apiRequest({
        url: `${getEnvUrl()}/${ALL_QUESTIONS_ENDPOINT}`,
        params: {
          includeUnpublished: true,
        },
      });
      setQuestions(res.data);
    }
    getQuestions();
  }, []);

  function navigateToQuestion(questionNumber) {
    history.push(`/edit-question/${questionNumber}`);
  }

  return questions.length ? (
    <div className="question-table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Title</TableCell>
              <TableCell className={classes.tableHead} align="right">
                Published
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <TableRow
                className={classes.tableRow}
                key={question._id}
                onClick={() => navigateToQuestion(question.questionNumber)}
              >
                <TableCell component="th" scope="row">
                  {question.title}
                </TableCell>
                <TableCell align="right">
                  {question.published ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : (
    <CircularProgress />
  );
};
