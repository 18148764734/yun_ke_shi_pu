'use strict';
const db = uniCloud.database().collection('A-recipeces');

async function addRecipece(event) {
	let {
		title,
		password
	} = e.data;
	let res = {
		success: false,
		message: ""
	};
	if (!title) {
		res.message = "标题不能为空！";
		return res;
	}
	let query = await db.where({
		title: e.data.title
	}).get();
	if (!query.data[0]) {
		let res = await db.add({
			title: e.data.title,
			password: e.data.password,
			type: false,
			email: "",
			phone: "",
		})
		console.log("result", res)
		return {
			success: true,
			message: "操作成功"
		};
	} else {
		res.message = "操作失败，标题重复";
		return res;
	}
}

async function editRecipece(event) {
	let {
		title,
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
		title: e.data.title
	}).get();
	if (!query.data[0]) {
		let res = await db.update(event.data.recipeceData)
		return {
			success: true,
			message: "操作成功"
		};
	} else {
		res.message = "操作失败，用户名重复";
		return res;
	}
}

async function deleteRecipeceById(event) {
	let result = await db.where({event.data}).remove()
	return result;
}

exports.main = async (event, context) => {
	console.log("参数:", event.data);
	let res;
	if (event.type === "addRecipece") {
		res = addRecipece(event);
	}
	if (event.type === "editRecipece") {
		res = editRecipece(event);
	}
	if (event.type === "deleteRecipece") {
		res = deleteRecipece(event);
	}
	if (event.type === "getRecipece") {
		res = getRecipece(event);
	}
	return res;
};