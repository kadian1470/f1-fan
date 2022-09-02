import { useQuery } from "@tanstack/react-query";
import { egrastJsonType, MRData } from "../utils/ClientHelper";
import { queryClient } from "../utils/QueryClient";

const key = "get-all-drivers";

export type DriversResponse = {
  DriverTable: {
    Drivers: DriverResponse[];
    season: number;
  };
};

export type DriverResponse = {
  driverId: string;
  permanentNumber: number;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export const useGetDriversByYear = (year: number) => {
  if (year < 2014) {
    throw new Error("Year must be greater than 2013");
  }
  return useQuery<MRData<DriversResponse>>([key, year], async () => {
    const response = await fetch(egrastJsonType(`${year}/drivers`));
    if (response.status !== 200) {
      throw new Error(`Drivers failed to load for: ${year}`);
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse.MRData);
    return jsonResponse.MRData;
  });
};

export const refetchGetAllDriverByYear = (year?: number) =>
  queryClient.invalidateQueries([key, year]);
