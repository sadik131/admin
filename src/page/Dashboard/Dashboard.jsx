import ProgressCard from "../../components/dashboard/progress/ProgressCard";
import PaiChartCompo from "../../components/Dashboard/Charts/PaiChart";
import LineChartCompo from "../../components/Dashboard/Charts/LineChart";
import TopSuppliersTable from "./TopSuppliersTable";
import { productTableHeaders, suppliers } from "../../option";
import AllProduct from "../product/AllProduct";

export default function DashBoard() {

    return (
        <>
            <div className='h-full bg-bgColor w-full flex flex-col gap-10 p-10'>
                <h1 className='text-3xl font-bold text-textColor '>Dashboard</h1>
                <ProgressCard />
                <div className="flex gap-4">
                    <PaiChartCompo />
                    <LineChartCompo />
                </div>
                <AllProduct />
            </div>
        </>
    );
}
