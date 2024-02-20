import { RevenueCard } from './components/RevenueCard'
import { useState } from 'react';
import './App.css'

function App() {

  const cellcomp = [
    {
      OrderID : '#281209',
      Status : 'Successfull',
      TransactionID : 'TRX123456',
      RefundDate : 'Today, 8:45 PM',
      OrderAount : '₹1125.00'
    },{
        OrderID : '#281210',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    },{
        OrderID : '#281211',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    },{
        OrderID : '#281212',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    },{
        OrderID : '#281213',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    },{
        OrderID : '#281214',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    },{
        OrderID : '#281215',
        Status : 'Successfull',
        TransactionID : 'TRX123456',
        RefundDate : 'Today, 8:45 PM',
        OrderAount : '₹1125.00'
    }
  ]

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='px-[10px] py-[10px]'>
      <header className='flex justify-between items-center gap-10'>
        <div className='flex gap-4 items-center'>
          <button  onClick={toggleDropdown} className='hidden md:block md:text-2xl font-bold'>[=]</button>
          <div className='text-[#1A181E] font-medium text-3xl'>Payouts</div>
          <div className='hidden text-[#4D4D4D] sm:block'>How it works?</div>

          {isDropdownVisible && (
        <div className='dropdown-box'>
          {/* Content of your dropdown box goes here */}
          <p>Dropdown Content</p>
        </div>
      )}

        </div>


        <input type='text' placeholder='Search features, tutorials, etc' className='bg-[#F2F2F2]  text-[#808080] rounded px-4 py-1.5 outline-none w-full max-w-[100px] md:max-w-[500px]'></input>
        <div className='flex gap-5 items-center flex-end'>
          <button className='text-[#050404] text-lg rounded bg-emerald-300 w-20'>Text</button>
          <button className='rounded w-10 bg-cyan-700'>\/</button>
        </div>
      </header>

      <br/>

      <div className='flex justify-between items-center'>
        <div className='font-medium text-xl text-black'>Overview</div>
        <button className='flex items-center gap-3 border rounded bg-white text-[#4D4DAD] px-[14px] py-[6px] '>This Month \/</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <RevenueCard className="bg-[#146EB4]" title={"Next Payout"} amount={"2,312.23"} orderCount={23} />
        <RevenueCard className="flex flex-between" title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
        <RevenueCard className="flex flex-between" title={"Amount Processed"} amount={"92,312.20"} />
      </div>

      <br/>

      <section className='flex flex-col gap-5'>
        <h4 className='font-medium text-[#1A181E] text-xl gap-6 '>Transactions | Month </h4>
      </section>

      <br/>

      <div className='flex gap-3'>
        <button className='px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full '>Payouts</button>
        <button className='px-4 py-[6px] bg-[#146EB4] text-[#ffffff] rounded-full '>Refunds</button>
      </div>

      <br/>

      <div className='flex items-center justify-between gap-3'>
        <input placeholder='Order ID or transaction ID' type='text' className='bg-transparent outline-none px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[600px]' ></input>
        <div className='flex justify-between gap-10'>
          <button>Sort</button>
          <button>Save</button>
        </div>
      </div>

      <br/>

      <div className='overflow-x-auto'>

        <table className='min-w-full'>

          <colgroup>
            <col className='w-1/5'/>
            <col className='w-1/5'/>
            <col className='w-1/5'/>
            <col className='w-1/5'/>
            <col className='w-1/5'/>
          </colgroup>

          <thead className='text-[#4D4D4D] '>
            <tr className='bg-[#F2F2F2]'>
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund Date</th>
              <th>Order Amount</th>
            </tr>
          </thead>

          <tbody className='bg-white divide-[#776060]'>
            {cellcomp.map(cell => (
              <tr key={cell.OrderID} className='text-sm relative text-center border border-slate-grey'> 
                <td className='px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium'>{cell.OrderID}</td>
                <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D'>{cell.Status}</td>
                <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D'>{cell.TransactionID}</td>
                <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D'>{cell.RefundDate}</td>
                <td className='px-3 py-[10px] whitespace-nowrap text-[#4D4D4D'>{cell.OrderAount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default App
