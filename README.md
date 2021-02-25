# react-pairs
> React pairs component.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-pairs
```

## properties
| Name      | Type   | Required | Default | Description                                            |
| --------- | ------ | -------- | ------- | ------------------------------------------------------ |
| className | string | false    | -       | The extended className for component.                  |
| items     | array  | false    | []      | Default data source([{key:'key', value:'value'},...]). |
| template  | func   | false    | noop    | The pairs template callback.                           |


## usage
1. import css
  ```scss
  @import "~@jswork/react-pairs/dist/style.css";

  // or use sass
  @import "~@jswork/react-pairs/dist/style.scss";

  // customize your styles:
  $react-pairs-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactPairs from '@jswork/react-pairs';
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

  ```

## documentation
- https://afeiship.github.io/react-pairs/


## license
Code released under [the MIT license](https://github.com/afeiship/react-pairs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-pairs
[version-url]: https://npmjs.org/package/@jswork/react-pairs

[license-image]: https://img.shields.io/npm/l/@jswork/react-pairs
[license-url]: https://github.com/afeiship/react-pairs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-pairs
[size-url]: https://github.com/afeiship/react-pairs/blob/master/dist/react-pairs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-pairs
[download-url]: https://www.npmjs.com/package/@jswork/react-pairs
