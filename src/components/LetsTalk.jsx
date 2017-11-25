import React from "react";
import styled from "styled-components";


const Lets = styled.div`
  background-color: #f2f2f2;
  margin-top: 25px;
  margin-bottom: 25px;
  display:flex;
  justify-content:space-between;

  .form-cont {
    span {
      color: var(--blue);
      background: --webkit-linear-gradient(90deg, #3080ED 0%, #8160B7 54.31%, #FF2F64 112.64%);
      -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }

`


const Triangles = styled.div`
`
const TriangleImage = styled.img`
  height: 100%;
`

const LetsTalk = () => (
  <Lets>
    <div className="form-cont">
      <span>let's talk</span>
    </div>
    <div className="form">
      <span>your name:</span>
    </div>
    <Triangles>
      <TriangleImage src="/public/img/triangles.svg" />
    </Triangles>
  </Lets>
  );

export default LetsTalk;
