import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}

export type TArticleState = {
    article: TArticle | null,
    status:|"loading"|"succeeded"|"failed",
    message:string
}

const initialState: TArticleState = {
    article:null,
    status:"succeeded",
    message:""
};

export const getArticle=createAsyncThunk(
    "article/getArticle",   // 一意なキー
    async (postId:string)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!response.ok){
            throw new Error(`記事の取得に失敗! status:${response.status}`);
        }
        return response.json();
    }
)


const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
            builder
            // ローデイング中の処理
            .addCase(getArticle.pending, (state) => {
                state.status = "loading";
                state.message = "";
            })
            // fetch成功時の処理
            .addCase(getArticle.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = "";
                state.article = action.payload;
            })
            // fetch失敗時の処理
            .addCase(getArticle.rejected, (state, action) => {
                state.status = "failed";
                state.article = null;
                state.message = action.error.message || "不明なエラー";
            });
    }
});

export default articleSlice.reducer;

// ,
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     }