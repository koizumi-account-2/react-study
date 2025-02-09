import { useState } from "react"

type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}

type TStatus = {
    status:|"loading"|"succeeded"|"failed",
    message:string
}

export const Article = () => {
    const [articleState,setArticle] = useState<TArticle | null>(null);
    // 画面の状態管理 初期状態はsucceeded
    const [status,setStatus] = useState<TStatus>({status:"succeeded",message:""});
    const articleIdList:number[] = [0,1,2,3,4,5]
    
    const getArticle = async(postId:string):Promise<TArticle|null>=>{
        if(postId === '0') return null
        try{
            // ローディング状態にする
            setStatus({status:"loading",message:""});
            const response = await fetch(`https://jsonplaceholder.typicode.com/postse/${postId}`)
            // データの取得に失敗
            if(!response.ok){
                throw new Error(`記事の取得に失敗! status:${response.status}`)
            }
            const article:TArticle = await response.json();
            // succeeded状態にする
            setStatus({status:"succeeded",message:""});

            return article;
        }catch(error){
            // fetch失敗
            console.error("ERROR!",error,typeof(error))
            let message: string;
            if (typeof error === "string") {
                message = error; // 文字列のエラー
            } else if (error instanceof Error) {
                message = error.message; // Errorオブジェクトの場合
            } else {
                message = "不明なエラーが発生しました"; // その他の型の場合
            }
            // failes状態にする
            setStatus({status:"failed",message});
            return null;
        }
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
            {status.status === "loading" && <div>...loading</div>}
            {status.status === "failed" && <div>FAILED : {status.message}</div>}
            {
                status.status === "succeeded" && articleState && 
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