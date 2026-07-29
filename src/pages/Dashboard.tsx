const Dashboard = () => {
  return (
    <div className="w-full min-h-full flex flex-col flex-grow justify-center items-center">
        <div className="w-full flex flex-1">
            <div className="bg-black w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Bill Book
            </div>
            <div className="bg-red-500 w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Add a Bill
            </div>
        </div>
        <div className="w-full flex flex-1">
            <div className="bg-green-500 w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Analytics
            </div>
            <div className="bg-orange-500 w-full flex-1 flex justify-center items-center text-white text-2xl font-bold">
              Quetation
            </div>
        </div>
    </div>
  )
}

export default Dashboard