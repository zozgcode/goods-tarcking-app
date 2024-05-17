export default function TimeLine441880() {
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
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  Minneapolis, MN, USA
                </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 15, 2024
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
                  May 16, 2024
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
                  May 16, 2023
                </time>
              </div>
            </div>
            <div className="StepProgress-item is-done">
              <div className="ml-5 h-[70px]">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  ON HOLD
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                    San Francisco, CA
                  </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 16, 2023
                </time>
              </div>
            </div>
            <div className="StepProgress-item current">
              <div className="ml-5">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  DELIVERED
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                  Jacob Myerss
                </p> */}
                <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                5830 pin pt San Antonio Texas 78266
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 16, 2024
                </time>
              </div>

              {/* <div className="ml-5 text-red-500">
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
              </div> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
