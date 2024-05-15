export default function TimeLine726290() {
  return (
    <div className="mb-20">
      <div style={{ marginLeft: 10 }}>
        <div className="wrapper">
          <ul className="StepProgress">
            <div className="StepProgress-item is-done">
              <div className="ml-5">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  PACKAGE RECEIVED BY FEDEX
                </h3>
                <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  Minneapolis, MN, USA
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 9, 2024
                </time>
              </div>
            </div>
            <div className="StepProgress-item is-done">
              <div className="ml-5">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  IN TRANSIT
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  San Francisco, CA
                </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 11, 2024
                </time>
              </div>
            </div>
            <div className="StepProgress-item is-done">
              <div className="ml-5 h-[70px]">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  OUT FOR DELIVERY
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                    San Francisco, CA
                  </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 12, 2023
                </time>
              </div>
            </div>
            <div className="StepProgress-item is-done bg-red">
              <div className="ml-5">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  DELIVERED
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  Jacob Myerss
                </p> */}
                <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  4400 NW 23rd St, Oklahoma City, OK 73107, United States.
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 15, 2024
                </time>
              </div>

              <div className="ml-5 text-red-500">
                <p>
                  You are to bring along the Driver License along, they
                  are to be processed to confirm your Identification.
                </p>
                <p className="mt-2">
                  Note: don’t not come to our office Until you have fully paid
                  for the stamp Duties, After the Charges are paid the sectary
                  will bring you the stamp duty and then you will come along
                  with:
                </p>
                <p className="mt-2">
                  Stamp Duty<br />
                  Driver license ( The driver License shown above )<br />
                  Stamp Duty receipt.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
