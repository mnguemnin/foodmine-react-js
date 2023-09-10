import React, { useEffect } from 'react';
import  { PayPalButtons, PayPalScriptProvider,usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { pay } from '../../services/orderService';
import {useLoading} from '../hooks/useLoading'
import { useCart } from '../hooks/useCart';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

export default function PaypalButtons({order}) {
  return (
    <PayPalScriptProvider
    options={{
        clientId: 'AfysfW4ACuz9Ojr4MKey1jlcc4RTPIHbiircu0vXX9qZzDFL_uDnjuVwvp1MUr3XvVTtYP_8AmgCyDu_'
    }}>
        <Buttons order={order}/>
    </PayPalScriptProvider>
  )
}

function Buttons({order}){
    const {clearCart}=useCart();
    const navigate=useNavigate();
    const [{isPending}]=usePayPalScriptReducer();
    const {showLoading, hideLoading}=useLoading();
    useEffect(()=>{
        isPending? showLoading():hideLoading();
    });

    const createOrder=(data, action)=>{
        return action.order.create({
            purchase_units:[
                {
                    amount:{
                        currency_code:'USD',
                        value: order.totalPrice,
                    },
                },
            ]
        })
    }

    const onApprove= async(data, actions)=>{
        try{
            const payment= await actions.order.capture();
            const orderId= await pay(payment.id);
            clearCart();
            toast.success('Payment Saved Successfully','Success');
            navigate('/track/'+orderId);
        }catch(error){
            toast.error('Payment Save Failed', 'Error');
        }
    };

    const onError=err=>{
        toast.error('Payment Failed', 'Error');
    };

    return (
        <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            />
    );
}