### Basic Usage

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque vestibulum pharetra ultrices. Etiam id mattis odio. 
    Nam vulputate elit ac tellus luctus imperdiet.
  </Paragraph>
  <Divider />
  <Paragraph>
    Aenean mattis tempus libero, auctor rhoncus odio. 
    Mauris eget tincidunt enim. Donec quis diam et metus tristique elementum at ac dui. 
    Sed nec neque sed nulla fermentum ultrices.
  </Paragraph>
</>
```

### Divider Style

#### Dashed

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque vestibulum pharetra ultrices. Etiam id mattis odio. 
    Nam vulputate elit ac tellus luctus imperdiet.
  </Paragraph>
  <Divider line="dashed" />
  <Paragraph>
    Aenean mattis tempus libero, auctor rhoncus odio. 
    Mauris eget tincidunt enim. Donec quis diam et metus tristique elementum at ac dui. 
    Sed nec neque sed nulla fermentum ultrices.
  </Paragraph>
</>
```

#### Dotted

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque vestibulum pharetra ultrices. Etiam id mattis odio. 
    Nam vulputate elit ac tellus luctus imperdiet.
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph>
    Aenean mattis tempus libero, auctor rhoncus odio. 
    Mauris eget tincidunt enim. Donec quis diam et metus tristique elementum at ac dui. 
    Sed nec neque sed nulla fermentum ultrices.
  </Paragraph>
</>
```

### With center text
```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<Divider>Some Title</Divider>
```

### Light

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<div style={{background: '#3d4852', padding: '20px 0'}}>
  <Divider light />
</div>
```


### Double lines

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Divider fancy />
  <Divider fancy>Some Title</Divider>
</>
```
