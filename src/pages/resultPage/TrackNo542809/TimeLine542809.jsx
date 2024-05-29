export default function TimeLine542809() {
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
                  May 22, 2024
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
                  May 22, 2024
                </time>
              </div>
            </div>
            <div className="StepProgress-item current">
              <div className="ml-5 h-[70px]">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  OUT FOR DELIVERY
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                    San Francisco, CA
                  </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 22, 2024
                </time>
              </div>
            </div>
            <div className="StepProgress-item current hidden">
              <div className="ml-5 h-[70px]">
                <h3 className="flex items-center mb-1 text-[16px] font-semibold text-[#333333]">
                  ON HOLD
                </h3>
                {/* <p className="flex items-center mb-1 text-sm font-semibold text-[#808080]">
                    San Francisco, CA
                  </p> */}
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 22, 2024, 10:30 A.M
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
                4430 S 45th Street Lincoln Nebraska 68516
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-[#333333] dark:text-gray-500">
                  May 28, 2024
                </time>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
