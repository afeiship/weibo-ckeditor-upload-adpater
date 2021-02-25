import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPairs from '../src/main';
import '@jswork/next-pick-pairs';

import './assets/style.scss';

class App extends React.Component {
  render() {
    const obj = {
      nickname: null,
      uid: 'UR1785049326',
      job: null,
      last_name: null,
      username: '15502115100',
      last_active: '2017-09-22T13:08:04.753046Z',
      is_staff: false,
      login_count: 5,
      gender: null,
      is_active: true,
      groups: [],
      company: null,
      is_superuser: false,
      first_name: null,
      last_login: '2017-09-22T13:08:04.753038Z',
      permissions: [],
      date_joined: '2017-09-19T14:13:10.129030Z',
      email: 'test@email.com',
      phone: '15502115100'
    };

    const items = nx.pickPairs(obj, ['uid', 'is_staff', 'is_active']);
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-pairs">
        <ReactPairs
          items={items}
          template={({ item, index }) => {
            console.log(item);
            return (
              <div className="is-item" key={item.key}>
                <strong>{item.key} </strong> -{' '}
                <em className="tag is-success">{item.value + ''}</em>
              </div>
            );
          }}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
