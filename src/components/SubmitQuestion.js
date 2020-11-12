import React from "react";
import { useForm, Controller } from "react-hook-form";
import { apiRequest } from "../services";
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

export const SubmitQuestion = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const {
      title,
      approach1,
      approach2,
      approach3,
      algorithm1,
      algorithm2,
      algorithm3,
      complexity1,
      complexity2,
      complexity3,
      author,
      difficulty,
      description,
      example,
      approachSolutionIndex,
      algorithmSolutionIndex,
      complexitySolutionIndex,
    } = data;
    const approaches = [approach1, approach2, approach3];
    const codeBank = [algorithm1, algorithm2, algorithm3];
    const complexityBank = [complexity1, complexity2, complexity3];
    const solution = {
      approachIndex: parseInt(approachSolutionIndex),
      codeBlock: parseInt(algorithmSolutionIndex),
      complexity: complexityBank[parseInt(complexitySolutionIndex)],
    };
    await apiRequest({
      url: `https://codelet-api-dev.herokuapp.com/questions/post-question`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        author,
        title,
        difficulty,
        description,
        example,
        approaches,
        codeBank,
        complexityBank,
        solution,
        published: false,
      },
    });
  };

  return (
    <Container>
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
          fullWidth
          id="author"
          name="author"
          label="Author"
          placeholder="Please enter the name you would like to receive credit for this question"
          inputRef={register}
        />
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
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          }
          defaultValue={"easy"}
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
          placeholder="Please enter the example for the question"
          inputRef={register}
        />
        <Typography>
          Approaches (please select the one that is correct):
        </Typography>
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
                    placeholder="Please enter the first approach for the question"
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
                    placeholder="Please enter the second approach for the question"
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
                    placeholder="Please enter the third approach for the question"
                    inputRef={register}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          }
          defaultValue="0"
          rules={{ required: true }}
        />
        <Typography>
          Algorithms (please select the one that is correct):
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
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
              placeholder="Please enter the first algorithm for the question"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
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
              placeholder="Please enter the second algorithm for the question"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
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
              placeholder="Please enter the third algorithm for the question"
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Typography>
          Complexity (please select the one that is correct):
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="complexity1"
              name="complexity1"
              label="Complexity 1"
              placeholder="Please enter the first complexity for the question"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="complexity2"
              name="complexity2"
              label="Complexity 2"
              placeholder="Please enter the second complexity for the question"
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="complexity3"
              name="complexity3"
              label="Complexity 3"
              placeholder="Please enter the third complexity for the question"
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};
