import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { ParagraphComponent } from './paragraph.component';

export default {
  title: 'Components/Paragraph',
  component: ParagraphComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ParagraphComponent>;

const Template: Story<ParagraphComponent> = (args: ParagraphComponent) => ({
  component: ParagraphComponent,
  props: args,
  template: `<memory-game-paragraph>This is example of paragraph</memory-game-paragraph>`,
});

export const Default = Template.bind({});
Default.args = {};
