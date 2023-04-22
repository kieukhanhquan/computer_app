import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getRevenue } from '../../Redux/Slice/statisSlice';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// let data = [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40]

const Revenue = () => {
    const [year, setYear] = useState('2023')
    const dispatch = useDispatch()
    let data = useSelector(state=>state.statis.monthValue)

    const handleChange = (event) => {
        setYear(event.target.value)
    }
    const getData = async () => {
        await dispatch(getRevenue({year: year}))
    }
    useEffect(()=> {
        getData()
    }, [year])

    return (
        <>
            <div className='d-flex flex-wrap'>
                <h6 className=' me-2 mt-2'> Biểu đồ doanh thu năm:</h6>
                <div className=''>
                    <select className="form-select " aria-label="Default select example " onChange={handleChange}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option selected value="2023">2023</option>
                    </select>
                </div>
            </div>
            <div className='container-fluid ' style={{ height: "400px", width: "99%" }}  >

                {
                    <Bar
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            aspectRatio: 1
                        }
                        }

                        data={{
                            labels: [
                                "Tháng 1",
                                "Tháng 2",
                                "Tháng 3",
                                "Tháng 4",
                                "Tháng 5",
                                "Tháng 6",
                                "Tháng 7",
                                "Tháng 8",
                                "Tháng 9",
                                "Tháng 10",
                                "Tháng 11",
                                "Tháng 12"
                            ],
                            datasets: [{
                                label: `Doanh thu năm ${year}`,
                                data: data,
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.2)',

                                ],
                                borderColor: [
                                    'rgb(54, 162, 235)',
                                ],
                                borderWidth: 1
                            }]
                        }}
                    />}

            </div>
        </>
    )
}


export default Revenue