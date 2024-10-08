// card.stories.js
import card from './card.twig';

export default {
  title: 'Components/Card',
  component: card,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
};

export const Default = {
  args: {
    title: 'My card',
    message: 'My message'
  }
};
