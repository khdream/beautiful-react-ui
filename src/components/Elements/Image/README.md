### Basic Usage

```jsx
import { Image } from 'beautiful-react-ui';

<Image src="https://placeimg.com/640/480" alt="Alt text" />
```

### Thumbnail style

The thumbnail style adds borders to the image, please be aware it does not define its size.

```jsx
import { Image } from 'beautiful-react-ui';

<Image src="https://placeimg.com/120/120" alt="Alt text" thumb />
```

### Rounded style

The `rounded` prop applies a fully rounded style to the image.

```jsx
import { Image } from 'beautiful-react-ui';

<Image src="https://placeimg.com/120/120" alt="Avatar" rounded />
```

### Standard <img> props:

It is possible to use all the standard attributes of the `img` tag as the props are spread down to it: 

```jsx
import { Image } from 'beautiful-react-ui';

<Image src="https://placeimg.com/1240/1240" width={400} height={400} />
```
