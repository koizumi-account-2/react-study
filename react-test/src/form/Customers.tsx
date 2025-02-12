import { useEffect, useState } from "react"
import { TCustomer } from "./types";
import  { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance"
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import useCustomers from "./hooks/useCustomers";


const defaultCustomer:TCustomer = {
    id:"",
    email:"",
    password:""
}

export const Customers = () => {
    const {useSuspenseGetAll} = useCustomers();
    const [editingCustomer,setEditingCustomer] = useState<TCustomer>(defaultCustomer);
    const isEditing = editingCustomer.id !== "";
    const {data} = useSuspenseGetAll();
    // useEffect(()=>{
    //     const fetchCustomers = async()=>{
            
    //         const result = await getAllCustomers();
    //         setCustomers(result);
    //     }
    //     fetchCustomers();
    // },[getAllCustomers])

    // 詳細ボタンクリックイベント
    const clickHandler=(id:string)=>{
        return ()=>{
            const target = data.find(x => x.id === id)!;
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
                const response:AxiosResponse<TCustomer> = await axiosInstance.put(`/customers/${updateCustomer.id}`,{data:updateCustomer})
                const updatedCustomer:TCustomer = response.data;
                // setCustomers(prev => prev.map(customer => customer.id === updatedCustomer.id?updateCustomer:customer));
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
                const data = {email:addCust.email,password:addCust.password};
                const response:AxiosResponse<TCustomer> =await axiosInstance.post('/customers',data)
                const addedCustomer:TCustomer = response.data
                console.log(addedCustomer)
                // setCustomers(prev => [...prev,addedCustomer]);
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
                    data.map(customer => <li key={customer.id}>{customer.email}<button onClick={clickHandler(customer.id)}>詳細</button></li>)
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
