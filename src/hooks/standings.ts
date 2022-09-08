import { DriverResponse } from "hooks/useGetDriversByYear";

export type StandingType = "driverStandings" | "constructorStandings";

export type SupportedYears =
  | "2013"
  | "2014"
  | "2015"
  | "2016"
  | "2017"
  | "2018"
  | "2019"
  | "2020"
  | "2021"
  | "2022";

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface DrivingStanding {
  Constructors: Constructor[];
  Driver: DriverResponse;
  points: string;
  position: string;
  positionText: string;
  wins: string;
}

export interface DriverStandings {
  DriverStandings: DrivingStanding[];
  round: string;
  season: string;
}
