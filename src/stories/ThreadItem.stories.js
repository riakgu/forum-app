import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ThreadItem from "../components/ThreadItem";

export default {
    title: 'Components/ThreadItem',
    component: ThreadItem,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Provider store={configureStore()(initialState)}>
                    <Story />
                </Provider>
            </MemoryRouter>
        ),
    ],
};

const initialState = {
    authUser: {
        id: 'user-1',
        name: 'John Doe',
        avatar: 'https://example.com/avatar.png',
    },
};

const mockThreadData = {
    owner: {
        avatar: 'https://ui-avatars.com/api/?name=Jone+Doe&background=random',
        name: 'Jane Doe',
    },
    id: 'thread-1',
    category: 'redux',
    title: 'Thread Title',
    body: 'Thread body content',
    createdAt: '2023-05-11T08:00:00.000Z',
    totalComments: 5,
    upVotesBy: ['user-1', 'user-2'],
    downVotesBy: ['user-3'],
};

const Template = (args) => <ThreadItem {...args} />;

export const Default = Template.bind({});
Default.args = { ...mockThreadData };

export const NoVotes = Template.bind({});
NoVotes.args = {
    ...mockThreadData,
    upVotesBy: [],
    downVotesBy: [],
};

export const NoComments = Template.bind({});
NoComments.args = {
    ...mockThreadData,
    totalComments: 0,
};
