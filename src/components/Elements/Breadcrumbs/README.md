### Basic Usage

```jsx
import { Breadcrumbs } from 'beautiful-react-ui';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/section', label: 'Section'},
  { label: 'Current page'}
];

<Breadcrumbs items={pages}/>
```

### Colors

Defining a color helps highlighting the clickable paths, the default color is set to `primary`.

```jsx
import { Breadcrumbs } from 'beautiful-react-ui';

const pages = [
    { path: '/', label: 'Home' },
    { path: '/section', label: 'Section'},
    { label: 'Current page'}
];

<>
  <Breadcrumbs items={pages} color="default"/>
  <Breadcrumbs items={pages} color="primary"/>
  <Breadcrumbs items={pages} color="secondary"/>
  <Breadcrumbs items={pages} color="info"/>
  <Breadcrumbs items={pages} color="warning"/>
  <Breadcrumbs items={pages} color="danger"/>
</>
```

### Icons

It's possible to attach an icon to a path label by passing a valid icon prop
(the icon name, an array of valid icon names or the instance of an Icon component).

```jsx
import { Breadcrumbs, Icon } from 'beautiful-react-ui';

const pages = [
    { path: '/', label: 'Home' ,icon:'home'},
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" />   }
];

<Breadcrumbs items={pages}/>
```


### Renderer

If defined, the `render` property changes the usual behavior of that breadcrumb.

```jsx
import { Icon } from 'beautiful-react-ui';

const CustomRenderer = (props) => (<span key="test" style={{background:'red'}}>{props.label}</span>);

const pages = [
    { path: '/', label: 'Home' ,icon:'home' },
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" /> , render: CustomRenderer,  }
];

<Breadcrumbs items={pages}/>
```

### MaxDisplayedItems

If defines, the `maxDisplayedItems` allows to show only a certain number of breadcrumbs elements, hiding the others in a drop-down menu.


```jsx
import { Icon } from 'beautiful-react-ui';

const CustomRenderer = (props) => (<span key="test" style={{background:'red'}}>{props.label}</span>);

const pages = [
    { path: '/', label: 'Home' ,icon:'home' },
    { path: '/section1', label: 'Section1'},
    { path: '/section2', label: 'Section2'},
    { path: '/section3', label: 'Section3'},
    { path: '/section4', label: 'Section4'},
    { path: '/section5', label: 'Section5' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" />   }
];

<Breadcrumbs items={pages} maxDisplayedItems={2}/>
```
