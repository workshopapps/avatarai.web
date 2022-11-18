# GETTING UP AND RUNNING WITH THE PROJECT

## SETTING UP STORYBOOK

Please make sure you familiarize yourself with Storybook by checking the [official docs](https://storybook.js.org/docs/react/get-started/introduction)

### Installing and running Storybook locally

To start Storybook locally run the following command. Your local address will be shown in the terminal.

```
npm run storybook
```

### Creating component stories with Storybook

- Create your components inside your named directory under the `./src/components/` directory.
- Create a story with the naming convention `<Your Component Name>/stories.jsx` in the `./src/stories/` folder.
- In your story stories.jsx file, export a default object like shown below 👇🏾
```
import <Your Component Name> from "../components/<Your Component Directory Name>/<Your Component Name>"

export default = {
  title: "<Your Component Directory Name>/<Name of Component>",
  component: <Your Component Name>
}
```


## TESTING WITH JEST
