import { getArticle } from "./articleSlice"
import { useDispatch, useSelector } from "react-redux"
import { TRootState,TAppDispatch } from "./store"

export const ArticleWithRedux = () => {
    const articleIdList:number[] = [0,1,2,3,4,5]
    const article = useSelector((state: TRootState) => state.article.article);
    const dispatch = useDispatch<TAppDispatch>()
    const changeHandler = async (e:React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(getArticle(e.target.value))
    }   
    
    return (
        <div>
            <select onChange={changeHandler}>
                {articleIdList.map(id => <option key={id} value={id}>{id>0?id:"未選択"}</option>)}
            </select>
            {
                article && 
                <div>
                    <span>{article.title}</span>
                    <div>{article.body}</div>
                </div>
            }
        </div>
    )
}