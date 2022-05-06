### Basic usage

```jsx
import { Title } from 'beautiful-react-ui';

<Title>Page title</Title>
```

### Size

#### By size prop

```jsx
import { Title } from 'beautiful-react-ui';

<>
  <Title size="4xl">Page title</Title>
  <Title size="3xl">Page title</Title>
  <Title size="2xl">Page title</Title>
  <Title size="xl">Page title</Title>
  <Title size="lg">Page title</Title>
  <Title size="base">Page title</Title>
</>
```

#### By tag

By defining the `tagName` it's also possible to define the title size

```jsx
import { Title } from 'beautiful-react-ui';

<>
  <Title tagName="h1">Page title</Title>
  <Title tagName="h2">Page title</Title>
  <Title tagName="h3">Page title</Title>
  <Title tagName="h4">Page title</Title>
  <Title tagName="h5">Page title</Title>
  <Title tagName="h6">Page title</Title>
</>
```

### Color

```jsx
import { Title } from 'beautiful-react-ui';

<>
  <Title color="default">Page title</Title>
  <Title color="primary">Page title</Title>
  <Title color="secondary">Page title</Title>
  <Title color="info">Page title</Title>
  <Title color="success">Page title</Title>
  <Title color="warning">Page title</Title>
  <Title color="danger">Page title</Title>
</>
```

### Text align

```jsx
import { Title } from 'beautiful-react-ui';

<>
  <Title textAlign="left" tagName="h4">Left aligned title</Title>
  <Title textAlign="center" tagName="h4">Center alinged title</Title>
  <Title textAlign="right" tagName="h4">Right alinged title</Title>
</>
```

### Word break

```jsx
import { Title, Divider } from 'beautiful-react-ui';

<>
  <Title wordBreak="normal" style={{ maxWidth: '7rem', background: '#edf2f7', padding: '1rem' }}>
    A very, very looooooooooong title
  </Title>
  <Divider line="dotted" />
  <Title wordBreak="words" style={{ maxWidth: '7rem', background: '#edf2f7', padding: '1rem' }}>
    A very, very looooooooooong title
  </Title>
  <Divider line="dotted" />
  <Title wordBreak="all" style={{ maxWidth: '7rem', background: '#edf2f7', padding: '1rem' }}>
    A very, very looooooooooong title
  </Title>
  <Divider line="dotted" />
  <Title wordBreak="truncate" style={{ maxWidth: '7rem', background: '#edf2f7', padding: '1rem' }}>
    A very, very looooooooooong title
  </Title>
</>
```
