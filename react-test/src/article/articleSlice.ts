import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}

export type TArticleState = {
    article: TArticle | null
}

const initialState: TArticleState = {
    article:null
};

export const getArticle=createAsyncThunk(
    "article/getArticle",   // 一意なキー
    async (postId:string,{dispatch})=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if(!response.ok){
                throw new Error(`記事の取得に失敗! status:${response.status}`);
            }
            const article = await response.json();
            dispatch(setArticle(article)); 
        }catch(error){
            dispatch(clearArticle())
            throw error;
        }
    }
)


export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticle:(state, action: PayloadAction<TArticle>)=>{
            state.article = action.payload
        },
        clearArticle:(state)=>{
            state.article = null;
        }
    }
});

export default articleSlice.reducer;
export const {setArticle,clearArticle} = articleSlice.actions