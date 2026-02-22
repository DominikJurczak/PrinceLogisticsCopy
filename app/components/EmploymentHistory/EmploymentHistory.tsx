import type { EmployerType } from "~/types/EmployerTypes";

export type EmploymentHistoryProps = {
    employmentHistory: EmployerType[];
    setEmploymentHistory: React.Dispatch<React.SetStateAction<EmployerType[]>>
}


const EmploymentHistory = ({ setEmploymentHistory, employmentHistory }:EmploymentHistoryProps) => {

  const addEmployer = () => {
    setEmploymentHistory(prev => [
      ...prev,
      { employer: '', from: '', to: '' }
    ])
  }

  const updateField = (index: number, field: keyof EmployerType, value: string) => {
    setEmploymentHistory((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  return (
    <div className="w-full p-6 border rounded-xl space-y-6 mt-5">

      <h2 className="text-black font-semibold text-lg">
        Could you provide us with some information about your previous employers (optional)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          {/* HEADER */}
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">Employer</th>
              <th className="text-left py-2 px-3">From</th>
              <th className="text-left py-2 px-3">To</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {employmentHistory.map((entry, index) => (
              <tr key={index} className="border-b last:border-none">

                <td className="py-2 px-3">
                  <input
                    type="text"
                    className="w-full border border-black rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={entry.employer}
                    onChange={(e) => updateField(index, 'employer', e.target.value)}
                  
                  />
                </td>

                <td className="py-2 px-3">
                  <input
                    type="date"
                    className="w-full border border-black rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={entry.from}
                    onChange={(e) => updateField(index, 'from', e.target.value)}
                  />
                </td>

                <td className="py-2 px-3">
                  <input
                    type="date"
                    className="w-full border border-black rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={entry.to}
                    onChange={(e) => updateField(index, 'to', e.target.value)}
                  
                  />
                </td>

              </tr>
            ))}

            {/* checking for entires if theres none show message */}
            {employmentHistory.length === 0 && (
              <tr>
                <td colSpan={3} className="py-6 text-center text-gray-500">
                  No employment history added yet
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end pt-2">
        <button
          type="button"
          className="px-4 py-2 text-sm font-semibold rounded-md border border-zinc-700 text-black hover:text-gray-700 cursor-pointer transition"
          onClick={addEmployer}
        >
          + Add more employers
        </button>
      </div>

    </div>
  )
}

export default EmploymentHistory