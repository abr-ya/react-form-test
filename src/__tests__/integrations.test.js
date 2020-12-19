import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import WithRedux from 'WithRedux';
import App from 'components/App';

let app;

describe('Fetch comments button', () => {
  beforeEach(() => {
    const initialState = {
      comments: ['Initial comment 1'], // 1
    };

    app = mount(
        <WithRedux initialState={initialState}>
          <App />
        </WithRedux>,
    );
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        {name: 'Moxios comment 1'},
        {name: 'Moxios comment 2'},
        {name: 'Moxios comment 3'},
      ],
    });
    app.find('.fetch-comments').simulate('click');
  });

  afterEach(() => {
    app.unmount();
    moxios.uninstall();
  });

  it('can fetch a list of comments, add and display them', (done) => {
    // render app - in before part
    // find button and click it - in before part

    // find a list of comments, get a little pause for moxios
    moxios.wait(() => {
      app.update();
      // console.log(app.find('li').length); // наглая проверка!
      expect(app.find('li').length).toEqual(4); // 1 + 3
      expect(app.render().text()).toContain('Moxios comment 1');
      expect(app.render().text()).toContain('Initial comment 1');
      done();
    });
    // console.log(app.find('li').length); // без wait - не успевает
  });

  it('contain old comment', (done) => {
    moxios.wait(() => {
      app.update();
      expect(app.render().text()).toContain('Initial comment 1');
      done();
    });
  });

  it('contain new comment', (done) => {
    moxios.wait(() => {
      app.update();
      expect(app.render().text()).toContain('Moxios comment 1');
      done();
    });
  });
});
