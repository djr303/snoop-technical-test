import { Snoops } from "./store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { createAction } from '@reduxjs/toolkit';

export const REQUEST_SNOOPS = "REQUEST_SNOOPS";
export const REQUEST_SNOOPS_SUCCESS = "REQUEST_SNOOPS_SUCCESS";
export const PIN_SNOOP = "PIN_SNOOP";

export const requestSnoops = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const response = await fetch("/api/mock/snoops.json");
    const snoops = await response.json();
    dispatch(requestSnoopsSuccess(snoops));
  };
};

export const requestSnoopsSuccess = createAction<Snoops>(REQUEST_SNOOPS_SUCCESS)
export const pinSnoop = createAction<number>(PIN_SNOOP)