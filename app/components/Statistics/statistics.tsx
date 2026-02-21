const Statistic = () => {
    return ( 
    <div className="w-full mt-2">
        <div className="w-[960px] mx-auto flex flex-row gap-6 py-3 px-5 justify-between">
            <div className="flex flex-row">
                <div className="icon">
                    <img src="./images/Statistics/icon-team.png" alt="team at your service" />
                </div>
                <div className="px-2 text-xl font-bold">
                    <h2 className="leading-none">A TEAM AT YOUR</h2>
                    <h2 style={{ color:'#e62a26'  }}className="text-2xl font-bold leading-none">SERVICE</h2>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="icon">
                    <img src="./images/Statistics/icon-delivery.png" alt="delievery on time" />
                </div>
                <div className="px-2 text-xl font-bold">
                    <h2 className="leading-none">ORDERS DELIVERED</h2>
                    <h2 style={{ color:'#e62a26'  }}className="text-2xl font-bold leading-none">ON TIME</h2>
                </div>
            </div>
            <div className="flex flex-row">
                <h2 style={{ color:'#e62a26'  }}className="text-5xl font-bold">1150</h2>
                <div className="px-1 py-1 text-xl">
                    <h2 className="leading-none font-extrabold">TRUCKS</h2>
                    <h2 className="leading-none font-extrabold">& TRAILERS</h2>
                    
                </div>
            </div>

        </div>
    </div> 
    );
}
 
export default Statistic;