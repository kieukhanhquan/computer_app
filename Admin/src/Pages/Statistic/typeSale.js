import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

let data = [65, 59, 80, 81, 56, 55, 40]
let product = ["Máy tính PC", "Laptop",
    "Màn hình",
    "Chuột",
    "Dây sạc",
    "Tai nghe",
    "Bàn phím",]

const TypeSale = () => {
    const [year, setYear] = useState('2023')

    const handleChange = (event) => {
        setYear(event.target.value)
    }
    return (
        <>
            <div className='d-flex flex-wrap mb-2'>
                <h6 className=' me-2 mt-2'> Số lượng bán theo loại của năm:</h6>
                <div className=''>
                    <select className="form-select " aria-label="Default select example " onChange={handleChange}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option selected value="2023">2023</option>
                    </select>
                </div>
            </div>
            <div className='container-fluid row' style={{ width: "99%" }}  >

                <div className='col-md-6 table-responsive-lg d-flex align-items-center'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr >

                                <th>Tên sản phẩm</th>
                                <th>Số lượng </th>
                            </tr>
                        </thead>
                        <tbody style={{ color: "#6C757D" }}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <tr>


                                                <td className="pt-2">{product[index]}</td>
                                                <td className="pt-2">{item}</td>

                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-md-6 ' style={{ height: "400px" }} >

                    {
                        <Pie
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                aspectRatio: 1
                            }
                            }

                            data={{
                                labels: [
                                    "Máy tính PC",
                                    "Laptop",
                                    "Màn hình",
                                    "Chuột",
                                    "Dây sạc",
                                    "Tai nghe",
                                    "Bàn phím",

                                ],
                                datasets: [{
                                    label: `Số lượng năm ${year}`,
                                    data: data,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 205, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(201, 203, 207, 0.2)'

                                    ],
                                    borderColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(255, 159, 64)',
                                        'rgb(255, 205, 86)',
                                        'rgb(75, 192, 192)',
                                        'rgb(54, 162, 235)',
                                        'rgb(153, 102, 255)',
                                        'rgb(201, 203, 207)'
                                    ],
                                    borderWidth: 1
                                }]
                            }}
                        />}
                </div>
            </div>

        </>
    )
}

export default TypeSale