import { Form, Input, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

const TaskForm = ({ onTaskAdded }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const task = {
      title: values.title,
      description: values.description,
      dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : '',
      priority: values.priority,
      assignedTo: values.assignedTo,
      status: 'pending',
    };

    
    onTaskAdded(task);

    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="dueDate" label="Due Date">
        <DatePicker />
      </Form.Item>
      <Form.Item name="priority" label="Priority">
        <Select>
          <Option value="high">High</Option>
          <Option value="medium">Medium</Option>
          <Option value="low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item name="assignedTo" label="Assigned To">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
