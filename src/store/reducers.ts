import { createReducer } from '@reduxjs/toolkit'
import { Snoops } from './store'
import { requestSnoopsSuccess, pinSnoop } from './actions';
import { AnyAction } from "redux";

export const snoopsReducer = createReducer([] as Snoops, (builder) => {
    builder
        .addCase(requestSnoopsSuccess, (state: Snoops, action: AnyAction) => {
            return [...state, ...action.payload]
        })
});

export const pinnedReducer = createReducer([] as number[], (builder) => {
    builder
        .addCase(pinSnoop, (state: number[], action: AnyAction) => {
            return [...state, action.payload]
        })  
})