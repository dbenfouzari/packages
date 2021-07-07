/**
 * Generate the index file
 **/
export const generateIndexFile = (fileName: string) => {
  return `export { default } from './${fileName}';
`;
};

/**
 * Generate the react-native component file
 **/
export const generateNativeComponentFile = (componentName: string) => {
  return `import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ${componentName}Props {}

const ${componentName}: React.FC<${componentName}Props> = () => (
  <View style={styles.wrapper}>
    <Text>Hello World</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
});

export default ${componentName};
`;
};

/**
 * Generate the react component file
 **/
export const generateComponentFile = (componentName: string) => {
  return `import React from 'react';

interface ${componentName}Props {}

const ${componentName}: React.FC<${componentName}Props> = () => (
  <div>
    <p>Hello World</p>
  </div>
);

export default ${componentName};
`;
};

/**
 * Generate the react-native test file
 **/
export const generateNativeTestFile = (componentName: string, fileName: string) => {
  return `import { render } from '@testing-library/react-native';
import React from 'react';

import ${componentName} from './${fileName}';

it('renders correctly', () => {
  render(<${componentName} />);
});
`;
};

/**
 * Generate the react test file
 **/
export const generateTestFile = (componentName: string, fileName: string) => {
  return `import { render } from '@testing-library/react';

import ${componentName} from './${fileName}';

it('should render successfully', () => {
  render(<${componentName} />);
});
`;
};

/**
 * Generate the react-native storybook file
 **/
export const generateNativeStoryFile = (componentName: string) => {
  return `import { storiesOf } from '@storybook/react-native';
import React from 'react';

import ${componentName} from './';

storiesOf('${componentName}', module).add('default', () => (
  <${componentName} />
));
`;
};

/**
 * Generate the react-native storybook file
 **/
export const generateStoryFile = (componentName: string, fileName: string) => {
  return `import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ${componentName} from './${fileName}';

export default {
  title: '${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;
};
