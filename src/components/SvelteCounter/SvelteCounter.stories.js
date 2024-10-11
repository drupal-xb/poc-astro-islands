import SvelteCounter from './SvelteCounter.svelte';
export default {
  component: SvelteCounter,
};

export const Primary = {
  render: args => ({
    Component: SvelteCounter,
    props: args,
  }),
  args: {
    count: 5,
    // @todo: look into svelte slots for storybook.
    slot1: 'helloooooo'
  },
}