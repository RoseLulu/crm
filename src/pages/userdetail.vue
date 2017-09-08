<template>
	<div>
		<div class="userInfo">
			<div class="header">
				<span class="name">{{name}}</span>
				<span class="tag"><label class="sign" v-if="signChecked">签约</label><label class="important" v-if="importantChecked">重点</label></span>
				<span class="icon">
					<button class="callName"><i class="fa fa-phone"></i></button>
					<button class="sedMessag"><i class="fa fa-envelope-o"></i></button>
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
					<p><strong>电话</strong><span class="split">|</span></p>
					<p><strong>手机</strong><span class="split">|</span>{{hometel}}</p>
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
		<el-tabs type="card">
            <el-tab-pane>
                <span slot="label"><i class="fa fa-user-plus"></i> 患者管理</span>
					<el-form ref="form" label-width="80px">
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
							<el-input v-model="hometel" class="phone"></el-input>
							<el-button type="primary" class="changePhone" @click="changePhone()">修改</el-button>
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
					<!-- <form>
						<label>患者姓名</label>
						<input type="text" readonly>	
					</form>
					<form>
						<label>社保卡号</label>
						<input type="text" readonly>	
					</form>
					<form>
						<label>身份证号</label>
						<input type="text" readonly>	
					</form>
					<form>
						<label>手机号码</label>
						<input type="text">
						<input type="button" value="修改">	
					</form>
					<form class="address">
						<label>家庭住址</label>
						<textarea type="text" readonly></textarea>	
					</form>
					<form>
						<label>所属村委</label>
						<select>
							<option value="非亭林镇">非亭林镇</option>
							<option value="亭林镇--不限村委">亭林镇--不限村委</option>
							<option value="复兴居委会">复兴居委会</option>
							<option value="寺平居委会">寺平居委会</option>
							<option value="寺北居委会">寺北居委会</option>
							<option value="新建居委会">新建居委会</option>
							<option value="松隐居委会">松隐居委会</option>
							<option value="中山居委会">中山居委会</option>
							<option value="亭东村" selected>亭东村</option>
							<option value="亭西村">亭西村</option>
							<option value="亭北村">亭北村</option>
						</select>
					</form>
					<form>
						<label>签约患者</label>
						<input type="checkbox">
						<span class="sign">如是请勾选</span>	
					</form>
					<form>
						<label>重点关注</label>
						<input type="checkbox">
						<span class="important">如是请勾选</span>	
					</form>
					<form>
						<label>其他备注</label>
						<input type="checkbox">
						<span class="important">婴儿（3岁以下）</span>
						<input type="checkbox">
						<span class="important">孕妇</span>
						<input type="checkbox">
						<span class="important">孤寡</span>	
						<input type="checkbox">
						<span class="important">癌症</span>
						<input type="checkbox">
						<span class="important">慢性肾炎</span>
						<input type="checkbox">
						<span class="important">慢性病（糖尿病）</span>
						<input type="checkbox">
						<span class="important">慢性病（高血压）</span>
					</form> -->
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
				<!-- <el-col :span="24">
					<ul class="leaverMsg">
						<li></li>
					</ul>
				</el-col>	 -->
            </el-tab-pane>
        </el-tabs>

	</div>	
</template>

<script>
	import {userDetaile,resetPhone} from '../api/index'
	import tabShow from '../components/tabShow'
	export default {
		components: {
			tabShow
		},
		data() {
			return {
				name:'',
				age:'',
				sex:'',
				address:'',
				hometel:'',
				card:'',
				identitycard:'',
				village:'',
				registion:'',
				important:'',
				type: [],
				errorAlert: false,
				signChecked: false,
				importantChecked: false
			}
		},
		methods: {
			changePhone() {
				if (!(/1[3-8]+\d{9}/.test(this.hometel))) {
					this.errorAlert = true;
				} else {
					resetPhone(this.hometel)
				}
			},
			close() {
				this.errorAlert = false;
			}
		},
		created() {
			userDetaile(this.$route.query.id).then((res)=> {
				this.name = res.data.name;
				this.age = new Date().getFullYear() - parseInt(res.data.age.substring(0,4));
				this.sex = res.data.sex;
				this.address = res.data.address;
				this.hometel = res.data.hometel;
				this.card = res.data.card;
				this.identitycard = res.data.identitycard;
				this.village = res.data.village;
				this.registion = res.data.registion;
				this.important = res.data.important;
				if (this.registion == '1') this.signChecked = true;
				if (this.important == '1') this.importantChecked = true
			})	
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
		.header {
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
				.sedMessag {
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
		margin-bottom: 10px;
	}
	// label {
	// 	width: 60px;
	// 	height: 36px;
	// 	line-height: 36px;
	// 	text-align: right;
	// 	vertical-align: middle;
	// 	float: left;
	// 	font-size: 14px;
	// 	color: #48576a;
	// 	box-sizing: border-box;
	// }
	// input,textarea,select {
	// 	font-size: 14px;
	// 	padding: 3px 10px;
	// 	margin-left: 20px;
	// 	border: 1px solid #bfcbd9;
	// 	border-radius: 4px;
	// }
	// input[type="text"],select {
	// 	width: 220px;
	// 	height: 28px;
	// 	line-height: 28px;
	// }
	// input[type="checkbox"] {
	// 	cursor: pointer;		
	// 	height: 36px;
	// 	line-height: 36px;
	// }
	// span.sign,span.important {
	// 	display: inline-block;
	// 	vertical-align: top;
	// 	color: #48576a;
	// 	font-size: 14px;
	// 	line-height: 36px;
	// }
	// textarea {
	// 	width: 320px;
	// 	height: 56px;
	// }
	// select {
	// 	width: 220px;
	// 	height: 36px;
	// 	line-height: 36px;
	// }
	// form {
	// 	margin-bottom: 20px;
	// }
	// .address label {
	// 	height: 64px;
	// 	line-height: 64px;
	// }
	// input[type="button"] {
	// 	width: 76px;
	// 	height: 36px;
	// 	padding: 0px;
	// 	letter-spacing: 6px;
	// 	cursor: pointer;
	// 	text-align: center;
	// 	color: #fff;
	// 	background-color: #20a0ff;
	// 	border-color: #20a0ff;
	// }
</style>