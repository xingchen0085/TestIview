<template>

	<Row>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
			<Card>
				 <p slot="title">
					<Icon type="ios-film-outline"></Icon>
					按钮测试
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					更新
				</a>
				<Button>Default</Button>
				<Button type="primary">Primary</Button>
				<Button type="ghost">Ghost</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="text">Text</Button>
				<br><br>
				<Button type="info">Info</Button>
				<Button type="success">Success</Button>
				<Button type="warning">Warning</Button>
				<Button type="error">Error</Button>
			</Card>
		</Col>
		
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
			<Card>
				 <p slot="title">
					<Icon type="ios-film-outline"></Icon>
					表单测试
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					更新
				</a>
				<Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
				<br>
				<Input v-model="value" disabled placeholder="被禁用的输入框" style="width: 300px"></Input>
				<br>
				<Input v-model="value11">
					<span slot="prepend">http://</span>
					<span slot="append">.com</span>
				</Input>
				<br>
				<Input v-model="value12">
					<Select v-model="select1" slot="prepend" style="width: 80px">
						<Option value="http">http://</Option>
						<Option value="https">https://</Option>
					</Select>
					<Select v-model="select2" slot="append" style="width: 70px">
						<Option value="com">.com</Option>
						<Option value="org">.org</Option>
						<Option value="io">.io</Option>
					</Select>
				</Input>
				<br>
				<Input v-model="value13">
					<Select v-model="select3" slot="prepend" style="width: 80px">
						<Option value="day">Day</Option>
						<Option value="month">Month</Option>
					</Select>
					<Button slot="append" icon="ios-search"></Button>
				</Input>
			</Card>
		</Col>
		
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
			<Card>
				 <p slot="title">
					<Icon type="ios-film-outline"></Icon>
					表单测试
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					更新
				</a>
				<RadioGroup v-model="phone" vertical>
					<Radio label="apple">
						<Icon type="social-apple"></Icon>
						<span>Apple</span>
					</Radio>
					<Radio label="android">
						<Icon type="social-android"></Icon>
						<span>Android</span>
					</Radio>
					<Radio label="windows">
						<Icon type="social-windows"></Icon>
						<span>Windows</span>
					</Radio>
				</RadioGroup>
				选中：{{phone}}
				
				<CheckboxGroup v-model="social">
					<Checkbox label="twitter">
						<Icon type="social-twitter"></Icon>
						<span>Twitter</span>
					</Checkbox>
					<Checkbox label="facebook">
						<Icon type="social-facebook"></Icon>
						<span>Facebook</span>
					</Checkbox>
					<Checkbox label="github">
						<Icon type="social-github"></Icon>
						<span>Github</span>
					</Checkbox>
					<Checkbox label="snapchat">
						<Icon type="social-snapchat"></Icon>
						<span>Snapchat</span>
					</Checkbox>
					<Switch size="large">
						<span slot="open">开启</span>
						<span slot="close">关闭</span>
					</Switch>
				</CheckboxGroup>
				
			</Card>
		</Col>
		
		<Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
			<Card>
				 <p slot="title">
					<Icon type="ios-film-outline"></Icon>
					选择按钮测试
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					更新
				</a>
				<Switch size="large">
					<span slot="open">开启</span>
					<span slot="close">关闭</span>
				</Switch>
				<Table :columns="columns1" :data="data1"></Table>
				 <Rate v-model="r"></Rate>
			</Card>
		</Col>
		
		<Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
			<Card>
				 <p slot="title">
					<Icon type="ios-film-outline"></Icon>
					显示测试
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					更新
				</a>
				<Alert show-icon type="success">A success prompt</Alert>
				<Button type="info" @click="info">Display info prompt</Button>
				 <Button type="success" @click="success">Display success prompt</Button>
				<Button type="warning" @click="warning">Display warning prompt</Button>
				<Button type="error" @click="error">Display error prompt</Button>
			</Card>
		</Col>
    </Row>
    
</template>

<script>
export default {
    name: 'page',
	data(){
		return {
			r:1,
			value:"Hello Test",
			phone: 'apple',
			social:['facebook', 'github'],
			value11:'as',
			value12:"12",
			value13:'13',
			select1:'http',
			select2:'com',
			select3:'day',
			columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
		}
	},
	methods:{
					
					info:function(){
						this.$Message.info("测试😁");
					},
					success () {
						this.$Message.success('This is a success tip');
					},
					warning () {
						this.$Message.warning('This is a warning tip');
					},
					error () {
						this.$Message.error('This is an error tip');
					}
					
				}
};
</script>


