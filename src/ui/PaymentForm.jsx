import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";

export default function CheckoutForm({ dpmCheckerLink }) {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("default");
    const [intentId, setIntentId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/search/exclusive-leads/Ohio/670cd6b511c1faafb853bd73',
                receipt_email: user?.email,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error) {
            // Handle the error (e.g., show error message)
            Swal.fire({
                title: "Payment Failed!",
                text: error.message,
                icon: "error",
                confirmButtonText: "Try Again",
            });
        } else {
            // Show success message
            Swal.fire({
                title: "Payment Successful!",
                text: "Your payment has been processed successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        }
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
        // if (!error) {

        // }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            if (!paymentIntent) {
                return;
            }

            setStatus(paymentIntent.status);
            setIntentId(paymentIntent.id);
        });
    }, [stripe]);

    console.log(status, intentId);


    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <p className="my-2 text-[8px] text-gray-400">You are going to receive your invoice <span className="poppins font-semibold">{user?.email}</span></p>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button className="rounded-lg btn bg-primary text-white my-3" disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
            <div id="dpm-annotation">
                <p>
                    Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
                    <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker">Preview payment methods by transaction</a>
                </p>
            </div>
        </>
    );
}