import React from 'react';
import { IntroProps } from "./interface";

const Intro = (props: IntroProps) => (
  <p>
    {props.message}
  </p>
)

export default Intro;
