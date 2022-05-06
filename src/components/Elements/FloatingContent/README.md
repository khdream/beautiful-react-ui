### Basic Usage

Using a FloatingContent requires the `trigger` prop (generally another React component) to be defined.
<br/>
As the FloatingContent component is a controlled component we should also define both `onToggle`
and `isShown` props.

```jsx
import { FloatingContent, Button } from 'beautiful-react-ui';

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent {...props} onToggle={() => setIsShown(!isShown)} isShown={isShown}>
      <div style={{ padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<>
  <UncontrolledFloatingContent trigger={<Button style={{ marginRight: '1rem' }}>Button trigger, click me</Button>} />
  <UncontrolledFloatingContent trigger="String trigger, click me" />
</>
```

### Placement

The `placement` prop defines the placement of the floating content over the `trigger`:
Could be `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-center`, `right-center`.


```jsx
import { FloatingContent, Button } from 'beautiful-react-ui';

const Trigger = ({ title }) => (
  <Button fluid color="primary">show a {title} placed floating content</Button>
);

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent onToggle={() => setIsShown(!isShown)} isShown={isShown} trigger={<Trigger title={props.placement} />} {...props} >
      <div style={{ padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<>
  <UncontrolledFloatingContent placement="top-left"/>
  <UncontrolledFloatingContent placement="top-right"/>
  <UncontrolledFloatingContent placement="top-center"/>
  <UncontrolledFloatingContent placement="bottom-left"/>
  <UncontrolledFloatingContent placement="bottom-right"/>
  <UncontrolledFloatingContent placement="bottom-center"/>
  <UncontrolledFloatingContent placement="left-center"/>
  <UncontrolledFloatingContent placement="right-center"/>
</>
```

### Action

The `action` defines when to fire the `onToggle` callback, it can be `click` or `hover`.

```jsx
import { FloatingContent, Button } from 'beautiful-react-ui';

const Trigger = ({ title }) => (
  <Button color="success" style={{marginRight: '1.25rem'}}>Show a floating content on {title}</Button>
);

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent onToggle={() => setIsShown(!isShown)} isShown={isShown} trigger={<Trigger title={props.action} />} {...props} >
      <div style={{ padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<>
  <UncontrolledFloatingContent action="hover"/>
  <UncontrolledFloatingContent action="click"/>
</>
```

### Click outside

By design, if the `action` prop is set to `click`, the floating content will toggle when clicking 
outside of it, it's possible to disable this feature by setting `clickOutsideToToggle` to false.

```jsx 
import { Button, FloatingContent } from 'beautiful-react-ui';

const Trigger = (<Button>Click to close</Button>);

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent onToggle={() => setIsShown(!isShown)} isShown={isShown} trigger={Trigger} {...props} >
      <div style={{ padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<UncontrolledFloatingContent clickOutsideToToggle={false}/>
```


### Offset

The `offset` defines a number in pixel to possibly separate the floating content from its trigger

```jsx
import { Button, FloatingContent } from 'beautiful-react-ui';

const Trigger = (<Button>Show a floating content with a 40px offset</Button>);

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent onToggle={() => setIsShown(!isShown)} isShown={isShown} trigger={Trigger} {...props} >
      <div style={{ padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<UncontrolledFloatingContent offset={40}/>
```

### ReversePlacementOnSmallSpace

The `reversePlacementOnSmallSpace` checks if the FloatingContent component has enough space to be shown.

```jsx
import { Button, FloatingContent } from 'beautiful-react-ui';

const Trigger = (<Button>Button trigger, click me</Button>);

const UncontrolledFloatingContent = (props) => {
  const [isShown, setIsShown] = React.useState(false); 

  return (
    <FloatingContent placement="bottom-center" onToggle={() => setIsShown(!isShown)} isShown={isShown} trigger={Trigger} {...props} >
      <div style={{ height:'300px',padding: '0.625rem', background: '#ED254E', borderRadius: '0.315rem' }}>
        Lorem ipsum&hellip;
      </div>
    </FloatingContent>
  );
};

<UncontrolledFloatingContent />
```