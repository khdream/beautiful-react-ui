### ✅ Basic usage

Since Sidebar is a controlled component, it needs to be wrapped within an uncontrolled one providing its state via props.

The `isOpen` prop defines whether the sidebar should be shown or hidden (**or shrunk, accordingly to its `type`**)
whilst the `onToggle` callback will be performed when clicking on the sidebar toggle button.

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar } from 'beautiful-react-ui';

// wraps the Sidebar component to handle its state
const UncontrolledSidebar = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <Sidebar isOpen={isOpen} onToggle={handleOnChange} {...props}>
      { children }
    </Sidebar>
  );
}

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F'
};

<div style={constainerStyle}>
  <UncontrolledSidebar title="Sidebar">
    <Sidebar.Item text="Home" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Item text="About" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Item text="Settings" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Item text="Logout" onClick={(e) => e.preventDefault(e)} />
  </UncontrolledSidebar>
</div>
```

### Collapsible, Group and Divider 

A **Sidebar.Collapsible** component groups into a single collapsible item components of type Sidebar.Item and/or Sidebar.Divider

A **Sidebar.Group** component groups together components of type Sidebar.Item and/or Sidebar.Divider.

A **Sidebar.Divider** shows a divider line between two items.

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar } from 'beautiful-react-ui';

// wraps the Sidebar component to handle its state
const UncontrolledSidebar = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <Sidebar isOpen={isOpen} onToggle={handleOnChange} {...props}>
      { children }
    </Sidebar>
  );
}

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F'
};

<div style={constainerStyle}>
  <UncontrolledSidebar>
    <Sidebar.Item text="Home" to="#" onClick={(e) => e.preventDefault(e)} current />
    <Sidebar.Divider />
    <Sidebar.Group text="Admin">
      <Sidebar.Item text="Users" />
      <Sidebar.Item text="Settings" />
    </Sidebar.Group>
    <Sidebar.Item text="About" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Collapsible text="Settings">
      <Sidebar.Item text="Device" />
      <Sidebar.Item text="Performances" />
    </Sidebar.Collapsible>
    <Sidebar.Item text="Logout" onClick={(e) => e.preventDefault(e)} />
  </UncontrolledSidebar>
</div>
```

### Custom Logo and Icons

Both `Sidebar.Item` and `Sidebar.Collapsible` accept an `icon` prop.

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar, Icon } from 'beautiful-react-ui';

// wraps the Sidebar component to handle its state
const UncontrolledSidebar = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <Sidebar isOpen={isOpen} onToggle={handleOnChange} {...props}>
      { children }
    </Sidebar>
  );
}

const BILogo = () => <img src="https://beautifulinteractions.com/img/logo-colorful.svg" width={120} />;

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F'
};

<div style={constainerStyle}>
  <UncontrolledSidebar headerLogo={<BILogo />}>
    <Sidebar.Item text="Home" icon="home" to="#" onClick={(e) => e.preventDefault(e)} current />
    <Sidebar.Item text="About" icon="user" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Collapsible text="Settings" icon="cog">
      <Sidebar.Item text="Device" icon={<Icon name="mobile" color="primary" />} />
      <Sidebar.Item text="Performances" icon={<Icon name="tachometer-alt" color="primary" />} />
    </Sidebar.Collapsible>
    <Sidebar.Item text="Logout" icon="power-off" onClick={(e) => e.preventDefault(e)} />
  </UncontrolledSidebar>
</div>
```

### Header customisation and accent color

Sidebar accepts a series of props to customise the Header and the accent color

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar } from 'beautiful-react-ui';

// wraps the Sidebar component to handle its state
const UncontrolledSidebar = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <Sidebar isOpen={isOpen} onToggle={handleOnChange} toggleIcon={isOpen ? 'times' : 'bars'} {...props}>
      { children }
    </Sidebar>
  );
}

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F'
};

<div style={constainerStyle}>
  <UncontrolledSidebar title="Custom title" accent="info" titleColor="success">
    <Sidebar.Item text="Home" icon="home" to="#" onClick={(e) => e.preventDefault(e)} current />
    <Sidebar.Item text="About" icon="user" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Collapsible text="Settings" icon="cog">
      <Sidebar.Item text="Device" icon="mobile" />
      <Sidebar.Item text="Performances" icon="tachometer-alt" />
    </Sidebar.Collapsible>
    <Sidebar.Item text="Logout" icon="power-off" onClick={(e) => e.preventDefault(e)} />
  </UncontrolledSidebar>
</div>
```

### Orientation

A Sidebar can be placed on the right as well as on the left

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar } from 'beautiful-react-ui';

// wraps the Sidebar component to handle its state
const UncontrolledSidebar = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <Sidebar isOpen={isOpen} onToggle={handleOnChange} toggleIcon={isOpen ? 'times' : 'bars'} {...props}>
      { children }
    </Sidebar>
  );
}

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F'
};

