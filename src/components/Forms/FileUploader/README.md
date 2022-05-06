### ✅ Basic usage

Since `FileUploader` is a controlled component it requires its state to be provided from its parent, meaning an array of
`uploads` and an `onChange` callback function shall be provided. *FileUploader* is unopinionated, so it let the developer 
define how (and if) uploading the file(s).<br />
To update the component's state whilst uploading a file, an `uploadingFn` can be provided, it will receive the 
uploading file and the `next` callback function. <br />
The *next* callback function shall be performed for each time you want to update the component's state 
(for example during the *readystatechange* event) by passing an object defining the `byteSent` and the `loading` state 
as per the following example:


```jsx harmony
import { useState, useCallback } from 'react';
import { FileUploader } from 'beautiful-react-ui';

/**
 * A function used to upload each file.
 * Receives the file to upload and the 'next' callback. 
 * The "next" callback should be performed to update the file state by passing the uploading state
 */ 
const uploadingFnMock = (file, next) => {
  let sent = 0;
  
  let i = setInterval(() => {
    sent += Math.floor((Math.random() * 50) + 150);
   
    if(sent >= file.size) {
      clearTimeout(i);
      next({ byteSent: file.size, loading: false });
    }  else {
      next({ byteSent: sent, loading: true });
    }
  }, 10);
};

const UncontrolledFileUploader = (props) => {
  const [uploads, setUploads] = useState();

  const onChange = useCallback((event, nextUpload) => {
    setUploads(nextUpload);
  }, [uploads]);

  return (<FileUploader {...props} uploads={uploads} onChange={onChange} uploadingFn={uploadingFnMock} />)
};

<UncontrolledFileUploader />
```

### Multiple and accept

The `multiple` prop specifies that multiple files can be chosen at once. <br />

The `accept` prop takes as its value a string containing one or more of unique file type specifiers, separated by commas. 
For example: a file picker that needs content that can be presented as an image, might look like the following:


```jsx harmony
import { useState, useCallback } from 'react';
import { FileUploader } from 'beautiful-react-ui';

/**
 * A function used to upload each file.
 * Receives the file to upload and the 'next' callback. 
 * The "next" callback should be performed to update the file state by passing the uploading state
 */ 
const uploadingFnMock = (file, next) => {
  let sent = 0;
  
  let i = setInterval(() => {
    sent += Math.floor((Math.random() * 50) + 150);
   
    if(sent >= file.size) {
      clearTimeout(i);
      next({ byteSent: file.size, loading: false });
    }  else {
      next({ byteSent: sent, loading: true });
    }
  }, 10);
};

const UncontrolledFileUploader = (props) => {
  const [uploads, setUploads] = useState();

  const onChange = useCallback((event, nextUpload) => {
    setUploads(nextUpload);
  }, [uploads]);

  return (<FileUploader {...props} uploads={uploads} onChange={onChange} uploadingFn={uploadingFnMock} />)
};

<UncontrolledFileUploader multiple accept="image/*" />
```

### Customisation

`Title` and `Subtitle` props allow content customisation whilst `icon` allow to define a custom icon.

```jsx harmony
import { useState, useCallback } from 'react';
import { FileUploader } from 'beautiful-react-ui';

/**
 * A function used to upload each file.
 * Receives the file to upload and the 'next' callback. 
 * The "next" callback should be performed to update the file state by passing the uploading state
 */ 
const uploadingFnMock = (file, next) => {
  let sent = 0;
  
  let i = setInterval(() => {
    sent += Math.floor((Math.random() * 50) + 150);
   
    if(sent >= file.size) {
      clearTimeout(i);
      next({ byteSent: file.size, loading: false });
    }  else {
      next({ byteSent: sent, loading: true });
    }
  }, 10);
};

const UncontrolledFileUploader = (props) => {
  const [uploads, setUploads] = useState();

  const onChange = useCallback((event, nextUpload) => {
    setUploads(nextUpload);
  }, [uploads]);

  return (<FileUploader {...props} uploads={uploads} onChange={onChange} uploadingFn={uploadingFnMock} />)
};

<UncontrolledFileUploader multiple accept="image/*" icon="images" title="Drag images only" subtitle="(including PDF images)" />
```


### 🎓 Handlers:

- `onChange`: fires when file(s) change

### 🎓 Renderers:

- `ElementRender`: a renderer to replace the standard sidebar element
- `TitleRender`: A renderer to replace the standard Title component
- `SubtitleRender`: A renderer to replace the standard Subtitle component
- `FileItemRender`: A renderer to replace the standard FileItem component
- `ListRender`: A renderer to replace the standard List component
