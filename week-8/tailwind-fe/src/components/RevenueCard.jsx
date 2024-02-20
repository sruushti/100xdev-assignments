
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="rounded shadow-md p-10" >
        <div className="text-grey-700">
            {title}
        </div>
        <div className="flex justify-between font-semibold">
            <div>
                ₹{amount}
            </div>
            {orderCount ? <div className=" text-blue-700 underline">{orderCount} Orders{">"}</div> : null}
        </div>
    </div>
}