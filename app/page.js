'use client';
import Layout from '../components/layout';
import InfoCard from '../components/infoCard';
import AddProfile from '../components/addProfile';
import Barcomp from '@/components/barComp';
import Piecomp from '@/components/pieComp';

export default function Home() {
  return (
    <Layout>
      {/* Container with padding and max-width */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <div className="grid gap-4">
          {/* Info Cards (First row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <InfoCard title="Total Revenue" value="$2,129,430" percentageChange="2.5" />
            <InfoCard title="Total Transactions" value="1,520" percentageChange="1.7" />
            <InfoCard title="Total Likes" value="9,721" percentageChange="1.4" />
            <InfoCard title="Total Users" value="9,721" percentageChange="4.2" />
          </div>

          {/* Dashboard Content (Second row) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Activity Chart (First Column) */}
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md h-60  ">
              {/* <ActivityChart /> */}
              <Barcomp />
            </div>

            {/* Product Pie Chart (Second Column) */}
            <div className="lg:col-span-1 bg-white  rounded-lg shadow-md ">
              <Piecomp  />
            </div>

            {/* Add Profile Card (Third Column) */}
            <div className="lg:col-span-1">
              <AddProfile />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
