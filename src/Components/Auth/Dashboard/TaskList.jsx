import { useState } from 'react';
import { Select, Table } from 'antd';

const { Option } = Select;

const TaskList = ({ tasks }) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('priority');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'inProgress') return task.status === 'inProgress';
    if (filter === 'pending') return task.status === 'pending';
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((task1, task2) => {
    if (sort === 'priority') {
      const priority1 = task1.priority || '';
      const priority2 = task2.priority || '';
      return priority1.localeCompare(priority2);
    }
    if (sort === 'dueDate') {
      const date1 = new Date(task1.dueDate);
      const date2 = new Date(task2.dueDate);
      return date1 - date2;
    }
    return 0;
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      sorter: (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      sorter: (a, b) => {
        const priority1 = a.priority || '';
        const priority2 = b.priority || '';
        return priority1.localeCompare(priority2);
      },
    },
    {
      title: 'Assigned To',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div>
      <div>
        <Select value={filter} onChange={handleFilterChange}>
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="inProgress">In Progress</Option>
          <Option value="pending">Pending</Option>
        </Select>
        <Select value={sort} onChange={handleSortChange}>
          <Option value="title">Title</Option>
          <Option value="dueDate">Due Date</Option>
        </Select>
      </div>
      <Table dataSource={sortedTasks} columns={columns} />
    </div>
  );
};

export default TaskList;
