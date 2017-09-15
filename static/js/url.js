let base = 'http://www.shinefs.com:9494/shinefs/';

//登录
let userMsgUrl = base+'crm/api/Public/v1/?service=Contacter.UserLogin';

//患者管理
let userListUrl = base+'crm/api/Public/v1/?service=Contacter.GetContacterList2';

//患者详情
let userDetaileUrl = base+'crm/api/Public/v1/?service=Contacter.GetContacterDetail';
let changePhoneUrl = base+'crm/api/Public/v1/?service=Contacter.ChangeContacterTelById';

let msgSendUrl = base+'public/myapp/?service=smsArticle.insertsms';
let msgLeaveUrl = base+'public/myapp/?service=receiveivr.getreceiveivrbycallno&';
let callNameTimesUrl = base+'public/myapp/?service=doctor.isCall&';

let callNameUrl = 'http://121.43.153.58/command?Action=Webcall&Account=N00000010639&PBX=sh.ali.7.9&Timeout=20&ServiceNo=02100000023&';
// let msgClassUrl = base+'crm/api/Public/v1/?service=Contacter.GetMessageClass';
// let msgTemplateUrl = base+'crm/api/Public/v1/?service=Contacter.GetMessageTemplate';

