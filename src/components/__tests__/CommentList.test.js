import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import WithRedux from 'WithRedux';

let component;

beforeEach(() => {
  // этот initialState работает если перекрывать в WithRedux
  const initialState = {
    comments: ['comment1', 'comment2'], // 2
  };

  component = mount(
      <WithRedux initialState={initialState}>
        <CommentList />
      </WithRedux>,
  );
});

afterEach(() => {
  component.unmount();
});

it('creates one LI per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('comment1');
  expect(component.render().text()).toContain('comment2');
});
