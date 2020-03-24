# react-pairs
> React pairs component.

## installation
```shell
npm install -S @feizheng/react-pairs
```

## update
```shell
npm update @feizheng/react-pairs
```

## properties
| Name      | Type   | Default | Description                                            |
| --------- | ------ | ------- | ------------------------------------------------------ |
| className | string | -       | The extended className for component.                  |
| items     | array  | []      | Default data source([{key:'key', value:'value'},...]). |
| template  | func   | noop    | The pairs template callback.                           |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-pairs/dist/style.scss";

  // customize your styles:
  $react-pairs-options: ()
  ```
2. import js
  ```js
  import ReactPairs from '@feizheng/react-pairs';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import nxPickPairs from '@feizheng/next-pick-pairs';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      var obj = {
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
        <div className="app-container">
          <h1>Pairs with template</h1>
          <ReactPairs
            items={items}
            template={({ item, index }) => {
              console.log(item);
              return (
                <div className="is-item" key={item.key}>
                  <strong>{item.key} </strong> - <em>{item.value + ''}</em>
                </div>
              );
            }}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-pairs/
