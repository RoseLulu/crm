<template>
	<div>
		<div class="userInfo">
			<div class="title">
				<span class="name">{{name}}</span>
				<span class="tag"><label class="sign" v-if="signChecked">签约</label><label class="important" v-if="importantChecked">重点</label></span>
				<span class="icon">
					<button class="callName" @click="callName"><i class="fa fa-phone"></i></button>
					<button class="sendMessag" @click="sendMessage"><i class="fa fa-envelope-o"></i></button>
				</span>
			</div>
			<div class="content">
				<div>
					<p><strong>姓名</strong><span class="split">|</span>{{name}}</p>
					<p><strong>年龄</strong><span class="split">|</span>{{age}}</p>
					<p><strong>性别</strong><span class="split">|</span>{{sex}}</p>
				</div>
				<div>
					<p><strong>地址</strong><span class="split">|</span>{{address}}</p>
					<p><strong>电话</strong><span class="split">|</span>{{hometel}}</p>
					<p><strong>手机</strong><span class="split">|</span>{{mobile}}</p>
				</div>
				<div>
					<p><strong>签约</strong><span class="split">|</span>
						<i v-if="signChecked" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
					<p><strong>高龄</strong><span class="split">|</span>
						<i v-if="parseInt(age)>80" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
					<p><strong>重点</strong><span class="split">|</span>
						<i v-if="importantChecked" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
				</div>
			</div>
		</div>

		<el-tabs type="card" @tab-click="leaveMsg">
            <el-tab-pane>
                <span slot="label"><i class="fa fa-user-plus"></i> 患者管理</span>
				<el-form ref="form" label-width="80px" class="input-userDate">
					<el-form-item label="患者姓名">
						<el-input v-model="name" readonly></el-input>
					</el-form-item>
					<el-form-item label="社保卡号">
						<el-input v-model="card" readonly></el-input>
					</el-form-item>
					<el-form-item label="身份证号">
						<el-input v-model="identitycard" readonly></el-input>
					</el-form-item>
					<el-form-item label="家庭住址">
						<el-input v-model="address" type="textarea" readonly></el-input>
					</el-form-item>
					<el-form-item label="手机号码">
						<el-input v-model="mobile" class="phone"></el-input>
						<el-button type="primary" class="changePhone" @click="changePhone">修改</el-button>
						<el-alert title="请输入合法的号码" type="error" v-if="errorAlert" @close="close"></el-alert>
					</el-form-item>
					<el-form-item  label="所属村委">
						<el-select v-model="village">
							<el-option label="非亭林镇" value="1"></el-option>
							<el-option label="亭林镇--不限村委" value="2"></el-option>
							<el-option label="复兴居委会" value="3"></el-option>
							<el-option label="寺平居委会" value="4"></el-option>
							<el-option label="寺北居委会" value="5"></el-option>
							<el-option label="新建居委会" value="6"></el-option>
							<el-option label="松隐居委会" value="7"></el-option>
							<el-option label="中山居委会" value="8"></el-option>
							<el-option label="亭东村" value="9"></el-option>
							<el-option label="亭北村" value="10"></el-option>
							<el-option label="龙泉村" value="11"></el-option>
							<el-option label="东新村" value="12"></el-option>
							<el-option label="新巷村" value="13"></el-option>
							<el-option label="油车村" value="14"></el-option>
							<el-option label="金门村" value="15"></el-option>
							<el-option label="金明村" value="16"></el-option>
							<el-option label="红阳村" value="17"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="签约患者">
						<el-checkbox v-model="signChecked" label="如是请勾选" name="type"></el-checkbox>
					</el-form-item>
					<el-form-item label="重点关注">
						<el-checkbox v-model="importantChecked" label="如是请勾选" name="type"></el-checkbox>
					</el-form-item>
					<el-form-item label="其他备注">
						<el-checkbox-group v-model="type">
							<el-checkbox label="婴儿（3岁以下）" name="type"></el-checkbox>
							<el-checkbox label="孕妇" name="type"></el-checkbox>
							<el-checkbox label="孤寡" name="type"></el-checkbox>
							<el-checkbox label="癌症" name="type"></el-checkbox>
							<el-checkbox label="慢性肾炎" name="type"></el-checkbox>
							<el-checkbox label="慢性病（糖尿病）" name="type"></el-checkbox>
							<el-checkbox label="慢性病（高血压）" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
				</el-form>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-comments"></i> 挂号记录</span>  
				<!--列表-->
				<el-table  style="width: 100%" highlight-current-row border>
					<el-table-column width="150" type="index" label="#" sortable></el-table-column>
					<el-table-column prop="name" label="科室"></el-table-column>
					<el-table-column prop="sex" label="就诊医生"></el-table-column>
					<el-table-column prop="sex" label="就诊日期" sortable></el-table-column>
				</el-table>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-pencil-square-o"></i> 处方记录</span> 
				<el-table  style="width: 100%" highlight-current-row border>
					<el-table-column width="150" type="index" label="#" sortable></el-table-column>
					<el-table-column prop="name" label="处方编号" sortable></el-table-column>
					<el-table-column prop="name" label="科室"></el-table-column>
					<el-table-column prop="sex" label="就诊医生"></el-table-column>
					<el-table-column prop="sex" label="药品数量" sortable></el-table-column>
					<el-table-column prop="sex" label="发药时间" sortable></el-table-column>
				</el-table>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-video-camera"></i> 语音留言</span> 
				<el-col :span="24" class="leaverMsg">
					<ul v-model="leaveMsgData">
						<li v-for="item in leaveMsgData">
							<div class="icon phone"><i class="fa fa-phone"></i></div>
							<div class="msgHeader"><p>电话留言</p><p class="time">{{item.inserttime}}</p></div>
							<div class="msgContent"><audio :src="item.voicemail" controls="controls"></audio></div>
						</li>
					</ul>
				</el-col>	
            </el-tab-pane>
        </el-tabs>

        <!--编辑界面-->
		<el-dialog title="请选择需要发送的短信模板" v-model="editFormVisible">
			<el-form>
				<el-form-item label="短信分类">
					<el-select v-model="msgClass">
						<el-option v-for="item in editForm" :label="item.text" :value="item.text" :key="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="短信模板">
					<el-select v-model="msgTemplate">
						<el-option v-for="(template,index) in selection" :label="template.text" :value="template.text"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="短信编辑">
					<el-input type="textarea" v-model="msgEdit"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editClose">取消</el-button>
				<el-button type="primary" @click.native="editSubmit">确定</el-button>
			</div>
		</el-dialog>

	</div>	
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import {userDetaile,resetPhone,callTimes,leaveMsg} from '../api/index'
	export default {
		data() {
			return {
				name:'',
				age:'',
				sex:'',
				address:'',
				hometel:'',
				mobile:'',
				card:'',
				identitycard:'',
				village:'',
				registion:'',
				important:'',
				type: [],
				errorAlert: false,
				signChecked: false,
				importantChecked: false,

				leaveMsgData:[],//留言数据

				editFormVisible: false,//编辑界面是否显示
				msgClass: '节假日通知',
				msgTemplate: '妇女节',
				editForm: [
					{
						id: 10,
						text: '节假日通知',
						template: [
							{ 	
								text: '妇女节',
							    content: ' 我院为迎“三八”妇女节，我院神经内科举办[title]义诊活动，义诊活动时间为：[ordertime] [place] ，欢迎有需要的患者前来咨询'
							},{
								text: '医院节假日门诊时间调整通知',
								content: ' 我院春节休业安排如下：[ordertime]这段时间内急诊服务照常营业，除急诊以外的科室将暂停营业，给您带来的不便敬请谅解！'
							}
						]
					},{
						id: 35,
						text: '医生活动通知',
						template: [
							{ 	
								text: '新生儿保健(0-1岁)',
							    content: '  小朋友的定期儿童保健将至，请记得带小朋友前来我院检查。我院的儿保服务时间是每周二与周四，上	午8点到下午4点。'
							},{
								text: '家庭医生随访',
								content: '  您的家庭医生李医生将于[ordertime]拜访您，请您提前做好准备。'
							},{
								text: '复诊',
								content: '  请[ordertime]来我院[place]科进行复诊，${message}如有疑问请拨打医院客服电话。'
							}
						]
					}
				]
			}
		},
		created() {
			console.log('created:  '+this.mobile);
			//获取患者详情
			axios.post(userDetaileUrl,qs.stringify({id:this.$route.query.id})).then((res)=> {
				this.name = res.data.data.name;
				this.age = new Date().getFullYear() - parseInt(res.data.data.age.substring(0,4));
				this.sex = res.data.data.sex;
				this.address = res.data.data.address;
				this.card = res.data.data.card;
				this.identitycard = res.data.data.identitycard;
				this.village = res.data.data.village;
				this.registion = res.data.data.registion;
				this.important = res.data.data.important;
				if (this.registion == '1') this.signChecked = true;
				if (this.important == '1') this.importantChecked = true;
				if (res.data.data.hometel.length == 11) this.mobile = res.data.data.hometel;
				else this.hometel = res.data.data.hometel;
			});	
			// userDetaile(this.$store.getters.getuserid.id.id).then((res)=> {
			// 	console.log(res.data);
			// 	this.name = res.data.name;
			// 	this.age = res.data.age;
			// 	this.sex = res.data.sex;
			// 	this.address = res.data.address;
			// 	this.hometel = res.data.hometel;
			// 	// if (res.data.registion==1) {

			// 	// }
			// })		    	       		    
		},
		beforeMount() {
			console.log('beforeMount:  '+this.mobile);
		},
		mounted() {
		  	this.$nextTick(function () {
		  		console.log('mounted:  '+this.mobile);
		    	//获取留言数据
				// leaveMsg(this.mobile).then(res=>{
				// 	this.leaveMsgData = res.data;
				// });
		  	})
		},
		beforeUpdate() {
			console.log('beforeUpdate:  '+this.mobile);
		},
		updated() {
			console.log('updated:  '+this.mobile);
		},
		beforeDestroy() {
			console.log('beforeDestroy:  '+this.mobile);
		},
		destroyed() {
			console.log('destroyed:  '+this.mobile);
		},
		methods: {
			// con() {
			// 	console.log(this.editForm[1].template);
			// },
			close() {
				this.errorAlert = false;
			},
			changePhone() {
				if (!(/1[3-8]+\d{9}/.test(this.mobile))) {
					this.errorAlert = true;
				} else {
					// resetPhone(this.mobile);
					let data = {
						id: this.$route.query.id,
						tel: this.mobile
					}
					console.log(data);
					axios.post(changePhoneUrl,data).then(res=>{
						console.log(res.data);
					}).catch(error=>{
						console.log(error);
					});
				}
			},
			callName() {
				let telCustomer;
				let telDoctor = localStorage.getItem('userTel');
				let doctorID = localStorage.getItem('userID');
				if(this.mobile==="") telCustomer = this.hometel;
				else if(this.hometel==="") telCustomer = this.mobile;
				callTimes(doctorID,telDoctor,telCustomer).then((res)=>{
					console.log(res);
				})
			},
			sendMessage() {
				this.editFormVisible = true;
			},
			//关闭短信编辑
			editClose() {
				this.editFormVisible = false;
			},
			//提交短信编辑
			editSubmit() {
				this.editFormVisible = false;
				let data = {
					title:this.msgTemplate,
					doctorid:localStorage.getItem("userID"),
					userid:this.$route.query.id,
					route:"notice",
					hometel:[{name:this.name,hometel:this.mobile,isvoice:"sms"}],
					message:this.msgEdit
				};
				axios.post(msgSendUrl,data).then((res)=> {
					if (res.data.error==='今天的短信发送量用完了') {
						this.$message({
			              	type: 'warning',
			              	message: '很抱歉，您今天的短信发送量用完了'
			            });
					} else {
						this.$message({
			              	type: 'info',
			              	message: '发送短信请求成功'
			            });
					}
				})
			},
			//留言
			leaveMsg() {
				leaveMsg(this.mobile).then(res=>{
					this.leaveMsgData = res;
				});
			}
		},
		computed: {
			selection: {
				get: function() {
			        let that = this;
			        return this.editForm.filter(function(item) {
			        	//if (item.text === '医生活动通知') {}
			          	return item.text === that.msgClass;
			        })[0].template;
			    }
			},
			// msgTemplate: {
			// 	get: function(){
			// 		let that = this;
			// 		for(let item in this.selection){
			// 			if (this.selection[item].text === that.msgTemplate) {return this.selection[item].content}
			// 		}
			// 	}
			// },
			msgEdit: {
				get: function() {
			 		let that = this;
					for(let item in this.selection){
						if (this.selection[item].text === that.msgTemplate) {return this.selection[item].content}
					}
			 	}
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.fa-user-plus {
		color: #00acec;
	}
	.fa-comments {
		color: #ff6b00;
	}
	.fa-pencil-square-o {
		color: #f34541;
	}
	.fa-video-camera {
		color: #70787b;
	}
	.userInfo {
		padding:40px;
		margin-bottom: 20px;
		border: 1px solid #dddddd;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
		.title {
			padding-bottom: 20px;
			margin-bottom: 30px;
			border-bottom: 1px solid #dddddd;			
			.name {
				font-size: 30px;
	    		font-family: Montserrat;
			}
			.tag {
				margin-left: 12px;
				label {
					color: #fff;
					font-size: 12px;
					padding: 2px 4px;
				}
				.sign {
					background-color: #49bf67;
				}
				.important {
					background-color: #f8a326;
				}
			}
			.icon {
				float:right;
				font-size: 14px;
				font-weight: 700;
				button {
					cursor: pointer;
					width: 40px;
					height: 30px;
					color: #ffffff;
					border-radius: 22px;
	    			box-shadow: inset 0 -1px 0 rgba(251, 248, 248, 0.2), 0 -1px 1px rgba(241, 240, 240, 0.05);
	    			border-color: rgba(25, 3, 3, 0.1) rgba(0, 0, 0, 0.1) rgba(109, 108, 108, 0.25)
				}
				.callName {
					background-color:#49bf67
				}
				.sendMessag {
					background-color:#f8a326
				}
			}
		}
		.content {
			display: flex;
			justify-content:space-between;
			font-size:14px;
			div	{
				width: 33.33%;
			}
			p {
				line-height: 26px;
				strong {
					font-weight: bold
				}
				.split {
					margin:0 20px;
				}
			}
		}
	}
	.changePhone {
		letter-spacing: 6px;
		padding: 10px 17px;
		margin-left: 12px;
	}
	.leaverMsg {
		ul {
			margin-bottom: 10px;
			li {
				position: relative;
    			border-left: 4px solid #dddddd;
				&::before {
					content: "";
					width: 10px;
					height: 10px;
					display: block;
					position: absolute;
					top: 0;
					left: -7px;
					    background-color: #dddddd;
				}
				&:last-child {
					&::before {
						top: auto;
    					bottom: 0;
					}
				}
				.icon {
					width: 40px;
					height: 40px;
					text-align: center;
					color: white;
					vertical-align: middle;
					line-height: 40px;
					font-size: 25px;
					position: absolute;
					top: 0;
					left: 20px;
					background-color: #f34541;
					&::before {
						content: "";
						width: 20px;
						height: 4px;
						background-color: #dddddd;
						position: absolute;
						vertical-align: middle;
						top: 50%;
						margin-top: -2px;
						left: -20px;
					}
				}
				.msgHeader {
					font-family: Montserrat;
					margin-left: 70px;
					padding: 2px 0;
					font-size: 16px;
					line-height: 20px;
					.time {
						color: #999999;
						font-size: 10px;
						
					}
				}
				.msgContent {
					padding: 10px;
				    background-color: white;
				    border: 1px solid #dddddd;
				    position: relative;
				    margin-top: 10px;
				    margin-left: 20px;
				    position: relative;
				    audio {
				    	display: inline-block;
				    	width: 300px;
				    	height: 32px;
				    }
				}
			}
		}
	}
	.input-userDate {
		.el-input,.el-select {
			width: 240px;
		}
		.el-textarea {
		    width: 330px;
		}
		.el-alert--error {
		    width: 330px;
		    margin-top: 10px;
		}
	}
	.el-dialog__wrapper .el-dialog__footer .dialog-footer {
		text-align: right;
		.el-button {
			width: 80px;
			letter-spacing: 4px;
		}
	}
</style>