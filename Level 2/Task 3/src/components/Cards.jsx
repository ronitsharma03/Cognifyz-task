import { RevenueCard } from "./RevenueCard"
import { DATA } from "../assets/data";
import { Title } from "../components/Title"

export const Cards = () => {
    return (
        <div className="grid grid-cols-1 col-span-1 gap-y-7 bg-snow-500">
            <div className="px-7">
                <Title />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-11 pr-6">
                {
                    DATA.map((item, index) => {
                        return (
                            <div>
                                <RevenueCard key={index} title={item.title} orderCount={item.orders} amount={item.amount} nextDate={item.nextDate} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}