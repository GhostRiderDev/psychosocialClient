
function Status() {
  return (
    <div className=" flex justify-between">
      <div className="rounded-lg border-1 shadow-lg items-center py-4 px-14 bg-white border-primary border-[1px] p-3 flex gap-5">
        <img
          className="w-15 h-15"
          src="https://i.ibb.co/8gy4pt9/check-circle.png"
          alt=""
        />
        <div>
          <h4 className="text-lg">Completed</h4>
          <h1 className="text-[#54A630] text-xl text-center font-semibold">
            7,850
          </h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-5 px-14 bg-white border-primary border-[1px] p-3 flex gap-5">
        <img
          className="w-15 h-15"
          src="https://i.ibb.co/C2XfP7V/clock.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Pending</h4>
          <h1 className="text-[#FFEB3B] text-[32px] font-semibold">650</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-5 px-14 bg-white border-primary border-[1px] p-3 flex gap-5">
        <img
          className="w-15 h-15"
          src="https://i.ibb.co/HzqbWDz/x-circle.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Canceled</h4>
          <h1 className="text-[#F44336] text-[32px] font-semibold">120</h1>
        </div>
      </div>
    </div>
  );
}

export default Status;
