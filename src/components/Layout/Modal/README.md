### Basic Usage

A Modal component shows its children contents positioned over everything else in the document.

The modal will close by clicking on its backdrop, whilst its content should be defined 
within the `Modal.Body` child component.

```jsx
import { Button, Modal } from 'beautiful-react-ui';

const UncontrolledModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
      </Modal>
    </>
  );
};

<UncontrolledModal />
```


### Title & Footer

By using the `Modal.Title` and the `Modal.Footer` components it's possible to define
the modal's title and footer 

```jsx
import { Button, Modal } from 'beautiful-react-ui';

const UncontrolledModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)}>
        <Modal.Title>Brilliant modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<UncontrolledModal />
```

##### Title with closable button:


```jsx
import { Button, Modal } from 'beautiful-react-ui';

const UncontrolledModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Modal isOpen={isOpen}>
        <Modal.Title>
          Amazing modal title
          <Button 
            icon="times"
            color="transparent" 
            style={{ position:'absolute', top:0, right:0, padding:'1rem' }} 
            onClick={() => setIsOpen(false)}
          />
        </Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close modal</Button>
        </Modal.Footer>
      </Modal>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
    </>
)};

<UncontrolledModal />
```

### Centered

The `centered` prop set the modal position right in the middle of the viewport.


```jsx
import { Button, Modal } from 'beautiful-react-ui';

const UncontrolledModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)} centered>
        <Modal.Title>Brilliant modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<UncontrolledModal />
```

### Modal Size

The `size` prop could be used to change the modal's size.


```jsx
import { Button, Modal } from 'beautiful-react-ui';

const UncontrolledModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)} {...props}>
        <Modal.Title>Sized modal</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
        </Modal.Body>
      </Modal>
    </>
  );
};

<>
  <UncontrolledModal size="small" />
  <UncontrolledModal size="default" />
  <UncontrolledModal size="large" />
</>
```


### Animation

By default, the modal pop-in performing a `zoom` animation, it's possible to change 
this behaviour by changing the value of the `animation` prop.

```jsx
import { Button } from 'beautiful-react-ui';

const UncontrolledModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{props.animation}</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)} {...props}>
        <Modal.Title>Animated modal</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<>
  <UncontrolledModal animation='none' />
  <UncontrolledModal animation='fade' />
  <UncontrolledModal animation='zoom' />
  <UncontrolledModal animation='slideTop' />
  <UncontrolledModal animation='slideBottom' />
  <UncontrolledModal animation='slideRight' />
  <UncontrolledModal animation='slideLeft' />
</>
```


### onShow Callback

```jsx
import {Button} from 'beautiful-react-ui';

const onShow = () => alert('this will be an amazing modal');

const UncontrolledModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} onBackdropClick={(event) => setIsOpen(false)} {...props}>
        <Modal.Title>onShow callback modal</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close modal</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<UncontrolledModal onShow={onShow} />  
```

### Backdrop Render

`backdropRender` prop is provided to change the standard backdrop behaviour.

```jsx
import { Button } from 'beautiful-react-ui';

const CustomBackdrop = (props) => (
  <div style={{background: 'rgba(8, 61, 119, 0.45)', width:'100%', height:'100%', position:'fixed'}}>
    <Button color="danger" {...props}>
      Click here to close the modal
    </Button>
  </div>
);


const UncontrolledModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show modal</Button>
      {/* Modal will not be shown in place */}
      <Modal isOpen={isOpen} backdropRender={() => <CustomBackdrop onClick={() => setIsOpen(false)} />}>
        <Modal.Title>Custom fancy backdrop modal</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno,
          brein nam rick mend grimes malum cerveau cerebro.
          De carne cerebro lumbering animata cervello corpora quaeritis.
          Summus thalamus brains sit.
        </Modal.Body>
      </Modal>
    </>
  );
};

<UncontrolledModal/>
```