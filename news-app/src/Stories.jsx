import React from "react";
import { useGlobalContext } from "./Context";
export const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  // To add Loading logic
  if (isLoading) {
    return (
      <>
        <div className="loading">
          <h1>
            <b>Loading...</b>
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <h1>My Tech NewsPost</h1> */}
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span> {author}</span> | <span> {num_comments} </span>
                comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                {/* define arrow function in a */}

                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
