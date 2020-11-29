import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HsrIhCFmfCB7q6cloEP8HB0ZmIY4RHBLGZoJ0OpgtHOrnX3cAeXII2TzyvlTCCKnDIWCBroetOHkLBHMiO7yfC000xqA1xbXV'

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CROWN CLOTHING LTD'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel= 'Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
