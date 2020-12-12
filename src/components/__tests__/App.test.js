import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const component = shallow(<App />);
  expect(component.find(CommentList).length).toEqual(1);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello, world/i);
//   expect(linkElement).toBeInTheDocument();

//   expect(linkElement.innerHTML).toContain('Hello, World!)');
// });