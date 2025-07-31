import BarChartCompo from "../../components/Dashboard/Charts/BarChart";
import LineChartCompo from "../../components/Dashboard/Charts/LineChart";
import { PaiChartCompo } from "../../components/Dashboard/Charts/PaiChart";

export default function DashBoard() {
    return (
        <>
            <div className='h-full w-full flex flex-col gap-10 p-10'>
                <h1 className='text-3xl font-bold text-textColor '>Dashboard</h1>
                <div className="w-full">
                    <LineChartCompo />
                </div>
                <div className="flex gap-10">
                    <BarChartCompo />
                    <PaiChartCompo />
                </div>
            </div>
        </>
    );
}
