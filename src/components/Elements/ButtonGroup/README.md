### Basic Usage

To group a series of button just wrap 'em within a ButtonGroup component:

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

const someAction = alert.bind(null, 'Some Action');

<ButtonGroup>
  <Button onClick={someAction}>First button</Button>
  <Button onClick={someAction}>Second button</Button>
  <Button onClick={someAction}>Third button</Button>
</ButtonGroup>
```

### Block

full-width fluid button group

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

<ButtonGroup fluid>
  <Button icon="home">Home</Button>
  <Button icon="file">File</Button>
  <Button icon="paperclip">Paperclip</Button>
  <Button icon="coffee">Coffee</Button>
</ButtonGroup>
```

### Group Color

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

<>
  <ButtonGroup fluid color="primary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup fluid color="secondary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup fluid color="info">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup fluid color="warning">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup fluid color="success">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup fluid color="danger">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group Size

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

<>
  <ButtonGroup fluid size="small">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup color="primary" fluid size="default">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup color="info" fluid size="large">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group Outline

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

<>
  <ButtonGroup outline fluid color="primary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline fluid color="secondary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline fluid color="info">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline fluid color="warning">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline fluid color="success">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline fluid color="danger">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group rounded

```jsx
import { ButtonGroup, Button } from 'beautiful-react-ui';

<ButtonGroup rounded color="primary">
  <Button icon="home">Home</Button>
  <Button icon="file">File</Button>
  <Button icon="paperclip">Paperclip</Button>
  <Button icon="coffee">Coffee</Button>
</ButtonGroup>
```
