import { EPostTabList } from "@/types/general.types";

export const postTabList: {
  label: string;
  value: EPostTabList;
}[] = [
  {
    label: "Popular",
    value: EPostTabList.POPULAR,
  },
  {
    label: "Recent",
    value: EPostTabList.RECENT,
  },
  {
    label: "Trending",
    value: EPostTabList.TRENDING,
  },
];
