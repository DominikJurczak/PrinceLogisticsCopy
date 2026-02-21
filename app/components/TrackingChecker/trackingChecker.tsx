const TrackingChecker = () => {
  return (
    <div className="w-full px-4 py-7 text-white border-t border-neutral-700 mb-0">
      <div className="max-w-[960px] mx-auto">

        <div className="flex flex-col sm:flex-row gap-4 items-center">

          <select
            name="order_tracker"
            id="order_tracker"
            className="p-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="waybill">Waybill</option>
            <option value="bill_of_lading">Bill of Lading</option>
            <option value="packing_slip">Packing Slip</option>
          </select>

          <input
            type="text"
            placeholder="Tracking number"
            className="p-3 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 flex-1 w-full"
          />

          <button className="bg-[#e62a26] px-6 py-3 font-semibold rounded-md hover:bg-red-700 transition whitespace-nowrap">
            Track your order
          </button>

        </div>

      </div>
    </div>
  );
};

export default TrackingChecker;