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
            <div className="StepProgress-item is-done bg-green">
              <div className="ml-5">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  IN TRANSIT
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
                  Your Package have been processed and accepted by the Custome
                  Service here in Oklahoma City and it’s will be out for
                  delivery tomorrow.
                </p>
                <p className="mt-2">
                  Note : The package will be out for delivery after you have
                  paid to the service charge which is $800 . The service charge
                  is to secure the money to your Home address in Tulsa County.
                </p>
                {/* <p className="mt-2">
                  Stamp Duty
                  <br />
                  Driver license ( The driver License shown above )<br />
                  Stamp Duty receipt.
                </p> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
