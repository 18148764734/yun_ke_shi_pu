<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="title" label="书籍名">
        <uni-easyinput v-model="formData.title" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="content" label="内容">
				<uni-easyinput maxlength="-1" type="textarea" v-model="formData.content" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="imgs" label="书籍封面">
					<image :src="formData.imgs" ></image>
					<button @click="uploadImg" type="primary">上传图片</button>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/book.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'book';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "title": "",
        "content": "",
        "imgs": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      	uploadImg() {
      		uni.chooseImage({
      			count: 1,
      			success: (res) => {
      				console.log(res);
      				console.log(this.formData.title + (this.formData.imgs.length - 1 || 0));
      
      				uniCloud.uploadFile({
      					cloudPath: (this.formData.title + (this.formData.imgs.length || 0)) + '.png',
      					filePath: res.tempFilePaths[0],
      					success: (res) => {
      						console.log(res);
      						this.formData.imgs=("https://env-00jx4xgopeln.normal.cloudstatic.cn" + res.fileID
      							.substring(res.fileID.lastIndexOf("/"), res.fileID.length))
      					},
      					fail(err) {
      						console.log(err);
      					}
      				})
      
      			},
      			fail(err) {
      				console.log(err)
      			}
      		})
      
      	},
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>
