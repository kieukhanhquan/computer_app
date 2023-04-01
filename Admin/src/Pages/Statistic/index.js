import Revenue from "./revenue"
import TypeSale from "./typeSale"
const Statistic = () => {
    return (
        <>
            <div className="container-fluid m-auto p-3">
                <div className="m-auto " >
                    {
                        <Revenue />
                    }
                </div>
                <div className="m-auto mt-5 pt-5" >
                    {
                        <TypeSale />
                    }
                </div>
            </div>
        </>
    )
}

export default Statistic