import React from "react";
import { useForm, Controller } from "react-hook-form";
import { apiRequest, getEnvUrl } from "../services";
import {
  Container,
  Typography,
  CssBaseline,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Button,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ErrorMessage } from "./ErrorMessage";

const useStyles = makeStyles({
  formContainer: {
    textAlign: "center",
  },
});

export const SubmitQuestion = () => {
  const classes = useStyles();

  const { register, control, handleSubmit, errors } = useForm();

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
    await apiRequest({
      url: `${getEnvUrl()}/questions/post-question`,
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
  };

  return (
    <Container className={classes.formContainer}>
      <CssBaseline />
      <Typography variant="h3">Submit A Question</Typography>
      <Typography variant="h5">
        Have an idea for a question we should add to our app? Fill out this form
        to submit it!
      </Typography>
      <form style={{ marginBottom: "5%" }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          name="title"
          label="Title"
          placeholder="Please enter the title of the question"
          inputRef={register}
        />
        <InputLabel id="difficulty-label" required>
          Difficulty
        </InputLabel>
        <Controller
          name="difficulty"
          control={control}
          as={
            <Select
              variant="outlined"
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows={7}
          placeholder="Please enter the description of the question"
          inputRef={register}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="example"
          name="example"
          label="Example"
          multiline
          rows={7}
          placeholder="Please enter the example"
          inputRef={register}
        />
        <Typography>
          Approaches (please select the one that is correct):
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
                <Grid item xs={12} sm={4}>
                  <Radio value="0" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="approach1"
                    name="approach1"
                    label="Approach 1"
                    multiline
                    rows={7}
                    fullWidth
                    placeholder="Please enter the first approach"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="1" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="approach2"
                    name="approach2"
                    label="Approach 2"
                    multiline
                    rows={7}
                    fullWidth
                    placeholder="Please enter the second approach"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="2" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="approach3"
                    name="approach3"
                    label="Approach 3"
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
        <Typography>
          Algorithms (please select the one that is correct):
        </Typography>
        <ErrorMessage
          isError={errors.approachSolutionIndex}
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
                <Grid item xs={12} sm={4}>
                  <Radio value="0" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="algorithm1"
                    name="algorithm1"
                    label="Algorithm 1"
                    multiline
                    rows={7}
                    fullWidth
                    placeholder="Please enter the first algorithm"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="1" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="algorithm2"
                    name="algorithm2"
                    label="Algorithm 2"
                    multiline
                    rows={7}
                    fullWidth
                    placeholder="Please enter the second algorithm"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="2" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="algorithm3"
                    name="algorithm3"
                    label="Algorithm 3"
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
        <Typography>
          Space Complexities (please select the one that is correct):
        </Typography>
        <ErrorMessage
          isError={errors.approachSolutionIndex}
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
                <Grid item xs={12} sm={4}>
                  <Radio value="0" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="spaceComplexity1"
                    name="spaceComplexity1"
                    label="Space Complexity 1"
                    placeholder="Please enter the first space complexity"
                    inputRef={register}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="1" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="spaceComplexity2"
                    name="spaceComplexity2"
                    label="Space Complexity 2"
                    placeholder="Please enter the second space complexity"
                    inputRef={register}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="2" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="spaceComplexity3"
                    name="spaceComplexity3"
                    label="Space Complexity 3"
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
        <Typography>
          Time Complexities (please select the one that is correct):
        </Typography>
        <ErrorMessage
          isError={errors.approachSolutionIndex}
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
                <Grid item xs={12} sm={4}>
                  <Radio value="0" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="timeComplexity1"
                    name="timeComplexity1"
                    label="Time Complexity 1"
                    placeholder="Please enter the first time complexity"
                    inputRef={register}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="1" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="timeComplexity2"
                    name="timeComplexity2"
                    label="Time Complexity 2"
                    placeholder="Please enter the second time complexity"
                    inputRef={register}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Radio value="2" />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="timeComplexity3"
                    name="timeComplexity3"
                    label="Time Complexity 3"
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};
