### Basic Usage

```jsx
import { Input } from 'beautiful-react-ui';

<Input />
```

### Controlled Input:

```jsx
import { Input } from 'beautiful-react-ui';

const UncontrolledInput = (props) => {
  const [value, setValue] = React.useState();

  return (<Input value={value} onChange={(event, nextValue) => setValue(nextValue)} />);
}

<>
  <UncontrolledInput />
</>
```

### Placeholder

```jsx
import { Input } from 'beautiful-react-ui';

<Input placeholder="Custom placeholder" />
```

### Disabled

```jsx
import { Input } from 'beautiful-react-ui';

<Input disabled />
```

### Colors

```jsx
import { Input } from 'beautiful-react-ui';

<>
  <Input color="primary" />
  <Input color="secondary" />
  <Input color="info" />
  <Input color="success" />
  <Input color="warning" />
  <Input color="danger" />
</>
```

### Size

```jsx
import { Input } from 'beautiful-react-ui';

<>
  <Input size="small" />
  <Input size="default" />
  <Input size="large" />
</>
```

### Help Text

It's possible to show a help text giving further information right under the input field
by setting a `helpText` prop.

```jsx
import { Input } from 'beautiful-react-ui';

<Input color="danger" helpText="Please provide a valid value" />
```

### Icons

```jsx
import { Input } from 'beautiful-react-ui';

<>
  <Input icon="search" />
  <Input color="danger" icon="heart" />
  <Input icon="rocket" iconPosition="right" />
</>
```

### Fluid

```jsx
import { Input } from 'beautiful-react-ui';

<Input icon="search" fluid />
```
