'use strict';
const db = uniCloud.database().collection('A-users');

async function addUser(event) {
	let {
		userName,
		password
	} = e.data;
	let res = {
		success: false,
		message: ""
	};
	if (!userName || !password) {
		res.message = "用户名或密码不能为空！";
		return res;
	}
	let query = await db.where({
		userName: e.data.userName
	}).get();
	if (!query.data[0]) {
		let res = await db.add({
			userName: e.data.userName,
			password: e.data.password,
			type: false,
			avator: "https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png",
			email: "",
			phone: "",
		})
		console.log("result", res)
		return {
			success: true,
			message: "操作成功"
		};
	} else {
		res.message = "操作失败，用户名重复";
		return res;
	}
}

async function editUser(event) {
	let {
		userName,
		password
	} = e.data;
	let res = {
		success: false,
		message: ""
	};
	if (!id) {
		res.message = "未找到该ID！";
		return res;
	}
	let query = await db.where({
		userName: e.data.userName
	}).get();
	if (!query.data[0]) {
		let res = await db.update(event.data.userData)
		return {
			success: true,
			message: "操作成功"
		};
	} else {
		res.message = "操作失败，用户名重复";
		return res;
	}
}

async function deleteUserById(event) {
	let result = await db.where({event.data}).remove()
	return result;
}

async function login(e) {
	let result = await db.where({
		userName: e.data.userName,
		password: e.data.password
	}).get();
	console.log("login", result)
	return result;
}

async function registry(e) {
	let {
		userName,
		password
	} = e.data;
	let res = {
		success: false,
		message: ""
	};
	if (!userName || !password) {
		res.message = "用户名或密码不能为空！";
		return res;
	}
	let query = await db.where({
		userName: e.data.userName
	}).get();
	console.log("查询是否有用户名", query.data[0])
	if (!query.data[0]) {
		let res = await db.add({
			userName: e.data.userName,
			password: e.data.password,
			type: false,
			avator: "https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png",
			email: "",
			phone: "",
		})
		console.log("result", res)
		return {
			success: true,
			message: "注册成功"
		};
	} else {
		res.message = "注册失败，用户名重复";
		return res;
	}
}
exports.main = async (event, context) => {
	console.log("参数:", event.data);
	let res;
	if (event.type === "login") {
		res = await login(event);
	}
	if (event.type === "registry") {
		res = await registry(event);
	}
	if (event.type === "addUser") {
		res = addUser(event);
	}
	if (event.type === "editUser") {
		res = editUser(event);
	}
	if (event.type === "deleteUser") {
		res = deleteUser(event);
	}
	if (event.type === "getUser") {
		res = getUser(event);
	}
	return res;
};