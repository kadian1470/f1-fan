import StandingCard from "components/StandingCard";
import { useCurrentStandings } from "hooks/useCurrentStandings";

export default function Standings() {
  const { data: standings } = useCurrentStandings("driverStandings");
  return (
    <div>
      {(standings?.StandingsTable.StandingsLists ?? []).map((standing) => {
        return standing.DriverStandings.map(({ Driver, points, position }) => {
          return <StandingCard driver={Driver} points={points} />;
        });
      })}
    </div>
  );
}
