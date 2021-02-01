import { configureStore } from "@reduxjs/toolkit";
import { pinnedReducer, snoopsReducer } from "./reducers";

export enum Domain {
  Finances = "finances",
  Shopping = "shopping",
  MoneyInsight = "moneyInsight",
  Entertainment = "entertainment",
}

export enum DisplayType {
  HeroRight = "heroRight",
  HeroLeft = "heroLeft",
  Standard = "standard",
}

export type Snoop = {
  id: number;
  domain: Domain;
  header: string;
  body: string;
  displayType: DisplayType;
};

export type Snoops = Snoop[];

export type RootState = {
  snoops: Snoops;
  pinnedSnoops: number[];
};

export const store = configureStore<RootState>({
  reducer: {
    snoops: snoopsReducer,
    pinnedSnoops: pinnedReducer,
  },
});

export default store;
