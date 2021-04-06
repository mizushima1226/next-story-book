import { AppTitle } from "./AppTitle";

export default {
  component: AppTitle,
  title: 'src/compoents/AppTitle.tsx',
  includeStories: ['Default'],
};

export const props = {
  text: 'Reach Script'
};

export const Default = () => {
  return <AppTitle text="Reach Script" />
};