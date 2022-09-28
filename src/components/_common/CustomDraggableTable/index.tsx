import React, { useState, useCallback, useEffect } from "react";
import Tr from "./Tr";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import UpdateData from "./UpdateData";

const SortableCont: any = SortableContainer(({ children }: any) => {
    return <tbody>{children}</tbody>;
});
const SortableItem: any = SortableElement((props: any) => {
    return <Tr {...props} />
});

const CustomDraggableTable = ({ keyValue, tableData }: any) => {

    const [items, setItems] = useState(tableData);
    const onSortEnd = useCallback(({ oldIndex, newIndex }: any) => {
        setItems((oldItems: any[]) => UpdateData(oldItems, oldIndex, newIndex));
    }, []);

    useEffect(() => {
        setItems(tableData)
    }, [tableData]);

    return (
        <div className="fixed_header_div">
            <table className="table table-light fixed_header">
                <thead>
                    <tr>
                        {Object.keys(keyValue).map((e) => {
                            return <th key={(Math.random() + 1).toString(36).substring(7)}>{keyValue[e]}</th>
                        })}
                        <th key={(Math.random() + 1).toString(36).substring(7)}></th>
                    </tr>
                </thead>
                <SortableCont onSortEnd={onSortEnd} lockAxis="y" helperClass="helperContainerClass" useDragHandle={true}                >
                    {items.map((value: any, index: number) => (
                        <SortableItem key={`item-${index}`} index={index} keyValue={keyValue} singleData={value} />
                    ))}
                </SortableCont>
            </table>
        </div>
    );
};

export default CustomDraggableTable;