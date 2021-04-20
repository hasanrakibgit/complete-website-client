import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimplePaymentForm from './SimplePaymentForm';
const stripePromise = loadStripe('pk_test_51IeKA6DHTKlhRYqMYPmQ8mWKTwwop25f1rBgnouA1wQJE8U6yTN55noXMuPhe5M5S57j7fZ1NZVwOQ1mFFRgKmEd007lz4a4lO');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            
            <SimplePaymentForm></SimplePaymentForm>
        </Elements>
    );
};

export default ProcessPayment;