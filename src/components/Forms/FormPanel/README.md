### ✅ Basic usage

```jsx
import { FormPanel, FormGroup, Label, Input } from 'beautiful-react-ui';

<FormPanel>
    <FormGroup>
      <Label required htmlFor="field-id">Address</Label>
      <Input id="field-id" value="Westminster, London SW1A 1AA, United Kingdom" fluid icon="map" />
    </FormGroup>
    <FormGroup>
      <Label required htmlFor="field-id2">Phone</Label>
      <Input id="field-id2" value="+44 303 123 7300" fluid icon="phone" />
    </FormGroup>
</FormPanel>
```

### Label

```jsx
import { FormPanel, FormGroup, Label, Input } from 'beautiful-react-ui';

<FormPanel label="Buckingham Palace">
    <FormGroup>
      <Label required htmlFor="field-id">Address</Label>
      <Input id="field-id" value="Westminster, London SW1A 1AA, United Kingdom" fluid icon="map" />
    </FormGroup>
    <FormGroup>
      <Label required htmlFor="field-id2">Phone</Label>
      <Input id="field-id2" value="+44 303 123 7300" fluid icon="phone" />
    </FormGroup>
</FormPanel>
```

### Label type

```jsx
import { FormPanel, FormGroup, Label, Input } from 'beautiful-react-ui';

<FormPanel label="Buckingham Palace" labelType="title">
    <FormGroup>
      <Label required htmlFor="field-id">Address</Label>
      <Input id="field-id" value="Westminster, London SW1A 1AA, United Kingdom" fluid icon="map" />
    </FormGroup>
    <FormGroup>
      <Label required htmlFor="field-id2">Phone</Label>
      <Input id="field-id2" value="+44 303 123 7300" fluid icon="phone" />
    </FormGroup>
</FormPanel>
```

### 🎓 Renderers:

- `LabelRender`: defines the component to be used for label rendering

