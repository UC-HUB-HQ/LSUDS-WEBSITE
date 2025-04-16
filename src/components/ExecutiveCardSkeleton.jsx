
const ExecutiveCardSkeleton = () => {
  return (
    <div className="w-full tab:w-80 max-w-xs flex flex-col items-start rounded-lg bg-gray-200 p-4 shadow-md animate-pulse">
      <div className="w-full h-44 bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
    </div>
  )
}

export default ExecutiveCardSkeleton