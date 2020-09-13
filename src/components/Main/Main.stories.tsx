import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactElement } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = (): ReactElement => (
  <Main
    title={text('Title', 'Your app is up and running!')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components'
    )}
  />
);
