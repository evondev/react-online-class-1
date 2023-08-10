export type LoadingState = "fetching" | "successfully" | "error";
export type RenderLoadingStateValue = Record<LoadingState, React.ReactNode>;
export enum EPostTabList {
  POPULAR = "POPULAR",
  RECENT = "RECENT",
  TRENDING = "TRENDING",
}
export type TTabList =
  | string[]
  | {
      label: string;
      value: string;
    }[]
  | number[];
type Example = "Trending" | "Recent";

const a: Example[] = ["Trending", "Recent"];
