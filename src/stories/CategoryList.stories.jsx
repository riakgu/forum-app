import React from 'react';
import { action } from '@storybook/addon-actions';
import CategoryList from "../components/CategoryList";
export default {
    title: 'Components/CategoryList',
    component: CategoryList,
};

const categories = ['React', 'Angular', 'Vue', 'Svelte'];

const Template = (args) => <CategoryList {...args} />;

export const Default = Template.bind({});
Default.args = {
    categories,
    onKeyword: action('onKeyword'),
};

export const WithSelectedCategory = Template.bind({});
WithSelectedCategory.args = {
    ...Default.args,
    keyword: 'React',
};
