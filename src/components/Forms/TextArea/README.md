### Basic Usage

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea />
```

### Controlled TextArea:

```jsx
import { TextArea } from 'beautiful-react-ui';

const UncontrolledTextArea = (props) => {
  const [value, setValue] = React.useState();

  return (<TextArea value={value} onChange={(event, nextValue) => setValue(nextValue)} />);
};

<UncontrolledTextArea />
```

### Resizable:

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea resizable/>
```

### Placeholder

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea placeholder="Custom placeholder" />
```

### Disabled

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea disabled />
```

### Colors

```jsx
import { TextArea } from 'beautiful-react-ui';

<>
  <TextArea color="primary" />
  <TextArea color="secondary" />
  <TextArea color="info" />
  <TextArea color="success" />
  <TextArea color="warning" />
  <TextArea color="danger" />
</>
```

### Size

```jsx
import { TextArea } from 'beautiful-react-ui';

<>
  <TextArea size="small" />
  <TextArea size="default" />
  <TextArea size="large" />
</>
```

### Help Text

It's possible to show a help text giving further information right under the textarea field
by setting a `helpText` prop.

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea color="danger" helpText="Please provide a valid value" />
```


### Fluid

```jsx
import { TextArea } from 'beautiful-react-ui';

<TextArea icon="search" fluid />
```
