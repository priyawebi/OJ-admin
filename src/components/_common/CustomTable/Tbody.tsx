import React, { useState } from "react";
import transparent from "../../../assets/gems.png";
import Images from "components/_common/Images";

function Tbody(props: any) {
  // console.log(props.tableData,"------------------props.tableData")
  // console.log(props.keyValue,"------------------props.keyValue")

  const [keyValue] = useState(Object.keys(props.keyValue));
  return (
    <tbody>
      {props.tableData.map(
        (singleData: {
          [x: string]:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          clickAction: any;
        }) => {
          return (
            <tr
              key={(Math.random() + 1).toString(36).substring(7)}
              onClick={() => {
                singleData.clickAction
                  ? singleData.clickAction(singleData)
                  : null;
              }}
            >
              {keyValue.map((singleKey) => {
                console.log(singleKey, "-------------singleKey");
                if (singleKey === "imageHtml") {
                  return (
                    <img src="http://192.168.0.110:3001/uploads/gems/6054b003cc4a1301eb838acd6c168b18" />
                  );
                }
                return (
                  <td
                    style={{
                      cursor: singleData.clickAction ? "pointer" : "",
                      maxWidth: "200px",
                    }}
                    key={(Math.random() + 1).toString(36).substring(7)}
                  >
                    {singleData[singleKey] ? singleData[singleKey] : "NA"}
                  </td>
                );
              })}
            </tr>
          );
        }
      )}
      <tr>
        <td colSpan={keyValue.length}>{props?.colSpan}</td>
      </tr>
    </tbody>
  );
}

export default Tbody;
