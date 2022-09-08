import { useQuery } from "@tanstack/react-query";
import { DriverStandings, StandingType, SupportedYears } from "hooks/standings";
import { egrastJsonType, MRData } from "../utils/ClientHelper";
import { queryClient } from "../utils/QueryClient";

const key = "get-all-drivers";

export interface StandingLists {
  StandingsLists: DriverStandings[];
  season: SupportedYears;
}

export interface StandingTable {
  StandingsTable: StandingLists;
  limit: string;
  offset: string;
  series: "f1";
}

export const useCurrentStandings = (type: StandingType) => {
  return useQuery<MRData<StandingTable>>([key], async () => {
    const response = await fetch(egrastJsonType(`current/${type}`));
    if (response.status !== 200) {
      throw new Error(`Current ${type} failed to load`);
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse.MRData);
    return jsonResponse.MRData;
  });
};

export const refetchGetAllDriverByYear = (year?: number) =>
  queryClient.invalidateQueries([key, year]);
