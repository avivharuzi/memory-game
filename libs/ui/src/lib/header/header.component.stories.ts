import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { HeaderComponent } from './header.component';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
  template: '<memory-game-header>Header</memory-game-header>',
});

export const Default = Template.bind({});
Default.args = {};
