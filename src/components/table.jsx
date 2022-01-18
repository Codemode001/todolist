import React, {useState} from 'react'
import { Table } from 'antd';
import qs from 'qs';

import {sampleData} from '../sampleData/tableData'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getRandomuserParams = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

const SharedTable = () => {
  const [state, setState] = useState({
    data: sampleData.results,
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  })

  function componentDidMount() {
    const { pagination } = state;
    fetch({ pagination });
  }


  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  const fetch = (params = {}) => {
    // this.setState({ loading: true });
    // fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
        setState({
          loading: false,
          data: sampleData.results,
          pagination: {
            ...params.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
         }
        })
    //     });
    //   });
  };

    const { data, pagination, loading } = state;
    return (
     <div style={{padding:'3rem'}}><Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      /></div> 
    );
  }


export default SharedTable