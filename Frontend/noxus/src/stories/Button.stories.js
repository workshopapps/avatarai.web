import Button from "../components/Button";

export default {
  // The title of your story should take the format of <Your Folder Name>/<Component Name>.
  title: "Akuya/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});
export const Secondary = ButtonTemplate.bind({});

Primary.args = {
  text: "Click Me",
  type: "primary",
};

Secondary.args = {
  text: "Click Me",
  type: "secondary",
};
