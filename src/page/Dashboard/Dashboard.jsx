import ProgressCard from "../../components/dashboard/progress/ProgressCard";
import PaiChartCompo from "../../components/Dashboard/Charts/PaiChart";
import LineChartCompo from "../../components/dashboard/charts/LineChart";
import AllProduct from "../Product/AllProduct";

export default function DashBoard() {

    return (
        <>
            <div className='h-full bg-bgColor w-full flex flex-col gap-10 p-5 md:p-10'>
                <h1 className='text-3xl font-bold text-textColor '>Dashboard</h1>
                <ProgressCard />
                <div className="block md:flex gap-4">
                    <PaiChartCompo />
                    <LineChartCompo />
                </div>
                <div>
                    <AllProduct title="Recent Purchases" width="w-full"/>
                </div>
            </div>
        </>
    );
}
