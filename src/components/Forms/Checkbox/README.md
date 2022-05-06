### ✅ Basic usage

Since Checkbox is a controlled component, it needs to be wrapped it into an uncontrolled one providing its state.

```jsx
import { useState, useCallback } from 'react';
import { Checkbox } from 'beautiful-react-ui';

const UncontrolledCheckbox = (props) => {
    const [toggled, setValue] = useState(true);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <Checkbox value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledCheckbox />
```

### Help text

A help text is a tiny text shown right under the component to provide additional information.

```jsx 
import { useState, useCallback } from 'react';
import { Checkbox, Label, FormGroup } from 'beautiful-react-ui';

const UncontrolledCheckbox = (props) => {
    const [toggled, setValue] = useState(true);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return (
        <Checkbox 
            value={toggled} 
            onChange={onChangeHandler} 
            helpText="A helping text right under the component" 
            {...props} 
        />
    );
};

<UncontrolledCheckbox />
```

### Usage with Label

```jsx 
import { useState, useCallback } from 'react';
import { Checkbox, Label, FormGroup } from 'beautiful-react-ui';

const UncontrolledCheckbox = (props) => {
    const [toggled, setValue] = useState(true);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return (
        <FormGroup orientation="horizontal">
            <Checkbox value={toggled} onChange={onChangeHandler} {...props} />
            <Label>ToggleSwitch label</Label>
        </FormGroup>
    );
};

<UncontrolledCheckbox />
```

### Colors

```jsx 
import { useState, useCallback } from 'react';
import { Checkbox } from 'beautiful-react-ui';

<>
    <Checkbox value={true} color="default" />
    <Checkbox value={true} color="primary" />
    <Checkbox value={true} color="secondary" />
    <Checkbox value={true} color="info" />
    <Checkbox value={true} color="success" />
    <Checkbox value={true} color="warning" />
    <Checkbox value={true} color="danger" />
</>
```


### Disabled

```jsx 
import { useState, useCallback } from 'react';
import { Checkbox } from 'beautiful-react-ui';

<Checkbox value={true} color="primary" disabled />
```

### Renderers

Renderers are props that provide a way to customise a component by replacing its constituent sub-components.<br />
Generally a renderer can be another React component or a basic HTML element tag. <br />
A renderer would receive the props of the component it is replacing, including the className(s).

**CheckIcon**

```jsx 
import { useState, useCallback } from 'react';
import { Checkbox, Icon } from 'beautiful-react-ui';

const CustomCheckIcon = ({ checked, color }) => (<Icon name={checked ? 'check' : 'minus'} color={checked ? color : 'defualt'} />);


const UncontrolledCheckbox = (props) => {
    const [toggled, setValue] = useState(true);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <Checkbox value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledCheckbox CheckIcon={CustomCheckIcon} color="primary" />
```

### 🎓 Handlers:

- `onChange`: fires when clicking on the checkbox

### 🎓 Renderers:

- `CheckIcon`: Defines the check icon renderer
