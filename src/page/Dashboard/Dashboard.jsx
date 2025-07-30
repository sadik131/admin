import BarChartCompo from "./BarChart";
import LineChartCompo from "./LineChart";
import { PaiChartCompo } from "./PaiChart";

export default function DashBoard() {
    return (
        <>
            <div className='h-full w-full'>
                <h1 className='text-3xl font-bold text-textColor'>Dashboard</h1>
                <div className="flex">
                    <BarChartCompo />
                    <LineChartCompo />
                </div>
                <PaiChartCompo />
            </div>
        </>
    );
}
