import ProgressCard from "../../components/dashboard/progress/ProgressCard";
import PaiChartCompo from "../../components/Dashboard/Charts/PaiChart";
import AllProduct from "../Product/AllProduct";
import LineChartCompo from "../../components/dashboard/charts/LineChart";
import TopUser from "./TopUser";
import { userData } from "../../option";
import TopSupplier from "./TopSupplier";

export default function DashBoard() {

    return (
        <>
            <div className='h-full bg-bgColor w-full flex flex-col gap-10 p-5 lg:p-10'>
                <h1 className='text-3xl font-bold text-textColor '>Dashboard</h1>
                <ProgressCard />
                <div className="flex flex-col lg:flex-row gap-4">
                    <PaiChartCompo />
                    <LineChartCompo />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <TopUser users={userData} />
                    <TopSupplier />
                </div>
                <AllProduct title="Recent Purchases" width="w-full"/>
            </div>
        </>
    );
}