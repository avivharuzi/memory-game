import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CardComponent } from './card.component';

export default {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
  template:
    '<div style="width: 300px"><memory-game-card' +
    ' [imgSrc]="imgSrc"></memory-game-card></div>',
});

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://image.tmdb.org/t/p/original/1QqaRZ8neYlqLx7ODZC4as47wUV.jpg',
};
