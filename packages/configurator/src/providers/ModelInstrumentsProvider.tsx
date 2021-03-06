import React from "react";
import Attitude from "../flightindicators/Attitude";
import Heading from "../flightindicators/Heading";
import { useAttitudeQuery } from "../gql/queries/Device.graphql";
import useConnectionState from "../hooks/useConnectionState";

type Props = {
  refreshRate: number;
};

const ModelInstrumentsProvider: React.FC<Props> = ({ refreshRate }) => {
  const { connection } = useConnectionState();
  const { data: deviceData } = useAttitudeQuery({
    variables: {
      connection: connection ?? "",
    },
    skip: !connection,
    pollInterval: 1000 / refreshRate,
  });

  const { roll = 0, pitch = 0, heading = 0 } =
    deviceData?.connection.device.attitude ?? {};

  return (
    <>
      <Attitude roll={roll} pitch={pitch} size={90} />
      <Heading heading={heading} size={90} />
    </>
  );
};

export default ModelInstrumentsProvider;
