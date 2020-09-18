import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactElement } from 'react';
import Main from '.';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: Story = (args): ReactElement => <Main {...args} />;
