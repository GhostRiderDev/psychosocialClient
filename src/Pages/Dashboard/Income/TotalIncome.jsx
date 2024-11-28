import React from 'react'
import Status from '../../../Components/Shared/Status'
import TransactionsLayout from '../../../Components/Income/TransactionsLayout'

function TotalIncome() {
  return (
    <div className="p-[32px]">
      <Status />
      <TransactionsLayout/>
    </div>
  )
}

export default TotalIncome