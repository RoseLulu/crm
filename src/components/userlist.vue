<template>
	<div>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="name"  placeholder="姓名" icon="search" @keyup.enter.native="getUsers('search')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers('search')">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" v-loading="listLoading" style="width: 100%" highlight-current-row border>
			<el-table-column width="80" type="index" label="#" sortable></el-table-column>
    		<el-table-column width="110" prop="name" label="姓名" sortable></el-table-column>
	    	<el-table-column width="100" prop="sex" label="姓别" sortable></el-table-column>
	    	<el-table-column width="100" prop="age" label="年龄" sortable></el-table-column>
	    	<el-table-column prop="identitycard" label="身份证号" sortable></el-table-column>
	    	<el-table-column prop="card" label="社保卡号" sortable></el-table-column>
	    	<el-table-column prop="village" label="所属村委"></el-table-column>
	    	<el-table-column prop="hometel" label="电话号码"></el-table-column>
	    	<el-table-column width="140" label="操作">
	    		<template scope="scope">
			        <el-button type="primary" size="small" @click="toUserDetail(scope.row.id)">详情</el-button>
			    </template>
	    	</el-table-column>
	  	</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar toolbar-pagination">
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :page-sizes="[10, 20, 50, 100]"
		      :page-size="20"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>
		</el-col>

	</div>
</template>

<script>
	import {userList} from '../api/index'
	export default {
		data() {
	      return {
	        name:'',
	      	users: [],
			total: 0,
			page: 1,
			listLoading: false,
	      };
	    },
	    watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'getUsers'
		},
	    methods: {
	        handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	        },
	        handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        },
	        //获取用户列表
			getUsers(da) {
				this.listLoading = true;
				this.total = 0;
				this.users = [];
				let _type;
				if (da == 'search') {
					_type = 'search';
				} else {
					_type = this.$route.path.substring(1);
				};
				userList(_type,this.name).then((res) => {
					this.total = res.data.length;
					res.data.forEach(function(item){
						item.age = new Date().getFullYear() - parseInt(item.age.substring(0,4));
					});
					this.users = res.data;
					this.listLoading = false;
				});
			},
			//跳转到用户详情页面
			toUserDetail(userId){
				// this.$store.dispatch('setuserid', userId);
				this.$router.push('/userDetail?id='+userId);
			}
	    },
	    mounted() {
			this.getUsers();
		}
	}
</script>

<style scoped lang="scss">
	.toolbar-pagination {
		margin-top:20px;
	}
</style>