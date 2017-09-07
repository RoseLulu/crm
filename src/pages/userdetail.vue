<template>
	<div>
		<div class="userInfo">
			<div class="header">
				<span class="name">{{name}}</span>
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
						<i v-if="registion='1'" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
					<p><strong>高龄</strong><span class="split">|</span>
						<i v-if="registion='1'" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
					<p><strong>重点</strong><span class="split">|</span>
						<i v-if="important='1'" class="fa fa-check"></i><i v-else class="fa fa-times"></i>
					</p>
				</div>
			</div>
		</div>
		<el-tabs type="card">
            <el-tab-pane>
                <span slot="label"><i class="fa fa-user-plus"></i> 患者管理</span>
					<form>
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
					<form class="address">
						<label>家庭住址</label>
						<textarea type="text" readonly></textarea>	
					</form>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-comments"></i> 挂号记录</span>
            
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-pencil-square-o"></i> 处方记录</span>
            
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-video-camera"></i> 语音留言</span>
            
            </el-tab-pane>
        </el-tabs>

	</div>	
</template>

		


<script>
	import {userDetaile} from '../api/index'
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
				registion:'',
				important:'',
				//activeName2: 'first'
			}
		},
		// methods: {
		// 	handleClick(tab, event) {
		// 		console.log(tab, event);
		// 	}
		// },
		created() {
			userDetaile(this.$route.query.id).then((res)=> {
				console.log(res.data);
				this.name = res.data.name;
				this.age = res.data.age;
				this.sex = res.data.sex;
				this.address = res.data.address;
				this.hometel = res.data.hometel;
				this.registion = res.data.registion;
				this.important = res.data.important;
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
	label {
		width: 60px;
		height: 36px;
		line-height: 36px;
		text-align: right;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #48576a;
		box-sizing: border-box;
	}
	input,textarea {
		font-size: 14px;
		padding: 3px 10px;
		margin-left: 20px;
		border: 1px solid #bfcbd9;
		border-radius: 4px;
	}
	input {
		width: 220px;
		height: 28px;
		line-height: 28px;
	}
	textarea {
		width: 320px;
		height: 56px;
	}
	form {
		margin-bottom: 20px;
	}
	.address label {
		height: 64px;
		line-height: 64px;
	}
</style>