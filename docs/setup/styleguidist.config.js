const path = require('path');
const theme = require('./styleguidist.theme');

module.exports = {
  title: 'beautiful-react-ui | A collection of lightweight and easy-to-customise controlled React components',
  /* eslint-disable global-require */
  webpackConfig: require('./styleguidist.webpack'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  ribbon: {
    url: 'https://github.com/beautifulinteractions/beautiful-react-ui',
    text: 'Fork me on GitHub',
  },
  styleguideDir: '../../dist-ghpages',
  exampleMode: 'collapse',
  usageMode: 'collapse',
  pagePerSection: true,
  sortProps: props => props,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Getting started',
      content: '../getting-started.md',
      sectionDepth: 1,
    },
    {
      name: 'Customise',
      content: '../customising.md',
      sectionDepth: 1,
    },
    {
      name: 'Elements',
      pagePerSection: true,
      components: () => [
        '../../src/components/Elements/Alert/Alert.js',
        '../../src/components/Elements/Avatar/Avatar.js',
        '../../src/components/Elements/Breadcrumbs/Breadcrumbs.js',
        '../../src/components/Elements/Button/Button.js',
        '../../src/components/Elements/ButtonGroup/ButtonGroup.js',
        '../../src/components/Elements/DropDown/DropDown.js',
        '../../src/components/Elements/Icon/Icon.js',
        '../../src/components/Elements/Image/Image.js',
        '../../src/components/Elements/Pill/Pill.js',
        '../../src/components/Elements/Placeholder/Placeholder.js',
        '../../src/components/Elements/Spinner/Spinner.js',
        '../../src/components/Elements/Tab/Tab.js',
        '../../src/components/Elements/Popover/Popover.js',
        '../../src/components/Elements/Tooltip/Tooltip.js',
        '../../src/components/Elements/ProgressBar/ProgressBar.js',
        '../../src/components/Elements/FloatingContent/FloatingContent.js',
      ],
    },
    {
      name: 'Forms',
      pagePerSection: true,
      components: () => [
        '../../src/components/Forms/Label/Label.js',
        '../../src/components/Forms/Input/Input.js',
        '../../src/components/Forms/Select/Select.js',
        '../../src/components/Forms/ToggleSwitch/ToggleSwitch.js',
        '../../src/components/Forms/Checkbox/Checkbox.js',
        '../../src/components/Forms/TextArea/TextArea.js',
        '../../src/components/Forms/DisplayField/DisplayField.js',
        '../../src/components/Forms/FormGroup/FormGroup.js',
        '../../src/components/Forms/FormPanel/FormPanel.js',
        '../../src/components/Forms/FileUploader/FileUploader.js',
      ],
    },
    {
      name: 'Typography',
      pagePerSection: true,
      components: () => [
        '../../src/components/Typography/Title/Title.js',
        '../../src/components/Typography/Paragraph/Paragraph.js',
        '../../src/components/Typography/Link/Link.js',
        '../../src/components/Typography/Divider/Divider.js',
      ],
    },
    {
      name: 'Layout',
      pagePerSection: true,
      components: () => [
        '../../src/components/Layout/Accordion/Accordion.js',
        '../../src/components/Layout/List/List.js',
        '../../src/components/Layout/Grid/Grid.js',
        '../../src/components/Layout/Card/Card.js',
        '../../src/components/Layout/Sidebar/Sidebar.js',
        '../../src/components/Layout/Modal/Modal.js',
        '../../src/components/Layout/NotificationsStack/NotificationsStack.js'
      ],
    },
    {
      name: 'Hooks',
      content: '../hooks.md',
      sectionDepth: 1,
    },
  ],
  // Override styleguidist standard components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'EmptyComponent'),
    PathlineRenderer: path.join(__dirname, 'EmptyComponent'),
    ToolbarButtonRenderer: path.join(__dirname, 'EmptyComponent'),
    TabButtonRenderer: path.join(__dirname, 'CustomTabButton'),
    TableOfContentsRenderer: path.join(__dirname, 'CustomSidebar'),
    ComponentsListRenderer: path.join(__dirname, 'CustomComponentListRenderer'),
  },
  ...theme,
};
