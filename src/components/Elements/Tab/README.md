### Basic usage

```jsx
const TabStateful = () =>{
  const [current,setCurrent] = React.useState(0);

return (
  <Tab onChange={setCurrent} active={current}>
    <Tab.Content title='home'>
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.</p>
    </Tab.Content>
    <Tab.Content title='profile'>
      <p>Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.</p>
    </Tab.Content>
    <Tab.Content title='contact'>
      <p>Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </Tab.Content>
  </Tab>
  );
};
<TabStateful />
```


### Link colors
We can define the tab's links color.

```jsx
const TabStateful = (props) =>{
  const [current, setCurrent] = React.useState(0);

return (
  <Tab {...props} onChange={setCurrent} active={current}>
    <Tab.Content title='home'>
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.</p>
    </Tab.Content>
    <Tab.Content title='profile'>
      <p>Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.</p>
    </Tab.Content>
    <Tab.Content title='contact'>
      <p>Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </Tab.Content>
  </Tab>
  );
};


<>
  <TabStateful color="primary" />
  <TabStateful color="secondary" />
  <TabStateful color="info" />
  <TabStateful color="success" />
  <TabStateful color="warning" />
  <TabStateful color="danger" />
</>
```

### Icons
The tab's labels might possibly contain icons.
<small>**Please note**: the icon prop accepts all the valid font-awesome icon names for it is abstracted on top of it.</small>

```jsx
const TabStateful = (props) =>{
  const [current,setCurrent] = React.useState(0);

return (
  <Tab {...props} onChange={setCurrent} active={current}>
    <Tab.Content title='home' icon='home'>
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.</p>
    </Tab.Content>
    <Tab.Content title='' icon='building'>
      <p>Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.</p>
    </Tab.Content>
    <Tab.Content title='contact'>
      <p>Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </Tab.Content>
  </Tab>
  );
};

<TabStateful />
```


### Disabled
It is possible to disable a tab's label.

```jsx
const TabStateful = (props) =>{
  const [current,setCurrent] = React.useState(0);

return (
  <Tab {...props} onChange={setCurrent} active={current}>
    <Tab.Content title='home'>
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.</p>
    </Tab.Content>
    <Tab.Content title='profile' disabled>
      <p>Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.</p>
    </Tab.Content>
    <Tab.Content title='contact'>
      <p>Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </Tab.Content>
  </Tab>
  );
};


<TabStateful />
```

### Orientation
The ``orientation`` prop will change the Tab orientation.
By default its value is set to horizontal.

```jsx
const TabStateful = (props) =>{
  const [current,setCurrent] = React.useState(0);

return (
  <Tab {...props} onChange={setCurrent} active={current} orientation='vertical'>
    <Tab.Content title='home' >
      <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.</p>
    </Tab.Content>
    <Tab.Content title='profile' >
      <p>Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.</p>
    </Tab.Content>
    <Tab.Content title='contact'>
      <p>Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
    </Tab.Content>
  </Tab>
  );
};

<TabStateful />
```

