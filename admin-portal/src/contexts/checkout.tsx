import React, { createContext, useContext, ReactNode, useState } from 'react';

interface CheckoutContextType {
  billing_address: any;
  shipping_address: any;
  contact: any;
  customer: any;
  payment_gateway: any;
  coupon: any;
  delivery_time: any;
  setBillingAddress: (address: any) => void;
  setShippingAddress: (address: any) => void;
  setContact: (contact: any) => void;
  setCustomer: (customer: any) => void;
  setPaymentGateway: (gateway: any) => void;
  setCoupon: (coupon: any) => void;
  setDeliveryTime: (time: any) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const useCheckout = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};

interface CheckoutProviderProps {
  children: ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({ children }) => {
  const [billing_address, setBillingAddress] = useState(null);
  const [shipping_address, setShippingAddress] = useState(null);
  const [contact, setContact] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [payment_gateway, setPaymentGateway] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [delivery_time, setDeliveryTime] = useState(null);

  const value = {
    billing_address,
    shipping_address,
    contact,
    customer,
    payment_gateway,
    coupon,
    delivery_time,
    setBillingAddress,
    setShippingAddress,
    setContact,
    setCustomer,
    setPaymentGateway,
    setCoupon,
    setDeliveryTime,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}; 