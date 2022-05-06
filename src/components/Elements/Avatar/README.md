### ✅ Basic usage

```jsx
import { Avatar } from 'beautiful-react-ui';

<Avatar src="https://placeimg.com/96/96/people" />
```

### Initials

```jsx
import { Avatar } from 'beautiful-react-ui';

<Avatar initials="ar" />
```

### Shapes

```jsx
import { Avatar } from 'beautiful-react-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" shape="rounded" />
  <Avatar initials="ar" shape="square" />
</>
```

### Sizes

```jsx
import { Avatar } from 'beautiful-react-ui';

<>
  <Avatar initials="ar" size="small" />
  <Avatar initials="ar" size="default" />
  <Avatar initials="ar" size="large" />
</>
```

### Pills

It's possible to add a pill within a Avatar to possibly show further information such as a 
notification number.

```jsx
import { Avatar, Pill } from 'beautiful-react-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" pill="10" />
  <Avatar initials="ar" pill={<Pill color="primary">10</Pill>} />
</>
```

### State

```jsx
import { Avatar, Pill } from 'beautiful-react-ui';

<>
  <Avatar initials="ar" state="offline" />
  <Avatar src="https://placeimg.com/96/96/people" state="online" />
  <Avatar src="https://placeimg.com/96/96/people" state="danger" />
</>
```


### Additional information

Additionally an Avatar component can show the user display name or further information, if provided.

#### Display name

```jsx
import { Avatar, Pill } from 'beautiful-react-ui';


<Avatar src="https://placeimg.com/96/96/people" displayName="John Doe" />
```

#### Further info

In addition to `displayName` we can possibly add further user information such as
the user role or the user email by using the `furtherInfo` prop

```jsx
import { Avatar, Pill } from 'beautiful-react-ui';

<Avatar src="https://placeimg.com/96/96/people" displayName="John Doe" furtherInfo="Admin" />
```

### 🎓 Renderers:

- `ElementRender`: A render function to be used as the wrapper element component instead of the default one.
- `ImageRender`: A render function to be used as the image component instead of the default one.
- `TextRender`: A render function to be used as the text component instead of the default one.
