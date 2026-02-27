const FleetTrailers = () => {

return (
  <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">

    <div className="grid  gap-12 items-center">

      <div className="flex justify-center">
        <img
          src="./images/Fleet/trailer.png"
          alt="Vanguard 53ft thermoking"
          className="w-1/2 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>

      <div>
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th
                  colSpan={2}
                  className="p-4 text-center text-lg font-bold tracking-wide bg-gray-300"
                >
                  VANGUARD 53ft. THERMO KING
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Length</td>
                <td className="p-4 text-gray-600 text-center">53ft (16,1m)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Width</td>
                <td className="p-4 text-gray-600 text-center">102in (2.59m)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Height</td>
                <td className="p-4 text-gray-600 text-center">13ft 6in (4.11m)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Fuel capacity</td>
                <td className="p-4 text-gray-600 text-center">~50 gallon</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Axles</td>
                <td className="p-4 text-gray-600 text-center">Tandem axle (sliding)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Isulation</td>
                <td className="p-4 text-gray-600 text-center">Polyurethane foam</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">GVWR</td>
                <td className="p-4 text-gray-600 text-center">68,000lbs (30,840kg)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-600 leading-relaxed text-lg">
        The Vanguard 53-foot refrigerated trailer is designed for long-haul efficiency and temperature-sensitive freight. Equipped with a Thermo King refrigeration unit, it ensures precise temperature control throughout the entire transport process.

        With its durable construction, aerodynamic design, and high cargo capacity, this trailer is ideal for food, pharmaceuticals, and other perishable goods requiring consistent climate conditions.
      </p>
    </div>


  </div>
);
}
 
export default FleetTrailers;