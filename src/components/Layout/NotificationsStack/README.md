### ✅ Basic Usage

Since `NotificationsStack` is a controlled component it requires its state to be provided from the parent, meaning that an array of notifications and an onChange callback function should be provided.
The notifications array is an array of objects: each object represent one notification, and it must have an id and a content property.
The id is very important to the `NotificationsStack` component because it is used to manage the notification removal.
For the other object's properties please take a look at the props.

```jsx 
import { Button, NotificationsStack } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = () => ({ id: uniqueId(), content: 'you got new message' });

const UncontrolledNotificationsStack = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return (
    <>
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props} notifications={notifications} onChange={setNotifications} />
    </>
  );
};

<UncontrolledNotificationsStack />
``` 

### Title
The `title` property into the notification object is used to add a notification title.

```jsx 
import { Button, NotificationsStack } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = () => ({ id: uniqueId(), title: 'New e-mail', content: 'you got new e-mail', icon:'envelope-open' });

const UncontrolledNotificationsStack = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return (
    <>
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props} notifications={notifications} onChange={setNotifications} />
    </>
  );
};

<UncontrolledNotificationsStack />
``` 

### Icon and Avatar
The `icon` and `avatar` could be use to customize the left side of the notification.
Those are properties of the object passed to the `NotificationStack` component. 


```jsx 
import { Button, Notification, Select } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';
  
const createMessage = (leftRender) => {
  if (leftRender === 'icon') {
    return { id: uniqueId(), title: 'New e-mail', content: 'you got new message', icon: 'home' }
  } else if (leftRender === 'avatar') {
    return { id: uniqueId(), title: 'New e-mail', content: 'you got new message', avatar: 'https://placeimg.com/96/96/animal'}
  }
};

const options = [
  { label: 'icon', value: 'icon' },
  { label: 'avatar', value: 'avatar' }
];

const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const onClickHandler = () => setNotifications([...notifications, createMessage(selected)]);

  return(
    <>
      <Select options={options} onChange={(item) => setSelected(item)} value={selected} style={{marginRight:'1rem'}} />
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props} notifications={notifications} onChange={setNotifications} />
    </>
  );
};

<UncontrolledNotification />
```

### Position
The `position` prop defines where the notification should appear over the page.
Could be `top-center`, `top-left`, `top-right`, `bottom-center`, `bottom-left`, `bottom-right`.
Please, choose a position you want to see by choosing it from the drop-down list and then click on the button.
  
```jsx 
import { Button, Notification, Select } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';
  
const createMessage = () => ({ id: uniqueId(), title: 'New e-mail', content: 'you got new message' });
const options = [
  { label: 'top-center', value: 'top-center' },
  { label: 'top-right', value: 'top-right' },
  { label: 'top-left', value: 'top-left' },
  { label: 'bottom-center', value: 'bottom-center'},
  { label: 'bottom-left', value: 'bottom-left'},
  { label: 'bottom-right', value: 'bottom-right'}
];

const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return(
    <>
      <Select options={options} onChange={(item) => setSelected(item)} value={selected} style={{marginRight:'1rem'}} />
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props} notifications={notifications} onChange={setNotifications} position={selected}/>
    </>
  );
};

<UncontrolledNotification />
```

### Timeout
The `timeout` prop defines after how many millisecond the notification will disappear.
To turn off the `timeout` it is required to set it to `false`.


```jsx 
import { Button, Notification, Select } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = (timeout) => ({ id: uniqueId(), content: `The timeout is set to ${timeout}`, timeout:timeout});
const options = [
  { label: 'with timeout', value: 3000 },
  { label: 'without timeout', value: 'false' },
];
const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const onClickHandler = () => setNotifications([...notifications, createMessage(selected)]);

  return(
    <>
      <Select options={options} onChange={(item) => setSelected(item)} value={selected} style={{marginRight:'1rem'}} />
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props}  notifications={notifications} onChange={setNotifications}/>
    </>
  );
};


<> 
  <UncontrolledNotification />
</>
```

### Closable
The `closable` prop defines if the notification should have a closable button to close it: set it to false will remove the button.
The Notification component could be closable both if there's `timeout` set or not.


  ```jsx 
import { Button, Notification } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = () => ({ id: uniqueId(), content: 'you got new message', closable:false });

const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return(
    <>
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props}  notifications={notifications} onChange={setNotifications} position='top-right'/>
    </>
  );
};

  <UncontrolledNotification />
```

### Animation
By default, the notification pop-in performing a `slide-right` animation, it's possible to change
this behaviour by changing the value of the `animation` prop.
Please, select the animation you want to see by choosing it from the drop-down list and then click on the button.

```jsx 
import { Button, Notification, Select } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = () => ({ id: uniqueId(), content: 'you got new message' });
const options = [
  { label: 'none', value: 'none' },
  { label: 'slide-right', value: 'slide-right' },
  { label: 'slide-top', value: 'slide-top' },
  { label: 'slide-left', value: 'slide-left' },
  { label: 'slide-bottom', value: 'slide-bottom'},
  { label: 'zoom', value: 'zoom'},
  { label: 'fade', value: 'fade'}
];

const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return(
    <>
      <Select options={options} onChange={(item) => setSelected(item)} value={selected} style={{marginRight:'1rem'}} />
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props}  notifications={notifications} onChange={setNotifications} animation={selected}/>
    </>
  );
};

<> 
  <UncontrolledNotification />
</>
```


### Color
The `color` prop is useful to let the user understand quickly the notification kind.
Please, select the color you want to see by choosing it from the drop-down list and then click on the button.

```jsx
import { Button, Notification, Select } from 'beautiful-react-ui';
import uniqueId from 'lodash/uniqueId';

const createMessage = () => ({ id: uniqueId(), title: 'New e-mail', content: 'you got new message' });
const options = [
  { label: 'default', value: 'default' },
  { label: 'info', value: 'info' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'danger', value: 'danger'}
];

const UncontrolledNotification = (props) => {
  const [notifications, setNotifications] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const onClickHandler = () => setNotifications([...notifications, createMessage()]);

  return (
    <>
      <Select options={options} onChange={(item) => setSelected(item)} value={selected} style={{marginRight:'1rem'}} />
      <Button color="primary" onClick={onClickHandler}>Show notification</Button>
      <NotificationsStack {...props} notifications={notifications} onChange={setNotifications} color={selected} />
    </>
  );
};

<UncontrolledNotification />
```


### 🎓 Handlers:

- `onChange`: fires when clicking on the close notification button or on timeout.


### 🎓 Renderers:

- `NotificationRender`: a renderer to replace the standard notification element
