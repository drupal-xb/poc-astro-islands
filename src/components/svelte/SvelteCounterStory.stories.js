import SvelteCounter from './SvelteCounter.svelte';

export default {
  title: 'Example/SvelteCounter',
  component: SvelteCounter,
};

const Template = ({ count, slotContent }) => ({
  Component: SvelteCounter,
  props: {
    count
  },
  slots: {
    slot1: slotContent, 
  }
});

export const Primary = Template.bind({});
Primary.args = {
  count: 5,
  slotContent: 'Hello from Svelte Counter'
};