### ✅ Basic usage
    
Since ToggleSwitch is a controlled component, it needs to be wrapped it into an uncontrolled one providing its state.

```jsx
import { useState, useCallback } from 'react';
import { ToggleSwitch } from 'beautiful-react-ui';

const UncontrolledToggleSwitch = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <ToggleSwitch value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledToggleSwitch />
```

### Help text

A help text is a tiny text shown right under the component to provide additional information.

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch, Label, FormGroup } from 'beautiful-react-ui';

const UncontrolledToggleSwitch = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return (
        <ToggleSwitch 
            value={toggled} 
            onChange={onChangeHandler} 
            helpText="A helping text right under the component" 
            {...props} 
        />
    );
};

<UncontrolledToggleSwitch />
```

### Usage with Label

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch, Label, FormGroup } from 'beautiful-react-ui';

const UncontrolledToggleSwitch = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return (
        <FormGroup orientation="horizontal">
            <ToggleSwitch value={toggled} onChange={onChangeHandler} {...props} />
            <Label>ToggleSwitch label</Label>
        </FormGroup>
    );
};

<UncontrolledToggleSwitch />
```

### Colors

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch } from 'beautiful-react-ui';

<>
    <ToggleSwitch value={true} color="default" />
    <ToggleSwitch value={true} color="primary" />
    <ToggleSwitch value={true} color="secondary" />
    <ToggleSwitch value={true} color="info" />
    <ToggleSwitch value={true} color="success" />
    <ToggleSwitch value={true} color="warning" />
    <ToggleSwitch value={true} color="danger" />
</>
```


### Disabled

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch } from 'beautiful-react-ui';

<ToggleSwitch value={true} color="primary" disabled />
```

### Renderers

Renderers are props that provide a way to customise a component by replacing its constituent sub-components.<br />
Generally a renderer can be another React component or a basic HTML element tag. <br />
A renderer would receive the props of the component it is replacing, including the className(s).

**SwitchRender**

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch, Icon } from 'beautiful-react-ui';

const CustomSwitch = (props) => (
    <div {...props}><Icon name="check" style={{height: '100%', margin: 'auto', display: 'block'}}/></div>
)


const UncontrolledToggleSwitch = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <ToggleSwitch value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledToggleSwitch SwitchRender={CustomSwitch} />
```

**RailRender**

```jsx 
import { useState, useCallback } from 'react';
import { ToggleSwitch, Icon } from 'beautiful-react-ui';

const CustomRail = (props) => (
    <div {...props}><Icon name="check" style={{height: '100%', margin: 'auto', display: 'block'}}/></div>
)


const UncontrolledToggleSwitch = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <ToggleSwitch value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledToggleSwitch RailRender={CustomRail} />
```

### 🎓 Handlers:

- `onChange`: fires when clicking on the switch toggle

### 🎓 Renderers:

- `SwitchRender`: Defines the switch element renderer
- `RailRender`: Defines the rail element renderer
