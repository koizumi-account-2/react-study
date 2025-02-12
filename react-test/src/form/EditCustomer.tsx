import { useState, useEffect } from "react";
import { TCustomer } from "./types";
import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

type TEditCustomer = {
  setCustomers: React.Dispatch<React.SetStateAction<TCustomer[]>>;
  customer: TCustomer | null; // 新規登録時はnull
};

const defaultCustomer: TCustomer = {
  id: "",
  email: "",
  password: "",
};

export const EditCustomer = ({ customer, setCustomers }: TEditCustomer) => {
  const [editingCustomer, setEditingCustomer] = useState<TCustomer>(defaultCustomer);

  // customerの変化を監視してeditingCustomerを更新する
  useEffect(() => {
    if (customer) {
      setEditingCustomer(customer);
    } else {
      setEditingCustomer(defaultCustomer);
    }
  }, [customer]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const updateHandler = async () => {
    try {
      const response: AxiosResponse<TCustomer> = await axiosInstance.put(`/customers/${editingCustomer.id}`, editingCustomer);
      const updatedCustomer = response.data;
      setCustomers((prev) => prev.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c)));
      alert(`${updatedCustomer.email}を更新しました`);
    } catch (error) {
      console.error(error);
      alert("商品の更新に失敗しました。");
    }
  };

  const addHandler = async () => {
    try {
      const data = { email: editingCustomer.email, password: editingCustomer.password };
      const response: AxiosResponse<TCustomer> = await axiosInstance.post("/customers", data);
      const addedCustomer = response.data;
      console.log(addedCustomer)
      setCustomers((prev) => [...prev, addedCustomer]);
      alert(`${addedCustomer.email}を追加しました`);
      setEditingCustomer(defaultCustomer)
    } catch (error) {
      console.error(error);
      alert("商品の追加に失敗しました。");
    }
  };

  const submitHandler = () => {
    if (customer) {
      updateHandler();
    } else {
      addHandler();
    }
  };

  return (
    <>

      <h3 style={{color:customer?"blue":"red"}}>{customer?"更新モード":"登録モード"}</h3>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={editingCustomer.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={editingCustomer.password}
          onChange={changeHandler}
        />
      </div>
      <button onClick={submitHandler}>{customer ? "修正" : "新規登録"}</button>
    </>
  );
};