<div style={constainerStyle}>
  <UncontrolledSidebar orientation="right">
    <Sidebar.Item text="Home" icon="home" to="#" onClick={(e) => e.preventDefault(e)} current />
    <Sidebar.Item text="About" icon="user" to="#" onClick={(e) => e.preventDefault(e)} />
    <Sidebar.Collapsible text="Settings" icon="cog">
      <Sidebar.Item text="Device" icon="mobile" />
      <Sidebar.Item text="Performances" icon="tachometer-alt" />
    </Sidebar.Collapsible>
    <Sidebar.Item text="Logout" icon="power-off" onClick={(e) => e.preventDefault(e)} />
  </UncontrolledSidebar>
</div>
```

### Off-canvas

```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar, Button } from 'beautiful-react-ui';

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F',
  marginBottom: '20px',
};

const OffcanvasSidebarExample = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <>
      <div style={constainerStyle}>
        <Sidebar isOpen={isOpen} onToggle={handleOnChange} type="offcanvas">
          <Sidebar.Item text="Home" icon="home" to="#" onClick={(e) => e.preventDefault(e)} current />
          <Sidebar.Item text="About" icon="user" to="#" onClick={(e) => e.preventDefault(e)} />
          <Sidebar.Collapsible text="Settings" icon="cog">
            <Sidebar.Item text="Device" icon="mobile" />
            <Sidebar.Item text="Performances" icon="tachometer-alt" />
          </Sidebar.Collapsible>
          <Sidebar.Item text="Logout" icon="power-off" onClick={(e) => e.preventDefault(e)} />
        </Sidebar>
      </div>
      <Button outline rounded icon="bars" color="primary" onClick={handleOnChange}>ToggleSwitch sidebar</Button>
    </>
  );
}

<OffcanvasSidebarExample />
```

### Transition type

By design the transition type is defined as `translate`, in some cases to fit the Sidebar in your scaffold
you need to have a transition defined on `margin` left/right.


```jsx
import React, { useState, useCallback } from 'react'; 
import { Sidebar, Button } from 'beautiful-react-ui';

// a styled container having a 'hidden' overflow set is used for demo purposes
const constainerStyle = {
  height: '450px', 
  overflow: 'hidden', 
  border: '1px solid #F2EFED', 
  background: '#2C363F',
  marginBottom: '20px',
};

const OffcanvasSidebarExample = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOnChange = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  
  return (
    <>
      <div style={constainerStyle}>
        <Sidebar isOpen={isOpen} onToggle={handleOnChange} transitionType="margin" type="offcanvas">
          <Sidebar.Item text="Home" icon="home" to="#" onClick={(e) => e.preventDefault(e)} current />
          <Sidebar.Item text="About" icon="user" to="#" onClick={(e) => e.preventDefault(e)} />
          <Sidebar.Collapsible text="Settings" icon="cog" showOpen>
            <Sidebar.Item text="Device" icon="mobile" />
            <Sidebar.Item text="Performances" icon="tachometer-alt" />
          </Sidebar.Collapsible>
          <Sidebar.Item text="Logout" icon="power-off" onClick={(e) => e.preventDefault(e)} />
        </Sidebar>
      </div>
      <Button outline rounded icon="bars" color="primary" onClick={handleOnChange}>ToggleSwitch sidebar</Button>
    </>
  );
}

<OffcanvasSidebarExample />
```

### 🎓 Handlers:

- `onToggle`: fires when clicking on the sidebar toggle
- Sidebar.Item `onClick`: fires when clicking on a single item, can be useful to prevent default behaviour

### 🎓 Renderers:

- `HeaderRender`: a renderer to replace the standard sidebar Header component
- `ElementRender`: a renderer to replace the standard sidebar element
- `NavRender`: a renderer to replace the standard nav element
- Sidebar.Item -> `LinkRender`: a render to replace the standard link component, useful to integrate third party libraries such as `react-router`;
- Sidebar.Item -> `ElementRender`: a render to replace the standard item element
- Sidebar.Collapsible -> `LinkRender`: a render to replace the standard link component, useful to integrate third party libraries such as `react-router`;
- Sidebar.Collapsible -> `ElementRender`: a render to replace the standard collapsible element
- Sidebar.Collapsible -> `ListRender`: a render to replace the standard list element
- Sidebar.Divider -> `ElementRender`: a render to replace the standard divider element
- Sidebar.SidebarGroup -> `ElementRender`: a render to replace the standard group element
- Sidebar.SidebarGroup -> `ListRender`: a render to replace the standard list element
- Sidebar.SidebarGroup -> `ItemRender`: a render to replace the standard item wrapper element
