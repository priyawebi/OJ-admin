import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import showToaster from 'components/_common/Toaster/Toaster';
import { url } from "components/ApiUrl/ApiUrl";
import Router from "next/router";
import { useRouter } from "next/router";


var h2m = require('h2m')
const cloudName = 'nonenone25251325zz';
const unsignedUploadPreset = 'adz8s31b';


function TextEditor() {

  const [data, setData] = useState("");
  const [returnpolicy, setReturnPolicy] = useState("");
  const token =typeof window !== "undefined"?localStorage.getItem("accessToken") : "";
  const router = useRouter();

 //Update By ID
 useEffect(() => {
  if (router.query.id) {
    axios
      .get(`${url}api/admin/returnpolicy/${router.query.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res?.data?.name)
        setReturnPolicy(res?.data?.returnPolicy)
      });
  }
}, [router.query.id]);

  const [state, setState] = React.useState({
    content: "",
    saved: false,
    post: {
      description: ""
    },
    urlImage: '',
    loading: false
  })
  const _handleEditorChange = e => {
    console.log('Content was updated:', h2m(e.target.getContent()))
    setState({ ...state, content: e.target.getContent() })
  }

  const _handSave = (e) => {
    //Let push state.content which you got to server
    //can view result at console window :)
    console.log(state.content)
    setState({ ...state, saved: true })
    e.preventDefault();
    
    let resultObj = {
      "name":data,
      "returnPolicy":state.content,
    };
    if (router.query.id === undefined) {
      Router.push("/all-return-policy");
    }else{
      axios
      .put(`${url}api/admin/returnpolicy/${router.query.id}`, resultObj, {
          headers: {Authorization:`Bearer ${token}`}
        })
        .then((result) => {
          showToaster("success", "ReturnPolicy Added Successfully");
        })
        .catch((err) => {
          showToaster("error", "ReturnPolicy Not Added");
        });
        Router.push("/all-return-policy");
    }
   
  }

  React.useEffect(() => {
    const input = document.getElementsByTagName("input")
    if (state.loading && input) {

      input.disabled = true
    }
    else if (!state.loading && input) {
      input.disabled = false
    }
  })

  return (
    <div className="App">
      <div style={{ width: '100%' }} contentEditable="true">
        <Editor
          apiKey={`0l9ca7pyz0qyliy0v9mmkfl2cz69uodvc8l6md8o4cnf6rnc`}
          initialValue={returnpolicy}
          init={{
            height: 600,
            menubar: true,
            config: {},
            skin: 'oxide-dark',
            content_css: 'dark',
            images_upload_base_path: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            images_upload_credentials: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              `undo redo| link code image | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help`,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              var url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
              var xhr = new XMLHttpRequest();
              var fd = new FormData();
              xhr.open('POST', url, true);

              input.onchange = function () {
                var file = this.files[0];
                var reader = new FileReader();
                xhr.onload = function () {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    // File uploaded successfully
                    var response = JSON.parse(xhr.responseText);

                    // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
                    var url = response.secure_url;
                    // console.log(url)
                    // Create a thumbnail of the uploaded image, with 150px width
                    cb(url, { title: response.original_filename });

                  }
                };

                reader.onload = function () {
                  var id = 'blobid' + (new Date()).getTime();
                  var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(',')[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  // call the callback and populate the Title field with the file name
                  fd.append('upload_preset', unsignedUploadPreset);
                  fd.append('tags', 'browser_upload');
                  fd.append('file', blobInfo.blob(), blobInfo.filename());
                  xhr.send(fd);
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
            images_upload_handler: (blobInfo, success, failure) => {
              let data = new FormData();
              var reader = new FileReader();
              // var file = this.files[0];
              var url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
              data.append('file', blobInfo.blob(), blobInfo.filename());
              data.append('upload_preset', unsignedUploadPreset);
              data.append('tags', 'browser_upload');
              axios.post(url, data)
                .then(function (res) {
                  success(res.data.secure_url)
                })
                .catch(function (err) {
                  console.log(err)
                });
              reader.readAsDataURL(blobInfo.blob())
            },
          }}
          onChange={_handleEditorChange}
          value={state.saved ? "" : state.content}
        />
        <div>
          <div className="footersave">
                <div className="footer-1">
                  <div className="row mt-3 justify-content-end">
                    <div className="col-sm-3">
                      <button className="btn-save"  onClick={_handSave}>Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div>
          {/* {renderHTML(state.content)} */}
        </div>
      </div>
    </div>
  );
}

export default TextEditor;


