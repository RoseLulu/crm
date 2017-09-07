import axios from 'axios';
import qs from 'qs';

let base = 'http://www.shinefs.com:9494/shinefs/';

export const userList = (type,key) => {
	return axios.post(base+'crm/api/Public/v1/?service=Contacter.GetContacterList2',qs.stringify({type:type,keyword:key}))
				.then(res=>res.data)
};
export const userDetaile = (id) => {
	return axios.post(base+'crm/api/Public/v1/?service=Contacter.GetContacterDetail',qs.stringify({id:id}))
				.then(res=>res.data)
};