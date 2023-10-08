import { progressDaTa, attorneyAndrewShippingInfo } from "./data";

export default function TrackNo065951({ inputValue }) {
  return (
    <div>
      <div className="border p-4 md:p-8 rounded-lg">
        {progressDaTa.map((item, i) => (
          <div
            className="flex outline-2 border-[#d4d4d4] border-b items-center gap-[10px] md:gap-[30px]"
            key={i}
          >
            <div className="text-center">
              <p className="font-bold">{item.date}</p>
              <p>{item.time}</p>
            </div>
            <div className="relative">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[5px] h-[50px] bg-[#d4d4d4]"></div>
                <div className="w-[55px] h-[55px] bg-[#858585] flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <div className="w-[5px] h-[50px] bg-[#d4d4d4]"></div>
              </div>
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
              <p>{item.address}</p>
            </div>
          </div>
        ))}

        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[10px] font-semibold">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span> Receiver Information</span>
          </div>
          <div>
            <div className="flex font-semibold bg-[#858585] text-white">
              <div className="border w-[300px] p-2">Receiver Name</div>
              <div className="border w-[200px] p-2">Phone</div>
              <div className="border w-full p-2">Address</div>
              <div className="border w-[200px] p-2">Email</div>
            </div>
            <div className="flex text-sm">
              <div className="border w-[300px] p-2">Denis Burgess</div>
              <div className="border w-[200px] p-2">****</div>
              <div className="border w-full text-sm p-2">
                2604 PITKIN LANE NW HUNTSVILLE, AL 35810
              </div>
              <div className="border w-[200px] p-2">****</div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 pl-0 flex gap-3 mt-[30px] font-semibold">
            <span>
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </span>
            <span> Shipment Information</span>
          </div>
          <div>
            {attorneyAndrewShippingInfo.map((itemInfo, i) => (
              <div
                className={`flex ${
                  itemInfo.bgChange ? "bg-gray-100" : "bg-[#858585] text-white"
                }`}
                key={i}
              >
                <div className="border-r w-full p-2">{itemInfo.title}</div>
                <div className="w-full p-2">
                  {itemInfo.content}
                  {itemInfo.trackingNumber && inputValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
