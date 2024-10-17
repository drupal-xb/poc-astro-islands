import PreactCounter from './PreactCounter';
import { h } from 'preact';

export default {
  title: 'PreactCounter',
  component: PreactCounter,
};

const Template = (children) => (args) => <PreactCounter {...args} >
  {children}
</PreactCounter>;

export const Primary = Template(
  <div>Hello from Preact Counter</div>
).bind({});
Primary.args = {
  count: 5,
};
