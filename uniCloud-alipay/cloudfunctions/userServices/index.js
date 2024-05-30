'use strict';
const db = uniCloud.database().collection('A-users');

function addUser(event) {
	if (collection.where({
			"userName": event.user.userName
		}).get()) {
		return "添加失败！已存在该用户名！"
	}
	collection.addUser(event.user)
	return "操作成功！"
}

function editUser(event) {
	return "editUser"
}

function deleteUserById(event) {
	return "deleteUser"
}

function getUser(event) {
	return "deleteUser"
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
	let {userName,password} = e.data;
	let res = {success:false,message:""};
	if(!userName || !password){
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
			avator:"https://env-00jx4xgopeln.normal.cloudstatic.cn/userAvator18148764734.png",
			email:"",
			phone:"",
		})
		console.log("result", res)
		return {
			success:true,
			message:"注册成功"
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