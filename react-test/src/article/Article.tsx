import { useEffect, useState } from "react"

type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}


export const Article = () => {
    const [articles,setArticles] = useState<TArticle[]>([]);
    useEffect(()=>{
        const getArticles = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const articles:TArticle[] = await response.json();
            setArticles(articles);
        }
        getArticles();
    },[])
    return (
        <>
            {
                articles.map(article =>             
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <div>{article.body}</div>
                        <hr/>
                    </div>
                )

            }

        </>
    )
}


