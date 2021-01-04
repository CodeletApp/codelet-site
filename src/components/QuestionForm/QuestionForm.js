import React from "react";
import { Controller } from "react-hook-form";
import { any, bool, func } from "prop-types";
import {
  Container,
  Typography,
  CssBaseline,
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  Radio,
  RadioGroup,
  Box,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { ErrorMessage } from "../ErrorMessage";

export const QuestionForm = ({
  children,
  showSubmissionFineprint,
  submitHook,
}) => {
  const classes = useStyles();
  const {
    register,
    control,
    errors,
    submitQuestion,
    submitError,
  } = submitHook();

  return (
    <Box className={classes.root}>
      <Container className={classes.formContainer}>
        <CssBaseline />
        {children}
        <form className={classes.form} onSubmit={submitQuestion}>
          <Typography variant="h6">
            Question Title <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <sub>
            We'll use Palindrome Checker as example throughout this form.
            Example response: "Palindrome Checker"
          </sub>
          <TextField
            variant="outlined"
            margin="normal"
            className={classes.input}
            required
            fullWidth
            id="title"
            name="title"
            placeholder="Please enter the title of the question"
            inputRef={register}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Question Difficulty{" "}
            <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <Controller
            name="difficulty"
            control={control}
            as={
              <Select
                variant="outlined"
                className={classes.input}
                name="difficulty"
                id="difficulty"
                labelId="difficulty-label"
              >
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Hard">Hard</MenuItem>
              </Select>
            }
            defaultValue={"Easy"}
            rules={{ required: true }}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Question Description: A short description that poses the question.{" "}
            <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <sub>
            Example response: "Given a string s, return true if the string is
            the same when written backwards (a palindrome)."
          </sub>
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            name="description"
            multiline
            rows={7}
            placeholder="Please enter the description of the question"
            inputRef={register}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Question Example: Simple input and output{" "}
            <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <sub>
            Example response: "1) s = 'Apple', Returns: false. 2) s = 'level',
            Returns: true"
          </sub>
          <TextField
            variant="outlined"
            className={classes.input}
            margin="normal"
            required
            fullWidth
            id="example"
            name="example"
            multiline
            rows={7}
            placeholder="Please enter the example"
            inputRef={register}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Approaches <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <Typography>
            Approaches are short descriptions of how to solve a problem. Please
            fill out three approaches and select the single correct option.
          </Typography>
          <ErrorMessage
            isError={errors.approachSolutionIndex}
            message="Please select which approach is correct"
          />
          <Controller
            name="approachSolutionIndex"
            control={control}
            as={
              <RadioGroup
                row
                name="approachSolutionIndex"
                id="approachSolutionIndex"
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="0" />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      className={classes.input}
                      required
                      id="approach1"
                      name="approach1"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder="Please enter the first approach. Example for isPalindrome: Use two pointers, one at the first index
                      of a char array of the string, and one at the end. In a for loop,
                      check the equality of the pointers. If they are ever not equal,
                      return false, otherwise return true"
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="1" />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      className={classes.input}
                      required
                      id="approach2"
                      name="approach2"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder="Please enter the second approach"
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="2" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="approach3"
                      name="approach3"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder="Please enter the third approach"
                      inputRef={register}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            }
            defaultValue=""
            rules={{ required: true }}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Algorithms <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <Typography>
            Short, <strong>formatted</strong> code snippets that solve the
            problem. Python, JS, or pseudo code is preferred. Select the single
            correct option.
          </Typography>
          <sub>
            It's okay to assume simple helper functions, such as reverse(), are
            defined and do not need to be written.
          </sub>
          <ErrorMessage
            isError={errors.algorithmSolutionIndex}
            message="Please select which algorithm is correct"
          />
          <Controller
            name="algorithmSolutionIndex"
            control={control}
            as={
              <RadioGroup
                row
                name="algorithmSolutionIndex"
                id="algorithmSolutionIndex"
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="0" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="algorithm1"
                      name="algorithm1"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder={`Please enter the first algorithm\nEx:\nisPal(s):\ntempStr = reverse(s) \nfor(i=0;i<s.length; i++):\n\tif(s[i]!==tempStr[i])\n\treturn false\n return true`}
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="1" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="algorithm2"
                      name="algorithm2"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder="Please enter the second algorithm"
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="2" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="algorithm3"
                      name="algorithm3"
                      multiline
                      rows={7}
                      fullWidth
                      placeholder="Please enter the third algorithm"
                      inputRef={register}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            }
            defaultValue=""
            rules={{ required: true }}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Algorithm space complexities. Select the correct solution's space
            complexity. <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <sub>
            Use common notation in string form. Example responses: "nlogn, n,
            n^2"
          </sub>
          <ErrorMessage
            isError={errors.spaceComplexitySolutionIndex}
            message="Please select which space complexity is correct"
          />
          <Controller
            name="spaceComplexitySolutionIndex"
            control={control}
            as={
              <RadioGroup
                row
                name="spaceComplexitySolutionIndex"
                id="spaceComplexitySolutionIndex"
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="0" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="spaceComplexity1"
                      name="spaceComplexity1"
                      placeholder="Please enter the first space complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="1" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="spaceComplexity2"
                      name="spaceComplexity2"
                      placeholder="Please enter the second space complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="2" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="spaceComplexity3"
                      name="spaceComplexity3"
                      placeholder="Please enter the third space complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            }
            defaultValue=""
            rules={{ required: true }}
          />
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Algorithm time complexities. Select the correct solution's time
            complexity. <span className={classes.requiredAsterisk}>*</span>
          </Typography>
          <sub>
            Use common notation in string form. Example responses: "nlogn, n,
            n^2"
          </sub>
          <ErrorMessage
            isError={errors.timeComplexitySolutionIndex}
            message="Please select which time complexity is correct"
          />
          <Controller
            name="timeComplexitySolutionIndex"
            control={control}
            as={
              <RadioGroup
                row
                name="timeComplexitySolutionIndex"
                id="timeComplexitySolutionIndex"
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="0" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="timeComplexity1"
                      name="timeComplexity1"
                      placeholder="Please enter the first time complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="1" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="timeComplexity2"
                      name="timeComplexity2"
                      placeholder="Please enter the second time complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.button}>
                    <Radio value="2" />
                    <TextField
                      variant="outlined"
                      className={classes.input}
                      margin="normal"
                      required
                      id="timeComplexity3"
                      name="timeComplexity3"
                      placeholder="Please enter the third time complexity"
                      inputRef={register}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            }
            defaultValue=""
            rules={{ required: true }}
          />
          <Grid className={classes.button}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              <Typography variant="h5">Submit</Typography>
            </Button>
            <ErrorMessage isError={submitError} message={submitError} />
            <br />
            {showSubmissionFineprint ? (
              <sub>
                By submitting a question, you affirm that you are the author of
                its content and give Codelet permission to display, modify, and
                delete this question at any time.
              </sub>
            ) : (
              <span />
            )}
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

QuestionForm.defaultProps = {
  showSubmissionFineprint: false,
};

QuestionForm.propTypes = {
  children: any.isRequired,
  showSubmissionFineprint: bool,
  submitHook: func.isRequired,
};
