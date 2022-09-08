import styled from "@emotion/styled";

export type SupportedFlags = "Dutch";

const Container = styled.div`
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const codeLookup = {
  Dutch: "nl",
  Mexican: "mx",
  Monegasque: "mc",
  British: "gb",
  Spanish: "es",
  French: "fr",
  Finnish: "fi",
  Danish: "dk",
  German: "de",
  Australian: "au",
  Japanese: "jp",
  Chinese: "cn",
  Canadian: "ca",
  Thai: "th",
};

export type FlagProps = {
  type: SupportedFlags;
};

export default function Flag({ type }: FlagProps) {
  const code = codeLookup[type];
  return <Container className={`fi fi-${code}`}></Container>;
}
