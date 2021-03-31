

const ReactQuill= typeof window === 'object' ? require('react-quill') : () => false;
const options = [
    ['bold', 'italic', 'underline', 'strike'],

    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],

    [{ 'align': [] }],

    ['clean']
];


let modules={
    toolbar: {
        container: options,
    },

};

export default function Editor(){

    return (
        <ReactQuill theme="snow"  modules={modules}/>
    )

}