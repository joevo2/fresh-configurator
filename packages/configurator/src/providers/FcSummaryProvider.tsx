import React from "react";
import { DisarmFlags } from "@fresh/msp";
import { useFcSummaryQuery } from "../gql/__generated__";
import Table from "../components/Table";
import useConnectionState from "../hooks/useConnectionState";

const ARM_SWITCH_KEY = DisarmFlags[DisarmFlags.ARM_SWITCH];

const FcSummaryProvider: React.FC = () => {
  const { connection } = useConnectionState();
  const { data } = useFcSummaryQuery({
    variables: {
      connection: connection ?? "",
    },
    pollInterval: 100,
    skip: !connection,
  });

  const flagNames =
    data?.device.arming.disabledFlags
      .filter((flag) => flag !== DisarmFlags.ARM_SWITCH)
      .map((flag) => DisarmFlags[flag])
      .sort() ?? [];

  const armSwitchInactive =
    data?.device.arming.disabledFlags.includes(DisarmFlags.ARM_SWITCH) ?? false;

  return (
    <Table>
      <tbody>
        <tr>
          <td>Arming Disable Flags:</td>
          <td>
            {flagNames.map((flag) => (
              <span key={flag}>{flag}</span>
            ))}
            {armSwitchInactive && <span>{ARM_SWITCH_KEY}</span>}
          </td>
        </tr>
        <tr>
          <td>Battery voltage:</td>
          <td>{data?.device.power.voltage ?? ""} V</td>
        </tr>
        <tr>
          <td>Capacity drawn:</td>
          <td>{data?.device.power.mahDrawn ?? ""} mAh</td>
        </tr>
        <tr>
          <td>Current draw:</td>
          <td>
            {data
              ? (Math.round(data.device.power.amperage * 100) / 100).toFixed(2)
              : "0.00"}{" "}
            A
          </td>
        </tr>
        <tr>
          <td>RSSI:</td>
          <td>{data?.device.rc.rssi ?? ""}%</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FcSummaryProvider;