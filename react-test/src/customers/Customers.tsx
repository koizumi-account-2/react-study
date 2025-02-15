import { useQuery } from "@tanstack/react-query"
import { getAllCustomers } from "./api"

export const Customers = () => {
    const {data,isPending} = useQuery({
        queryKey:["customers"],
        queryFn:getAllCustomers,
        staleTime: 5000,
        gcTime:1000
    })

    if(isPending) return <>...Loading</>
    return (
        <>
            {
                data?.map(customer => {
                    return (
                        <div key={customer.id}>
                            <p>{customer.email}</p>
                            <p>{customer.password}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
