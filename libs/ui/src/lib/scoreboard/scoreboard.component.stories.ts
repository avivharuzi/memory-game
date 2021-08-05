import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { ParagraphModule } from '../paragraph/paragraph.module';
import { ScoreboardComponent } from './scoreboard.component';

export default {
  title: 'Components/Scoreboard',
  component: ScoreboardComponent,
  decorators: [
    moduleMetadata({
      imports: [ParagraphModule],
    }),
  ],
} as Meta<ScoreboardComponent>;

const Template: Story<ScoreboardComponent> = (args: ScoreboardComponent) => ({
  component: ScoreboardComponent,
  props: args,
  template: `<memory-game-scoreboard>
<memory-game-paragraph>Score 100</memory-game-paragraph>
</memory-game-scoreboard>`,
});

export const Primary = Template.bind({});
Primary.args = {};
