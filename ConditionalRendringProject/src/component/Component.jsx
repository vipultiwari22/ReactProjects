import React from "react";
import { MadeGoal, MissedGoal } from "./Condition";

function Component(prop) {
  const isGoal = prop.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  } else {
    return <MissedGoal />;
  }
}

export default Component;
