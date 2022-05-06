### ✅ Basic usage

Since Accordion is a controlled component, it needs to be wrapped within an uncontrolled one providing its state via props.

The `active` prop defines the id of the open content, whilst the `onChange` callback will be performed when clicking 
on the title button.

```jsx
import React, { useCallback } from 'react';
import { Accordion } from 'beautiful-react-ui';

/**
 * Let's wrap the Accordion into an uncontrolled component providing its state via props.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = useCallback((event, nextContentId) => {
     setCurrent(nextContentId === current ? null : nextContentId);
  }, [current]);

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Why were cornflakes invented?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Why do dogs eat grass?">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="How many ounces in a cup?">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};

<UncontrolledAccordion />
```

### Color

The `color` prop allows defining the accordion title and caret color.

The supported colors are `primary`, `secondary`, `info`, `success`, `warning`, `danger`.

```jsx
import React, { useCallback } from 'react';
import { Accordion } from 'beautiful-react-ui';

/**
 * Let's wrap the Accordion into an uncontrolled component providing its state via props.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = useCallback((event, nextContentId) => {
     setCurrent(nextContentId === current ? null : nextContentId);
  }, [current]);

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Why were cornflakes invented?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Why do dogs eat grass?">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="How many ounces in a cup?">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};


<UncontrolledAccordion color="primary" />
```

### Usage with list

```jsx
import React, { useCallback } from 'react';
import { Accordion, List } from 'beautiful-react-ui';

/**
 * Let's wrap the Accordion into an uncontrolled component providing its state via props.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = useCallback((event, nextContentId) => {
     setCurrent(nextContentId === current ? null : nextContentId);
  }, [current]);

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Why were cornflakes invented?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Why do dogs eat grass?">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="How many ounces in a cup?">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};

<UncontrolledAccordion />
```

### Keep multiple panels open

```jsx
import React, { useCallback } from 'react';
import { Accordion, List } from 'beautiful-react-ui';

/**
 * Let's wrap the Accordion into an uncontrolled component providing its state via props.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState([0]);

  const onChangeHandler = useCallback((event, nextContentId) => {
      const nextActivePanels = current.includes(nextContentId) 
        ? current.filter((item) => item!== nextContentId)
        : [...current, nextContentId]
      setCurrent(nextActivePanels);
  }, [current]);

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Why were cornflakes invented?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Why do dogs eat grass?">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="How many ounces in a cup?">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};

<UncontrolledAccordion />
```



### 🎓 Handlers:

- `onChange`: fires when clicking on the accordion title

### 🎓 Renderers:

- `ElementRender`: A renderer to replace the accordion element instead of the default one.
- Accordion.Content `ButtonRender`: A renderer to replace the title button of the Accordion.Content
- Accordion.Content `CaretRender`: A renderer to replace the caret element of the Accordion.Content
- Accordion.Content `ElementRender`: A renderer to replace the content element of an Accordion.Content
- Accordion.Content `ContentRender`: A renderer to replace the content wrapper element of the content an the Accordion.Content
