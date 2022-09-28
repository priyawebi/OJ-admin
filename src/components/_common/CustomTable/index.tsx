import React from 'react';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import Thead from './Thead';
import Tbody from './Tbody';

function CustomTable(props: any) {
    const getPageList = (totalPages: number, page: number, maxLength: number) => {
        if (totalPages === 1) { return [] }
        if (maxLength < 5) throw "maxLength must be at least 5";

        function range(start: number, end: number) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1)
                .concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth)
                .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        return range(1, sideWidth)
            .concat(0, range(page - leftWidth, page + rightWidth),
                0, range(totalPages - sideWidth + 1, totalPages));
    }

    return (
        <div>
            <Table hover responsive>
                <Thead key={(Math.random() + 1).toString(36).substring(7)} keyValue={props.keyValue} />
                <Tbody key={(Math.random() + 1).toString(36).substring(7)} keyValue={props.keyValue} tableData={props.tableData} colSpan={props?.colSpan ? props.colSpan : <></>} />
            </Table>
            <Pagination className='justify-content-end mt-3' size='sm'>
                {getPageList(props.totalPage, props.page, 6).map((ee: any, e: number) => {
                    return (
                        ee > 0
                            ?
                            <Pagination.Item key={ee} active={ee == props.page} onClick={() => { props.setPage(ee) }}> {ee} </Pagination.Item>
                            :
                            <Pagination.Item style={{ cursor: "not-allowed" }} disabled key={ee} active={ee == props.page}> ... </Pagination.Item>
                    )
                })}
            </Pagination>
        </div>
    );
}

export default CustomTable;