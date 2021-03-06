import React from "react";
import withBase from "./hoc/withBase";
import {
  HorizonBack,
  HorizonBall,
  HorizonCircle,
  HorizonMechanics,
} from "./assets";

const PITCH_LIMIT = 30;

const boundedPitch = (pitch: number): number =>
  Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, pitch));

export default withBase<{
  roll: number;
  pitch: number;
}>(({ roll, pitch }) => (
  <>
    <div style={{ transform: `rotate(${roll}deg)` }}>
      <HorizonBack />
      <HorizonBall style={{ top: `${boundedPitch(pitch) * 0.7}%` }} />

      <HorizonCircle />
    </div>
    <HorizonMechanics />
  </>
));
