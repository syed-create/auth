import { Avatar } from "antd";

export const tableColumns = () => {
	return [
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "First Name",
			dataIndex: "first_name",
			key: "first_name",
		},
		{
			title: "Last Name",
			dataIndex: "last_name",
			key: "last_name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Picture",
			dataIndex: "avatar",
			key: "avatar",
			render: value => <Avatar src={value} key={value} />,
		},
	];
};
