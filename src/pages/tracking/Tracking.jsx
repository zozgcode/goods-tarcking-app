import { ThreeDots, Vortex } from "react-loader-spinner";

export default function Tracking({
  inputValue,
  handleInputChange,
  checkTracking,
  loading,
}) {
  return (
    <div className="bg-[url('https://i.imgur.com/SvXwr74.png')] mt-[50px] bg-cover bg-no-repeat min-h-[485px]">
      <div className="custom_container">
        <div className="max-w-[600px] relative mt-[50px] mx-auto">
          <h1 className="text-white text-center text-[32px] md:text-6xl">
            Welcome to FedEx
          </h1>
          <div className="flex mt-[60px] max-w-[450px] mx-auto">
            <div className="w-[158px] h-[120px] flex flex-col items-center justify-center pr-[15px] pl-[15px] pt-[25px] pb-[25px] bg-white">
              <img src="https://i.imgur.com/8IsoNqs.png" alt="" />
              <p className="text-[#333333] text-sm mt-2 font-semibold text-center">
                RATE & TRANSIT TIMES
              </p>
            </div>
            <div className="w-[158px] h-[140px] flex flex-col items-center justify-center bg-[#4D148C] relative bottom-3 pr-[15px] pl-[15px] pt-[35px] pb-[25px]">
              <img src="https://i.imgur.com/o8mnS6s.png" alt="" />
              <p className="text-[#ffffff] text-sm mt-2 font-semibold text-center">
                TRACK
              </p>
            </div>
            <div className="w-[158px] h-[120px] flex flex-col items-center justify-center pr-[15px] pl-[15px] pt-[25px] pb-[25px] bg-white">
              <img src="https://i.imgur.com/10jojwk.png" alt="" />
              <p className="text-[#333333] text-sm mt-2 font-semibold text-center">
                SHIP
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-[50px]">
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="w-full tracking_input p-[12px] pb-[20px] pt-[20px]"
              type="text"
              placeholder="TRACKING ID"
            />
            <button
              className={`bg-[#ff6200] w-full md:w-[200px] flex items-center justify-center font-bold text-white mt-3 md:mt-0 ml-0 md:ml-1 p-[20px] pr-10 pl-10 ${
                loading ? "bg-[#c5bdb8] cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={checkTracking}
              disabled={loading}
            >
              {loading ? (
                <ThreeDots
                  height="23"
                  width="23"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "TRACK"
              )}
            </button>
          </div>
          {loading && (
            <div className="flex items-center  w-full justify-center pt-[10px] absolute">
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
