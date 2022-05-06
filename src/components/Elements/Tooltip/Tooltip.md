### Basic Usage

The Tooltip component is built on top of the [Popover](#/Components/Elements/Popover) component, so it 
requires the props `onToggle`, `isShown` and `trigger` to be defined.
<br/>

```jsx
import { Tooltip, Button } from 'beautiful-react-ui';

const UncontrolledTooltip = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Tooltip {...props} onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Tooltip>
  );
};

<UncontrolledTooltip trigger={<Button style={{ marginRight: '1rem' }}>Button trigger, hover me</Button>} />
```

### Placement

The `placement` prop defines the placement of the popover over the `trigger`:
Could be `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-center`, `right-center`.


```jsx
import { Button } from 'beautiful-react-ui';

const Trigger = ({ title }) => (
  <Button fluid color="primary">show a {title} placed popover</Button>
);

const UncontrolledTooltip = ({ placement }) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Tooltip onToggle={() => setIsOpen(!isOpen)} trigger={<Trigger title={placement} />} placement={placement} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Tooltip>
  );
};

<>
  <UncontrolledTooltip placement="top-left"/>
  <UncontrolledTooltip placement="top-right"/>
  <UncontrolledTooltip placement="top-center"/>
  <UncontrolledTooltip placement="bottom-left"/>
  <UncontrolledTooltip placement="bottom-right"/>
  <UncontrolledTooltip placement="bottom-center"/>
  <UncontrolledTooltip placement="left-center"/>
  <UncontrolledTooltip placement="right-center"/>
</>
```
