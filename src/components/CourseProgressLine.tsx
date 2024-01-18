import { data } from "../pages/Course"

const CourseProgressLine = () => {
    const isFinish = localStorage.getItem('finish')
    const activeDay = localStorage.getItem('activeDay') || 0
    const totalDay = data.length
    const a = 100 / totalDay
    const size = isFinish ? 100 : Number(activeDay) * a

    return (
        <div className="flex items-center gap-x-4">
            <div className="relative bg-[#EDEDED] w-[150px] md:w-[200px] h-[10px] rounded-md">
                {/*  */}
                <div style={{ width: size + '%' }} className="absolute top-0 left-0  rounded-md w-1/2 bg-primary h-[10px]"></div>
                {/*  */}
            </div>
            <p>{size.toFixed(2)}%</p>
        </div>
    )
}

export default CourseProgressLine