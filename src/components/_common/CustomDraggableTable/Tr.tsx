import React, { useState } from "react";
import { SortableHandle } from "react-sortable-hoc";

import Images from 'components/_common/Images'
import hand from "../../../assets/hand.svg";

const RowHandler = SortableHandle(() => {
    return (
        <div className="handle">
            <Images icon={hand} alt={"..."} width={20} height={20} />
        </div>
    )
});
const Tr = ({ keyValue, singleData }: any) => {
    const [keyValues] = useState(Object.keys(keyValue));
    return (
        <tr className={"move_table_tr"}>
            {keyValues.map((e) => {
                return <td onClick={(e) => { singleData.clickAction ? singleData.clickAction(singleData) : null }} >{singleData[e]}</td>
            })}
            <td><RowHandler /></td>
        </tr>
    );
};

export default Tr;
