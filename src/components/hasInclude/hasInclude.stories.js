// card.stories.js
import card from './HasInclude.twig';

export default {
  title: 'Components/HasInclude',
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
