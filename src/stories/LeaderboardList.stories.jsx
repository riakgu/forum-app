import React from 'react';
import LeaderboardList from "../components/LeaderboardList";
export default {
    title: 'Components/LeaderboardList',
    component: LeaderboardList,
};

const mockLeaderboards = [
    {
        user: {
            id: 'user-1',
            avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
            name: 'John Doe',
        },
        score: 100,
    },
    {
        user: {
            id: 'user-2',
            avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
            name: 'Jane Smith',
        },
        score: 80,
    },
    {
        user: {
            id: 'user-3',
            avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=random',
            name: 'Bob Johnson',
        },
        score: 60,
    },
];

const Template = (args) => <LeaderboardList {...args} />;

export const Default = Template.bind({});
Default.args = {
    leaderboards: mockLeaderboards,
};

export const NoLeaderboards = Template.bind({});
NoLeaderboards.args = {
    leaderboards: [],
};
