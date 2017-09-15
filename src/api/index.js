import axios from 'axios'
import qs from 'qs'

let base = 'http://www.shinefs.com:9494/shinefs/';

//患者列表
export const userList = (type,key) => {
	return axios.post(userListUrl,qs.stringify({type:type,keyword:key}))
				.then(res=>res.data)
};
//患者详情
export const userDetaile = (id) => {
	return axios.post(userDetaileUrl,qs.stringify({id:id}))
				.then(res=>res.data)
};
<<<<<<< HEAD
//打电话
export const callTimes = (doctorID,telDoctor,telCustomer) => {
	return axios.get(callNameTimesUrl+"tel="+telDoctor+"&doctorid="+doctorID).then(res=>{
		if (res.data.supplyment>0) {
			axios.post(callNameUrl+"Exten="+telDoctor+"&Variable=phoneNum:"+telCustomer).then(res=>{
				console.log(res.data);
			})
		} else {
			alert("对不起，您今日拨打电话的次数已超过最大可用额度！");
		}
	})
};
//留言
export const leaveMsg = (phone) => {
	return axios.post(msgLeaveUrl+"callno="+phone+"&state=voicemail")
				.then(res=>res.data)
=======
export const resetPhone = (phone) => {
	console.log(phone);
>>>>>>> 201c89ccd96645375d356eea22af6d8888da9efb
}