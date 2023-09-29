export default function ErrorPage({ inputValue, onClose }) {
  return (
    <div className="fixed z-50 p-[16px] w-full flex items-center justify-center left-0 right-0 top-0 h-screen bg-black/50">
      <div className="custom_container border bg-white p-[40px] pt-[50px] pb-[50px] text-[20px]">
        <div className="text-center">
          Tracking number {inputValue && <span>[ {inputValue} ]</span>} not
          found. check the number and try again!
        </div>
        <div className="mt-[40px] max-w-[250px] border mx-auto">
          <button
            className="bg-[#ff6200] block  w-full text-center text-[14px] p-4 pl-6 pr-6 uppercase text-white font-semibold"
            onClick={() => onClose()}
          >
            TRY AGAIN!
          </button>
        </div>
      </div>
    </div>
  );
}
