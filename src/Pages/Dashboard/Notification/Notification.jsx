import { useGetNotificationQuery } from "../../../redux/Features/getNotificationApi";





function Notification() {
  const {data:allSession,isSuccess,isError,isLoading,error} = useGetNotificationQuery();
console.log(error);
console.log(allSession);
  return (
    <div>
      <div className="p-[24px] ">
        <div className="bg-white h-[85vh] rounded-xl overflow-hidden">
          <div className="p-[24px]">
            <h1 className="text-[24px] text-primary font-semibold  border-b-[2px] border-[#979797] pb-5">
              Notification
            </h1>
          </div>
          <div className="flex px-[24px] flex-col">
            <div className="flex gap-2 items-center mb-[24px]">
              <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] ">
                <svg
                  className="  p rounded-full"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-[16px] font-normal">
                  You have received $500 from John Doe
                </h1>
                <p className="text-[12px] text-[#979797]">Fri, 12:30pm</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-[24px]">
              <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] ">
                <svg
                  className="  p rounded-full"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-[16px] font-normal">
                  New Category has created at 10:20am, 20/11/2023
                </h1>
                <p className="text-[12px] text-[#979797]">Fri, 12:30pm</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-[24px]">
              <div className="w-10 h-10 flex p-[7px] rounded bg-[#EEF6EA] ">
                <svg
                  className="  p rounded-full"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-[16px] font-normal">
                  You have received $500 from John Doe
                </h1>
                <p className="text-[12px] text-[#979797]">Fri, 12:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
