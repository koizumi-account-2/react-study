import { useState } from "react"

type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}


export const Article = () => {
    const [articleState,setArticle] = useState<TArticle | null>(null);
    const articleIdList:number[] = [0,1,2,3,4,5]
    
    const getArticle = async(postId:string):Promise<TArticle|null>=>{
        if(postId === '0') return null
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const article:TArticle = await response.json();
        return article;
    }
    const changeHandler = async (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const article = await getArticle(e.target.value);
        console.log(article);
        setArticle(article)
    }   
    return (
        <div>
            <select onChange={changeHandler}>
                {articleIdList.map(id => <option key={id} value={id}>{id>0?id:"未選択"}</option>)}
            </select>

            {
                articleState && 
                <div>
                    <span>{articleState.title}</span>
                    <div>{articleState.body}</div>
                </div>
            }
        </div>
    )
}


    // const [articleState,setArticle] = useState<TArticle | null>(null);
    // const articleIdList:number[] = [0,1,2,3,4,5]
    
    // const getArticle = async(postId:string):Promise<TArticle|null>=>{
    //     if(postId === '0') return null
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //     const article:TArticle = await response.json();
    //     return article;
    // }
    // const changeHandler = async (e:React.ChangeEvent<HTMLSelectElement>)=>{
    //     const article = await getArticle(e.target.value);
    //     console.log(article);
    //     setArticle(article)
    // }   
    // return (
    //     <div>
    //         <select onChange={changeHandler}>
    //             {articleIdList.map(id => <option key={id} value={id}>{id>0?id:"未選択"}</option>)}
    //         </select>

    //         {
    //             articleState && 
    //             <div>
    //                 <span>{articleState.title}</span>
    //                 <div>{articleState.body}</div>
    //             </div>
    //         }
    //     </div>
    // )