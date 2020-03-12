import React from "react";
import Leeswijzer from "../leeswijzer/Index";
import Producten from "../producten/Index";

interface Props {
    data?: iVakken;
    sortedData?: iWeek[];
}

const Homepage: React.FC<Props> = ({ sortedData, data }) => {
    return (
        <div className="container">
            <Producten sortedData={sortedData} />
            <Leeswijzer data={data} />
        </div>
    );
};
export default Homepage;
