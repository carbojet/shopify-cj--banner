import gql from 'graphql-tag';
import { useQuery,useMutation } from '@apollo/react-hooks';

const REMOVE_LINEITEM = gql`mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
  checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
    checkout {
      id
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`;

const ADD_LINEITEM = gql`mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
  checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
    checkout {
      id
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`;

export default function updateCart(removeItem,addItem,cartId){
    const {removeloading, removeerror, removedata} = useMutation(REMOVE_LINEITEM, {
        variables:  {
            checkoutId:cartId,
            lineItemIds:[removeItem.id]
        }
    });
    console.log("remove Item response",removedata)
    console.log("remove Item error",removeerror)
    const {addloading, adderror, adddata} = useMutation(ADD_LINEITEM, {
        variables:  {
            lineItems: [
                {
                    quantity: 1,
                    variantId: addItem.id
                }
            ],
            checkoutId: cartId
        }
    });
    console.log("add Item response",adddata)
    console.log("add Item error",adderror)
}