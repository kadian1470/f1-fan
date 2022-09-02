import { useGetDriversByYear } from "../hooks/useGetDriversByYear";

export default function Drivers() {
  const { data } = useGetDriversByYear(2022);
  return (
    <div>
      {data?.DriverTable.Drivers.map((item) => (
        <div key={item.driverId}>
          {item.givenName} {item.familyName}
        </div>
      ))}
    </div>
  );
}
