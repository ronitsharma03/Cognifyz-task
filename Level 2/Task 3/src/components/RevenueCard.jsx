

export const RevenueCard = ({
    title,
    orderCount,
    amount,
    nextDate
}) => {

    return (
            <div className="bg-white shadow-md border rounded-lg overflow-hidden">
                {
                    nextDate ? <div className="p-4 bg-steelblue-500 text-white py-10">
                    <div className="text-white text-sm flex justify-start ">
                        {title}
                        <div className="ml-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="text-3xl font-semibold">
                            ₹  {amount}
                        </div>
                        {
                            orderCount === "" ? null : <div className="text-base inline-flex items-center underline text-white tracking-wide cursor-pointer">
                            {orderCount}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </div>
                        </div>
                        }
                    </div>
                    
                </div> : <div className="p-4 bg-white-500 text-black py-10">
                    <div className="text-black text-sm flex justify-start ">
                        {title}
                        <div className="ml-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="text-3xl font-semibold">
                            ₹  {amount}
                        </div>
                        {
                            orderCount === "" ? null : <div className="text-base inline-flex items-center underline text-steelblue-500 tracking-wide cursor-pointer">
                            {orderCount}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </div>
                        </div>
                        }
                    </div>
                    
                </div>
                }
                <div>
                        {
                            nextDate ? <div class="text-sm bg-teal-700 text-white flex justify-between py-2 px-6">
                                <div>Next payout date:</div>
                                <div>Today, 04:00 PM</div>
                            </div> : null
                        }
                    </div>
            </div>
    )
}