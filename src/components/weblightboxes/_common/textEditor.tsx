import React, { useRef,SetStateAction, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Cookies from 'js-cookie'

const TextEditor = (props: editorType) => {
    const editDescriptionData = Cookies.get(props.cookiesValue as string);

    const [showEditor, setShowEditor] = useState(false);
  
    const useDarkMode =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    const textEditorOnChange = (e: {
      target: { getContent: () => SetStateAction<string> };
    }) => {
      props.onChange(`${props.name}`, e.target.getContent());
      if (props?.hindi === true) {
        const val = e?.target?.getContent();
        const regex = /<[^>]*>/gim;
        const text = (val as string).replace(regex, '');
  
        const originalValue = text.replace('&nbsp;', '');
        props.hindiValue && props.hindiValue(originalValue);
      }
    };
  
    const handleBlur = () => {
      props?.onBlur && props?.onBlur(`${props.name}`, true);
    };

    return (
        <>
            <Editor
                apiKey='nqkd2ppm3991i5ahof427m4h5ba9qtk8byerucf8ps8n0xgv'
                initialValue={
                    props?.todo === 'edit' ? editDescriptionData : props?.editorValue
                  }
                  onChange={(e) => textEditorOnChange(e)}
                  onBlur={() => handleBlur()}               
                   init={{
                    menubar: 'file edit view insert format tools table help',
                    selector: 'textarea#open-source-plugins' as unknown as undefined,
                    branding: false,
                    plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                    imagetools_cors_hosts: ['picsum.photos'],
                    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    toolbar_sticky: false,
                    autosave_ask_before_unload: true,
                    autosave_interval: '30s',
                    autosave_prefix: '{path}{query}-{id}-',
                    autosave_restore_when_empty: false,
                    autosave_retention: '2m',
                    image_advtab: true,
                    templates: [
                        {
                            title: 'New Table',
                            description: 'creates a new table',
                            content:
                                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
                        },
                        {
                            title: 'Starting my story',
                            description: 'A cure for writers block',
                            content: 'Once upon a time...',
                        },
                        {
                            title: 'New list with dates',
                            description: 'New List with dates',
                            content:
                                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
                        },
                    ],
                    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                    height: 400,
                    image_caption: true,
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    noneditable_noneditable_class: 'mceNonEditable',
                    toolbar_mode: 'sliding',
                    contextmenu: 'link image imagetools table',
                    skin: 'oxide',
                    content_css: 'default',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    toolbar_location: 'bottom',
                }}
               
            />
        </>
    );
}

export default TextEditor;


