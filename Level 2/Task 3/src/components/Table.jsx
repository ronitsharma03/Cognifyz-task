import { Searchbar } from "./Searchbar"
import { tableData } from "../assets/data"

export const Table = (
    {
        orderId,
        TxnStatus,
        txnId,
        refundDate,
        orderAmt
    }
) => {
    return (
        <div className="grid grid-col-4 gap-6">
            <div className="flex flex-col gap-6 bg-snow-500 pb-10 pl-11 pt-8">
                <div>
                    <p className="text-xl font-medium">Transactions | This Month</p>
                </div>
                <div className="flex gap-3 text-sm">
                    <span className="bg-black-200 rounded-2xl text-black-300 py-1.5 px-4">Payouts (22)</span>
                    <span className="bg-blue-700 rounded-2xl text-white py-1.5 px-4">Refunds (6)</span>
                </div>
            </div>
            <div className="bg-white-500 px-3 pb-2 rounded-lg grid gap-4 pl-11">
                <div className="flex justify-between items-center">
                    <div className="w-96 h-10 rounded flex items-center border border-black-150">
                        <Searchbar />
                    </div>
                    <div className="flex gap-4">
                        <div className="grid grid-flow-col items-center gap-2 h-9 pl-3.5 pr-3.5 rounded border border-black-150">
                            <p>Sort</p>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z" fill="#4D4D4D"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z" fill="#4D4D4D"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z" fill="#4D4D4D"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z" fill="#4D4D4D"></path>
                            </svg>
                        </div>
                        <div className="grid grid-flow-col items-center gap-2 h-9 pl-3.5 pr-3.5 rounded border border-black-150">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-[95%] text-left rtl:text-right text-gray-500">
                        <thead className="text-xm font-medium rounded uppercase text-black-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">order ID</th>
                                <th scope="col" className="px-6 py-3 font-medium">Status</th>
                                <th scope="col" className="px-6 py-3 font-medium">Transaction ID</th>
                                <th scope="col" className="px-6 py-3 font-medium">Refund date</th>
                                <th scope="col" className="px-6 py-3 text-right font-medium">Order amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((item, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">{item.orderId}</th>
                                            <td className="px-6 py-4 flex items-center gap-2 text-zinc-700">
                                                {
                                                    item.TxnStatus == "successfull" ? <div className="h-2.5 w-2.5 rounded-full bg-green-500">
                                                    </div> : item.TxnStatus == "pending" ? <div className="h-2.5 w-2.5 rounded-full bg-yellow-500">
                                                    </div> : <div className="h-2.5 w-2.5 rounded-full bg-red-500">
                                                    </div>
                                                }
                                                {item.TxnStatus}
                                            </td>
                                            <td className="px-6 py-4 text-black-400">{item.txnId}</td>
                                            <td className="px-6 py-4 text-black-400">{item.refundDate}</td>
                                            <td className="px-6 py-4 text-right text-zinc-700">{item.orderAmt}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}