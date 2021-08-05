import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: '<memory-game-button>Button</memory-game-button>',
});

export const Default = Template.bind({});
Default.args = {};
