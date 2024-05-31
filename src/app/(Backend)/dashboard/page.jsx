import React from 'react';
import { FaEye, FaMoneyBillWave, FaBox, FaChartLine } from 'react-icons/fa';
import CardDataStats from '@/app/component/Dashboard/CardDataStats';
import MountainChart from '@/app/component/Dashboard/(Charts)/MountainCharts';

const Page = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <FaEye className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45.2K" rate="4.35%" levelUp>
          <FaMoneyBillWave className="text-primary dark:text-white" size={20} />
        </CardDataStats>
        <CardDataStats title="Total Student" total="2.450" rate="2.59%" levelUp>
          <FaBox className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Expenses" total="$4.256" rate="0.11%" levelUp={false}>
          <FaChartLine className="text-primary dark:text-white" size={20} />
        </CardDataStats>
      </div>
      <div>
        <MountainChart/>
      </div>
    </div>
  );
};

export default Page;
