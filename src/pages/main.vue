<template>
	<div>
		<el-row :gutter="40">
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-message"><i class="fa fa-comments"></i></div>
		  		<div class="content">短信剩余总量:25553条</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-phone"><i class="fa fa-volume-control-phone"></i></div>
		  		<div class="content">电话剩余总量:25553通</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-focus"><i class="fa fa-star"></i></div>
		  		<div class="content">微信关注总量:25553人</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-leavemsg"><i class="fa fa-magic"></i></div>
		  		<div class="content">今日留言总量:25人</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-registration"><i class="fa fa-eye"></i></div>
		  		<div class="content">今日挂号总量:255人</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
		  		<div class="header header-prescription"><i class="fa fa-bar-chart"></i></div>
		  		<div class="content">今日处方总量:255张</div>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
	.grid-content {
		height: 100px;
		.header {
			text-align:center;
			height: 69px;
			line-height:74px;
			i {
				color:#fff;
				font-size:30px;
			}
		}
		.header-message {
			background-color: #00acec;
		}
		.header-phone {
			background-color: #f8a326;
		}
		.header-focus {
			background-color: #9564e2;
		}
		.header-leavemsg {
			background-color: #f34541;
		}
		.header-registration {
			background-color: #ff6b00;
		}
		.header-prescription {
			background-color: #999999;
		}
		.content {
			text-align:center;
			letter-spacing:1px;
		    font-size: 75%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    color: #5b5b5b;
		    background-color: #dbdbdb;
		    border-bottom: 1px solid #cecece;
		    padding: 9px;
		}
	}
</style>