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
- Make sure to add your folder name in the title of the story so that it groups your components well under one folder.

```javascript
import MyComponent from "../components/my-folder/MyComponent"

export default = {
  title: "my-folder/MyComponent",
  component: <MyComponent>
}
```

- If your component has variations, ensure you've appropriately added the variants of your component in the stories.jsx file.
