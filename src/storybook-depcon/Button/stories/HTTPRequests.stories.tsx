import type { ComponentStory, ComponentMeta } from '@storybook/react';
import FetchingPosts from '../FetchingPosts';
import { rest } from 'msw';

export default {
  title: 'Depcon/HTTP Requests',
  component: FetchingPosts
} as ComponentMeta<typeof FetchingPosts>;

const Template: ComponentStory<typeof FetchingPosts> = () => (
      <FetchingPosts/>
);

export const SuccessBehaviour= Template.bind({});

SuccessBehaviour.parameters = {
    msw: {
        handlers: [
            rest.get('/api/data', (req, res, ctx) => {
                return res(
                    ctx.delay(1200),
                    ctx.status(200),
                    ctx.json([{
                            title: 'Post o walce goryla z lwem'
                        },
                        {
                            title: 'Czy lew to naprawdę król sawanny?'
                        },
                        {
                            title: 'Poradnik jak przetrwać całą noc w dzungli'
                        }
                    ])
                )
            })
        ]
    }
};

export const LoadingBehaviour= Template.bind({});

LoadingBehaviour.parameters = {
    msw: {
        handlers: [
            rest.get('api/data',(req, res, ctx) => {
                return res(ctx.delay('infinite'))
            })
        ]
    }
}

export const ErrorBehaviour= Template.bind({});

ErrorBehaviour.parameters = {
    msw: {
        handlers: [
            rest.get('api/data',(req, res, ctx) => {
                return res(
                    ctx.delay(1200),
                    ctx.status(500)
                    );
            })
        ]
    }
}
