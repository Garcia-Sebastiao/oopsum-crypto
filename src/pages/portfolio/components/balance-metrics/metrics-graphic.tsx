interface CryptoAllocation {
  name: string;
  percentage: number;
  color: string;
}

const allocations: CryptoAllocation[] = [
  { name: "Tether", percentage: 35.02, color: "bg-emerald-400" },
  { name: "Sushi Swap", percentage: 20, color: "bg-purple-400" },
  { name: "Bitcoin", percentage: 45.02, color: "bg-[#EDD777]" },
];

export default function CryptoAllocationChart() {
  return (
    <div className="w-full">
      <div className="flex items-center h-6 -mt-1 relative">
        <div className="flex flex-1 h-2 overflow-hidden">
          {allocations.map((allocation) => (
            <div
              key={allocation.name}
              className={`${allocation.color} h-full`}
              style={{ width: `${allocation.percentage}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        {allocations.map((allocation) => (
          <div key={allocation.name} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${allocation.color}`} />
            <span className="text-white text-sm font-medium">
              {allocation.name}{" "}
              <span className="text-neutral-secondary">
                {allocation.percentage}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
