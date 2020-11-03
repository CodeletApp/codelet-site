import React, { useState, Fragment } from "react";
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
    <Fragment>
      <CustomTextContainer>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <span>Author: </span>
          <br />
          <input
            type="text"
            placeholder={author}
            name="author"
            value={author}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Title: </span>
          <br />
          <input
            type="text"
            placeholder={title}
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Difficulty: </span>
          <br />
          <input
            type="text"
            placeholder={difficulty}
            name="difficulty"
            value={difficulty}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Description: </span>
          <br />
          <textarea
            rows="5"
            type="text"
            placeholder={description}
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Example: </span>
          <br />
          <textarea
            rows="5"
            type="text"
            placeholder={example}
            name="example"
            value={example}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Approaches: </span>
          <br />
          <textarea
            rows="5"
            type="text"
            placeholder={approach1}
            name="approach1"
            value={approach1}
            onChange={(e) => onChange(e)}
          />
          <textarea
            rows="5"
            type="text"
            placeholder={approach2}
            name="approach2"
            value={approach2}
            onChange={(e) => onChange(e)}
          />
          <textarea
            rows="5"
            type="text"
            placeholder={approach3}
            name="approach3"
            value={approach3}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Algorithms: </span>
          <br />
          <textarea
            rows="5"
            type="text"
            placeholder={algorithm1}
            name="algorithm1"
            value={algorithm1}
            onChange={(e) => onChange(e)}
          />
          <textarea
            rows="5"
            type="text"
            placeholder={algorithm2}
            name="algorithm2"
            value={algorithm2}
            onChange={(e) => onChange(e)}
          />
          <textarea
            rows="5"
            type="text"
            placeholder={algorithm3}
            name="algorithm3"
            value={algorithm3}
            onChange={(e) => onChange(e)}
          />
          <br />
          <span>Complexity Bank: </span>
          <br />
          <input
            type="text"
            placeholder={complexity1}
            name="complexity1"
            value={complexity1}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            placeholder={complexity2}
            name="complexity2"
            value={complexity2}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            placeholder={complexity3}
            name="complexity3"
            value={complexity3}
            onChange={(e) => onChange(e)}
          />
          <input type="submit" />
        </form>
      </CustomTextContainer>
    </Fragment>
  );
};
