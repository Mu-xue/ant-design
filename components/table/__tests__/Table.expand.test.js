/* eslint-disable react/no-multi-comp */
import React from 'react';
import { mount } from 'enzyme';
import Table from '..';

describe('Table.expand', () => {
  it('click to expand', () => {
    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];

    const data = [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,

        children: [
          {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
          },
        ],
      },
    ];

    const wrapper = mount(<Table columns={columns} dataSource={data} />);
    wrapper
      .find('.ant-table-row-expand-icon')
      .last()
      .simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
  });
});
