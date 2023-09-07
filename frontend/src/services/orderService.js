import axios from "axios";

export const createOrder=async order=>{
    try{
        console.log(order);
        const {data}=axios.post('/api/orders/create', order);
        return data;
    }catch(error){
        console.error('AxiosError:', error);
    console.error('Response Data:', error.response.data);
 
    }
};

export const getNewOrderForCurrentUser=async()=>{
    const {data}=await axios.get('/api/orders/newOrderForCurrentUser');
    return data;
}

export const pay= async paymentId=>{
    try{
        const {data}=await axios.put('/api/orders/pay',{paymentId});
        return data;
    }catch(error){}
}