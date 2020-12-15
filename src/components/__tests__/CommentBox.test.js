import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import WithRedux from 'WithRedux';

let component;

beforeEach(() => {
  component = mount(
      <WithRedux>
        <CommentBox />
      </WithRedux>,
  );
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

describe('the text area', () => {
  // использоуем в двух тестах - ввод теста и обновление
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: {value: 'test comment'},
    });
    component.update();
  });

  // проверяем значение после ввода
  it('has a text area that user can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('test comment');
  });

  // отправляем - обновляем - проверяем
  it('has an empty textarea when form is submitted', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
