import React, { useState, useEffect } from "react";
import {
	getAllPagedUsers,
	getAllUsers,
	getUserDetails,
} from "../../services/fetchService";
const FetchExample = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});
	const [totalUsers, setTotalUsers] = useState(12);
	const [usersPerPages, setUsersPerPages] = useState(6);
	const [pages, setpages] = useState(2);

	useEffect(() => {
		obtainUsers();
	}, []);

	const obtainUsers = () => {
		getAllUsers()
			.then((response) => {
				console.log("All users", response.data);
				setUsers(response.data);
				setpages(response.total_pages);
				setUsersPerPages(response.per_page);
				setTotalUsers(response.total);
			})
			.catch((error) => {
				alert(`Error while retreiving the users ${error}`);
			})
			.finally(() => {
				console.log("Ended obtaining users");
			});
	};
	//////////////////////
	const obtainPagedUsers = (pages) => {
		getAllPagedUsers(pages)
			.then((response) => {
				console.log("All Paged users", response.data);
				setUsers(response.data);
				setpages(response.total_pages);
				setUsersPerPages(response.per_page);
				setTotalUsers(response.total);
			})
			.catch((error) => {
				alert(`Error while retreiving the users ${error}`);
			})
			.finally(() => {
				console.log("Ended obtaining users");
			});
	};
	///////////////////

	const obtainUserDetails = (id) => {
		getUserDetails(id)
			.then((response) => {
				console.log("All Paged users", response.data);
				setSelectedUser(response.data);
			})
			.catch((error) => {
				alert(`Error while retreiving the user ${error}`);
			})
			.finally(() => {
				console.log("Ended obtaining user");
			});
	};

	return (
		<div>
			<h2>Users:</h2>
			{users.map((user, index) => {
				return (
					<p key={index} onClick={() => obtainUserDetails(user.id)}>
						{user.first_name} {user.last_name}
					</p>
				);
			})}

			<p>
				Showing {usersPerPages} users of {totalUsers} in total
			</p>
			<button onClick={() => obtainPagedUsers(1)}>1</button>
			<button onClick={() => obtainPagedUsers(2)}>2</button>

			<div>
				<h3>User Details</h3>
				{selectedUser && (
					<div>
						<p>Name: {selectedUser.first_name}</p>
						<p>Last Name: {selectedUser.last_name}</p>
						<p>Email: {selectedUser.email}</p>
						<img
							src={selectedUser.avatar}
							alt="Avatar"
							style={{ width: "50px", height: "50px" }}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default FetchExample;
