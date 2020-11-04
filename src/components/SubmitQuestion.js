import React, { useState } from "react";
import { apiRequest } from "../services";
import CustomTextContainer from "./CustomTextContainer";

export const SubmitQuestion = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    difficulty: "",
    description: "",
    example: "",
    approach1: "",
    approach2: "",
    approach3: "",
    algorithm1: "",
    algorithm2: "",
    algorithm3: "",
    spaceComplexity: "",
    timeComplexity: "",
  });

  const {
    author,
    title,
    difficulty,
    description,
    example,
    approach1,
    approach2,
    approach3,
    algorithm1,
    algorithm2,
    algorithm3,
    complexity1,
    complexity2,
    complexity3,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const approaches = [approach1, approach2, approach3];
    const codeBank = [algorithm1, algorithm2, algorithm3];
    const complexityBank = [complexity1, complexity2, complexity3];
    await apiRequest({
      url: `https://codelet-api-dev.herokuapp.com/questions/post-question`,
      method: "POST",
      params: null,
      data: {
        author,
        title,
        difficulty,
        description,
        example,
        approaches,
        codeBank,
        complexityBank,
        published: false,
      },
    });
  };

  return (
    <div className="background">
      <CustomTextContainer>
        <div className="title">Submit A Question</div>
        <div className="subtitle">
          Have an idea for a question we should add to our app? Fill out this
          form to submit it!
        </div>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="input-label">Author:</label>
            <br />
            <input
              className="form-input"
              type="text"
              placeholder="Enter your name here"
              name="author"
              value={author}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="input-label">Title:</label>
            <br />
            <input
              className="form-input"
              type="text"
              placeholder="Enter the question's title here"
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="input-label">Difficulty:</label>
            <br />
            <select
              className="form-input"
              name="difficulty"
              onChange={(e) => onChange(e)}
            >
              <option defaultValue value="Easy">
                Easy
              </option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="form-group">
            <label className="input-label">Description:</label>
            <br />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's description here"
              name="description"
              value={description}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label class="input-label">Example:</label>
            <br />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's example here"
              name="example"
              value={example}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="input-label">Approaches:</label>
            <br />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's first approach here"
              name="approach1"
              value={approach1}
              onChange={(e) => onChange(e)}
            />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's second approach here"
              name="approach2"
              value={approach2}
              onChange={(e) => onChange(e)}
            />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's third approach here"
              name="approach3"
              value={approach3}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="input-label">Algorithms:</label>
            <br />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's first algorithm here"
              name="algorithm1"
              value={algorithm1}
              onChange={(e) => onChange(e)}
            />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's second algorithm here"
              name="algorithm2"
              value={algorithm2}
              onChange={(e) => onChange(e)}
            />
            <textarea
              className="form-textarea"
              rows="5"
              type="text"
              placeholder="Enter the question's third algorithm here"
              name="algorithm3"
              value={algorithm3}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="input-label">Complexity Bank:</label>
            <br />
            <input
              className="form-input-small"
              type="text"
              placeholder="Enter the question's first complexity option here"
              name="complexity1"
              value={complexity1}
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-input-small"
              type="text"
              placeholder="Enter the question's second complexity option here"
              name="complexity2"
              value={complexity2}
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-input-small"
              type="text"
              placeholder="Enter the question's third complexity option here"
              name="complexity3"
              value={complexity3}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <input type="submit" className="submit-button" />
          </div>
        </form>
      </CustomTextContainer>
      <br />
    </div>
  );
};
