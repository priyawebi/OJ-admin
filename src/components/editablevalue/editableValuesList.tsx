import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Container from "components/_common/Container";
import axios from "axios";
import { url } from "components/ApiUrl/ApiUrl";
import PageHead from "components/_common/PageHead";
import Link from "next/link";
import Link1 from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function editableValuesList() {
  const [loadingText, setLoadingText] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);

  const [keyValue, setKeyValue] = useState({
    name: "NAME",
    category: "CATEGORY",
    value: "VALUE",
  });

  useEffect(() => {
    //  setLoadingText('Loading...');
    getEditableValuesData(10, page);
  }, [page]);

  const getEditableValuesData = (limit: number, page: number) => {
    axios
      .get(`${url}api/admin/editablevalues`)
      .then((res) =>setData(res.data));  
  };
  return (
    <>
      <Container activeBar={"editableValue"} />
      <div className="main-content">
        <div className="m-4">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography color="textPrimary" ><h3 className='breadcumbs'>Editable Values</h3></Typography>
        </Breadcrumbs>
        <PageHead/>         
          <Table className="gem-family">
            <thead >
              <tr>
                <th className="col-sm-5">NAME</th>
                <th className="col-sm-5">CATEGORY</th>
                <th className="col-sm-2">VALUES</th>
              </tr>
            </thead>
            <tbody>
            <Link href={'/all-gem'} className="btn btn-sm btn-primary mr-1">
             <tr>
            <td>GEM Shape</td>
            <td>GEM</td>
            <td>34</td>
           </tr></Link>
           
           <Link href={'/all-family-variety'} className="btn btn-sm btn-primary mr-1">
           <tr>
                <td>GEM Family&Variety</td>
                <td>GEM</td>
                <td>12</td>
            </tr>
            </Link>

            <Link href={'/all-gem-cut'} className="btn btn-sm btn-primary mr-1">
            <tr>
                <td>GEM Cut</td>
                <td>GEM</td>
                <td>67</td>
            </tr></Link>

            <Link href={'/all-gem-type'} className="btn btn-sm btn-primary mr-1"> 
            <tr>
                <td>GEM Type</td>
                <td>GEM</td>
                <td>47</td>
            </tr></Link>
            
            <Link href={'/all-jewelery-type'} className="btn btn-sm btn-primary mr-1">
            <tr>
                <td>Jewellery Type</td>
                <td>Gem,Jewllery,Setting</td>
                <td>2</td>
            </tr></Link>
            
            <Link href={'/all-metal-type'} className="btn btn-sm btn-primary mr-1">
            <tr>
                <td>Metal Type</td>
                <td>Jewellery</td>
                <td>5</td>
            </tr></Link>
            
            <Link href={'/all-pt-type'} className="btn btn-sm btn-primary mr-1">
             <tr>
                <td>PT Type</td>
                <td>PRECIOUS THING</td>
                <td>5</td>
            </tr></Link> 
            
            <Link href={'/all-pt-period'} className="btn btn-sm btn-primary mr-1">
            <tr>
                <td>PT Period</td>
                <td>PRECIOUS THING</td>
                <td>5</td>
            </tr></Link>
            
            <Link href={'/all-jewelery-style'} className="btn btn-sm btn-primary mr-1">
             <tr>
                <td>Jewellery Style</td>
                <td>JEWELLRY,SETTINGS</td>
                <td>5</td>
            </tr></Link>
            
            <Link href={'/all-finish-parameter'} className="btn btn-sm btn-primary mr-1">
             <tr>
                <td>Finish Parameters</td>
                <td>Setting</td>
                <td>5</td>
            </tr></Link>

             <Link href={'/gift-cards'} className="btn btn-sm btn-primary mr-1"> 
            <tr>
                <td>GiftCards</td>
                <td></td>
                <td></td>
            </tr></Link> 
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default editableValuesList;
