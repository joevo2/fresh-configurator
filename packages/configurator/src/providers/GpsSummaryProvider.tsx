import React from "react";
import { Sensors } from "@betaflight/api";
import Status from "../components/Status";
import Table from "../components/Table";
import {
  useSensorsQuery,
  useGpsSummaryQuery,
} from "../gql/queries/Device.graphql";
import useConnectionState from "../hooks/useConnectionState";

type Props = {
  refreshRate: number;
};

const GpsSummaryProvider: React.FC<Props> = ({ refreshRate }) => {
  const { connection } = useConnectionState();

  const { data: sensorsData } = useSensorsQuery({
    variables: {
      connection: connection ?? "",
    },
    skip: !connection,
  });
  const sensors = sensorsData?.connection.device.sensors ?? [];

  const { data } = useGpsSummaryQuery({
    variables: {
      connection: connection ?? "",
    },
    skip: !sensors.includes(Sensors.GPS) || !connection,
    pollInterval: 1000 / refreshRate,
  });

  return (
    <Table>
      <tbody>
        <tr>
          <td>3D Fix:</td>
          <td>
            {data && (
              <Status positive={data.connection.device.gps.fix}>
                {data.connection.device.gps.fix ? "True" : "False"}
              </Status>
            )}
          </td>
        </tr>
        <tr>
          <td>Sats:</td>
          <td>{data?.connection.device.gps.numSat}</td>
        </tr>
        <tr>
          <td>Latitude:</td>
          <td>{data?.connection.device.gps.lat}</td>
        </tr>
        <tr>
          <td>Longitude:</td>
          <td>{data?.connection.device.gps.lon}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GpsSummaryProvider;
