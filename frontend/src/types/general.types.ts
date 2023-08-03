export type LoadingState = "fetching" | "successfully" | "error";
export type RenderLoadingStateValue = Record<LoadingState, React.ReactNode>;
