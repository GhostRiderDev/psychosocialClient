import { DatePicker } from "antd";
import { BarChart, Bar, Rectangle, XAxis } from "recharts";

const data = [
  {
    name: "Jan",
    ThisMonth: 4000,
    LastMonth: 2400,
  },
  {
    name: "Feb",
    ThisMonth: 3000,
    LastMonth: 1398,
  },
  {
    name: "Mar",
    ThisMonth: 2000,
    LastMonth: 9800,
  },
  {
    name: "Apr",
    ThisMonth: 2780,
    LastMonth: 3908,
  },
  {
    name: "May",
    ThisMonth: 1890,
    LastMonth: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    ThisMonth: 2390,
    LastMonth: 3800,
  },
  {
    name: "Jul",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "Aug",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "Sep",
    ThisMonth: 5465,
    LastMonth: 5245,
  },
  {
    name: "Oct",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "Nov",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "Dec",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
];

function IncomeRatio() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="bg-white mt-5 rounded-xl border-1 shadow-xl col-span-8 border-secondary">
      <div className="flex justify-between p-[16px]">
        <div>
          <h1 className="text-[20px] font-medium">Income Ratio</h1>
          <div className="flex gap-5 mt-[20px]">
            <div className="flex gap-2 items-center">
              <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
              <span>This Year</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-[#B0D6A0] w-4 h-4 rounded-full"></span>
              <span>Last Year</span>
            </div>
          </div>
        </div>
        <div>
          <DatePicker onChange={onChange} picker="year" />
        </div>
      </div>
      <div>
        <BarChart
          width={690}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Bar
            dataKey="LastMonth"
            fill="#B0D6A0"
            barSize={6}
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="ThisMonth"
            fill="#54A630"
            barSize={6}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default IncomeRatio;
