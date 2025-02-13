import createResource from "./createResource";

type TArticle =  {
    userId:number,
    id:number,
    title:string,
    body:string
}

export const SuspenseDemo = () => {
    const getData = async():Promise<TArticle>=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        const data = await response.json();
        return data;
    }
    const resource = createResource<TArticle>(getData());
    const data = resource.read();
    return (
        <>
            <div>
                <p>エリアA</p>
            </div>
            <div>
                <p>エリアB</p>
                <div>{data.body}</div>
            </div>
            <div>
                <p>エリアC</p>
            </div>
        </>
    )
}
