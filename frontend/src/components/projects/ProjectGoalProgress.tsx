interface GoalProgressProps {
  goal: number;
  raised: number;
}

export default function ProjectGoalProgress({
  goal,
  raised,
}: GoalProgressProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="w-full max-w-md mx-auto p-3 lg:p-6 bg-white-smoke rounded-xl shadow-md text-center space-y-4">
      <div className="text-[25px] sm:text-4xl font-bold text-blue-strong">
        $
        {goal.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>

      <div className="relative h-3 w-full bg-gray-medium rounded-full">
        <div
          className="absolute top-0 left-0 h-3 bg-blue-strong rounded-full"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-[calc(var(--progress))]"
          style={{ left: `${progress}%` }}
        ></div>
      </div>

      <div className="text-sm sm:text-base text-gray-strong">
        We’ve already raised{" "}
        <span className="font-semibold text-black">
          $
          {raised.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>{" "}
      </div>
    </div>
  );
}
