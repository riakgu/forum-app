import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HomeAction from "../components/HomeAction";

export default {
    title: 'Components/HomeAction',
    component: HomeAction,
};

const Template = (args) => (
    <MemoryRouter>
        <HomeAction {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
