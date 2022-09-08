import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { DriverResponse } from "hooks/useGetDriversByYear";
import styled from "@emotion/styled";
import Flag, { SupportedFlags } from "components/Flag";

const Flex = styled.div`
  flex: 1;
`;

export interface StandingCardProps {
  driver: DriverResponse;
  points: string;
}

export default function StandingCard({ driver, points }: StandingCardProps) {
  return (
    <div>
      <CardContent sx={{ display: "flex" }}>
        <Flag type={driver.nationality as SupportedFlags} />
        <Flex>
          {driver.givenName} {driver.familyName}
        </Flex>
        <Flex>{points}</Flex>
      </CardContent>
    </div>
  );
}
