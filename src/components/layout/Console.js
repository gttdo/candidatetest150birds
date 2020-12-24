import React from 'react';
import { Route } from 'react-router-dom';
import BillingPayment from '../layout/BillingPayment';
import Transactions from '../layout/Transactions';
import Invoice from '../layout/Invoice';
import useToggle from '../../hooks/useToggle';


const Console = () => {
    const [toggle, toggleHandler] = useToggle(false)

    return (
            <div>
                <Route path="/settings/billingmethod" component={BillingPayment} />
                <Route exact path="/settings/transaction" render={() => (
                    <>
                        <Transactions toggle={toggle} toggleHandler={toggleHandler}/>
                        <Invoice toggle={toggle}/>
                    </>
                )}/>
            </div>
    )
}

export default Console
