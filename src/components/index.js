import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactList from '@feizheng/react-list';

const CLASS_NAME = 'react-pairs';

export default class ReactPairs extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default data source([{key:'key', value:'value'},...]).
     */
    items: PropTypes.array.isRequired,
    /**
     * The pairs template callback.
     */
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    template: noop
  };

  render() {
    const { className, items, template, ...props } = this.props;
    return (
      <ReactList
        items={items}
        template={template}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
