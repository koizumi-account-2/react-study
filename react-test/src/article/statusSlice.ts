import { createSlice } from "@reduxjs/toolkit";
import { getArticle } from "./articleSlice";

export type TDisplayStatus = {
    status:|"loading"|"succeeded"|"failed",
    message:string
}

const initialState: TDisplayStatus = {
    status:"succeeded",
    message:""
};

export const getDisplayStatus = createSlice({
    name:"status/getDisplayStatus",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder
            // ローデイング中の処理
            .addCase(getArticle.pending, (state) => {
                state.status = "loading";
                state.message = "";
            })
            // fetch成功時の処理
            .addCase(getArticle.fulfilled, (state) => {
                state.status = "succeeded";
                state.message = "";
            })
            // fetch失敗時の処理
            .addCase(getArticle.rejected, (state, action) => {
                state.status = "failed";
                state.message = action.error.message || "不明なエラー";
            });
    }
}) 

export default getDisplayStatus.reducer