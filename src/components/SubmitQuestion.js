import React, { useState, Fragment } from "react";
import { apiRequest } from "../services";

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
    spaceComplexity,
    timeComplexity,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    const approaches = [approach1, approach2, approach3];
    const codeBank = [algorithm1, algorithm2, algorithm3];
    const complexityBank = [spaceComplexity, timeComplexity];
    await apiRequest({
      url: `https://codelet-api-dev.herokuapp.com/questions/post-question`,
      method: "POST",
      params: null,
      data: { ...formData, published: false },
    });
  };

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <span className="lead">Author: </span>
        <input
          type="text"
          placeholder={author}
          name="author"
          value={author}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Title: </span>
        <input
          type="text"
          placeholder={title}
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Difficulty: </span>
        <input
          type="text"
          placeholder={difficulty}
          name="difficulty"
          value={difficulty}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Description: </span>
        <input
          type="text"
          placeholder={description}
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Example: </span>
        <input
          type="text"
          placeholder={example}
          name="example"
          value={example}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Approach 1: </span>
        <input
          type="text"
          placeholder={approach1}
          name="approach1"
          value={approach1}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Approach 2: </span>
        <input
          type="text"
          placeholder={approach2}
          name="approach2"
          value={approach2}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Approach 3: </span>
        <input
          type="text"
          placeholder={approach3}
          name="approach3"
          value={approach3}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Algorithm 1: </span>
        <input
          type="text"
          placeholder={algorithm1}
          name="algorithm1"
          value={algorithm1}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Algorithm 2: </span>
        <input
          type="text"
          placeholder={algorithm2}
          name="algorithm2"
          value={algorithm2}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Algorithm 3: </span>
        <input
          type="text"
          placeholder={algorithm3}
          name="algorithm3"
          value={algorithm3}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Space Complexity: </span>
        <input
          type="text"
          placeholder={spaceComplexity}
          name="spaceComplexity"
          value={spaceComplexity}
          onChange={(e) => onChange(e)}
        />
        <span className="lead">Time Complexity: </span>
        <input
          type="text"
          placeholder={timeComplexity}
          name="timeComplexity"
          value={timeComplexity}
          onChange={(e) => onChange(e)}
        />
      </form>
    </Fragment>
  );
};
