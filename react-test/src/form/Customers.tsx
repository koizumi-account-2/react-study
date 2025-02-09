import { useEffect, useState } from "react"
import { TCustomer } from "./types";

const END_POINT = "http://localhost:4040/customers";

const defaultCustomer:TCustomer = {
    id:"",
    email:"",
    password:""
}

export const Customers = () => {
    const [customers,setCustomers] = useState<TCustomer[]>([]);
    const [editingCustomer,setEditingCustomer] = useState<TCustomer>(defaultCustomer);
    const isEditing = editingCustomer.id !== "";
    useEffect(()=>{
        const fetchCustomers = async()=>{
            const response = await fetch(END_POINT)
            const data:TCustomer[] = await response.json()
            setCustomers(data);
        }
        fetchCustomers();
    },[])

    // 詳細ボタンクリックイベント
    const clickHandler=(id:string)=>{
        return ()=>{
            const target = customers.find(x => x.id === id)!;
            setEditingCustomer({...target});
        }; 
    }

    // テキストボックス入力時のイベント
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;
        setEditingCustomer(prev => ({...prev,[name]:value}))
    }

    // 更新処理の呼び出し
    const updateHandler = ()=>{
        const updateCustomers = async(updateCustomer:TCustomer)=>{
            try{
                const response = await fetch(`${END_POINT}/${updateCustomer.id}`,{
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateCustomer),
                })
                if (!response.ok) {
                    throw new Error("Failed to update product");
                }
                const updatedCustomer:TCustomer = await response.json();
                setCustomers(prev => prev.map(customer => customer.id === updatedCustomer.id?updateCustomer:customer));
                alert(`${updatedCustomer.email}を更新しました`);
                setEditingCustomer(updatedCustomer);
            }catch(error){
                console.error(error);
                alert("商品の更新に失敗しました。");
            }
        }   
        updateCustomers(editingCustomer);
    }

    // 追加処理の呼び出し
    const addHandler = ()=>{
        const addCustomer = async(addCust:TCustomer)=>{
            try{
                const response = await fetch(END_POINT,{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email:addCust.email,password:addCust.password}),
                })
                if (!response.ok) {
                    throw new Error("Failed to add product");
                }
                const addedCustomer:TCustomer = await response.json();
                console.log(addedCustomer)
                setCustomers(prev => [...prev,addedCustomer]);
                alert(`${addedCustomer.email}を追加しました`);
                setEditingCustomer(defaultCustomer);
            }catch(error){
                console.error(error);
                alert("商品の追加に失敗しました。");
            }
        }
        addCustomer(editingCustomer);
    }
    return (
        <>
            <ul>
                {
                    customers.map(customer => <li key={customer.id}>{customer.email}<button onClick={clickHandler(customer.id)}>詳細</button></li>)
                }
            </ul>
            <>
                {isEditing && <h3>{editingCustomer.id}</h3>}
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" value={editingCustomer.email} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">pass</label>
                    <input type="text" name="password" id="password" value={editingCustomer.password} onChange={changeHandler}/>
                </div>
                {isEditing && <button onClick={updateHandler}>修正</button>}
                <button onClick={addHandler}>新規登録</button>
            </>
        </>
    )
}
