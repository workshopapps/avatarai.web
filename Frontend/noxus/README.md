## SETTING UP STORYBOOK

Please make sure you familiarize yourself with Storybook by checking the [official docs](https://storybook.js.org/docs/react/get-started/introduction)

### Installing and running Storybook locally

To start Storybook locally run the following command. Your local address will be shown in the terminal.

```bash
npm run storybook
```

### Creating component stories with Storybook

- Create your components inside your named directory under the `./src/components/` directory.
- Create a story with the naming convention `MyComponent.stories.jsx` in the `./src/stories/` folder.
- In your story stories.jsx file, export a default object like shown below 👇🏾

```javascript
import MyComponent from "../components/my-folder/MyComponent"

export default = {
  title: "my-folder/MyComponent",
  component: MyComponent,
}
```

- Make sure to add your folder name in the title of the story so that it groups your components well under one folder.
- If your component has variations, ensure you've appropriately added the variants of your component in the stories.jsx file.
- Here's a simple example of how you can add variants of your component. In the example below, the component has to variants, Primary and Secondary.

```javascript
// import your component
import MyComponent from "../components/my-folder/MyComponent"

export default = {
  title: "my-folder/MyComponent",
  component: MyComponent,
   // the following lines configure how arguements are intepreted by storybook.
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      :x
    },
  },
};

// create the story template
const MyComponentStory = (args) => <MyComponent {...args} />;

// these creates Primary and Secondary variants of MyComponent
export const Primary = MyComponentStory.bind({});
export const Secondary = MyComponentStory.bind({});

// define the args being passed into MyComponent in the respective variations
Primary.args = {
  text: "Click Me",
  type: "primary",
};

Secondary.args = {
  text: "Click Me",
  type: "secondary",
};
```
