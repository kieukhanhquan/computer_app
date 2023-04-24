import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/Slice/statisSlice';

ChartJS.register(ArcElement, Tooltip, Legend);

// let data = [0,0,0]
let product = ["Máy tính", "Phụ kiện",
    "Điện thoại"]

const TypeSale = () => {

    const [year, setYear] = useState('2023')
    const dispatch = useDispatch()
    let data = useSelector(state=>state.statis.typeValue)

    const handleChange = (event) => {
        setYear(event.target.value)
    }
    const getData = async () => {
        await dispatch(getProduct({year: year}))
    }
    useEffect(()=> {
        getData()
    }, [year])

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
                                    "Máy tính", "Phụ kiện",
                                    "Điện thoại"

                                ],
                                datasets: [{
                                    label: `Số lượng năm ${year}`,
                                    data: data,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                     

                                    ],
                                    borderColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(255, 159, 64)',
                                        'rgb(75, 192, 192)',
                                
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