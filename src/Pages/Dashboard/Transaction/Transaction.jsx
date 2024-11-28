import React from 'react'
import TransactionStatus from '../../../Components/Transaction/TransactionStatus'
import AllTransaction from '../../../Components/Transaction/AllTransaction'

function Transaction() {
  return (
    <div className="p-[32px]">
      {/* <TransactionStatus /> */}
      <AllTransaction />
    </div>
  )
}

export default Transaction