<template>
 <a-spin size="small" :spinning="loadingData">
    <div :id="idComponent">
        <a-select
          v-if="!disabled"
          :size="sizeSelect"
          v-model:value="valueSl"
          :show-search="showSearch"
          :mode="modeSelect"
          :placeholder="placehole"
          :filterOption="filterOptionHandle"
          dropdownClassName="drop"
          style="font-weight: 500; color: #1327DC;"
          :options="filteredOptions"
          :style="style"
          @change="handleChange"
          allow-clear
        >
          <template  #notFoundContent>
            <div >Dữ liệu trống</div>
          </template>
        </a-select>

        <span v-if="disabled" style="font-weight: 500; color: #1327DC" :style="style">
            {{ valueText }}
        </span>
   </div>
  </a-spin>
</template>

<script >
  import { InfoCircleTwoTone   } from '@ant-design/icons-vue';
  import {DKX_REPORT_URI, callRequest} from '/@/utils/v2/api-request'
  import appUtils from '/@/utils/v2/app-utils'
  import { noAccentLower } from '/@/utils/v2/no-accent';
  export default {
    name:'EApiSelect',
    components:{
      InfoCircleTwoTone 
    },
    props:{
        value:  [Array, Object, String, Number],
        defaultValue: {
          type: [Array, Object, String, Number],
          default: null
        },
        api: [Function, Array, String],
        apiGetUri: {
          type: String,
          default:null
        },
        labelField: {
          type: String,
          default: 'label'
        },
        valueField: {
          type: String,
          default: 'value'
        },
        showSearch: {
          type: Boolean,
          default: false
        },
        placehole: {
          type: String,
          default: ''
        },
        params:{
          type: Object,
          default: {}
        },
        autoSetValue: {
          type: Boolean,
          default: false
        },
        modeSelect: {
          type: String,
          default: ''
        },
        sizeSelect: {
          type: String,
          default: 'small'
        },
        style:{
          type: String,
          default: ''
        },
        autoWrapText: {
          type: Boolean,
          default: true
        },
        disabled: {
          type: Boolean,
          default: false
        },
        onChange:{
          type: Function,
          default: null
        }
    },
    data() {
      return {
        idComponent: new Date().getTime(),
        configResize:{
          currentWidthSize: 0,
        },

        filteredOptions:[],
        loadingData: false,
      }
    },
    computed:{
      valueSl:appUtils.mapComputed('value'),
      valueText(){
        if(!this.disabled){
          return ''
        }
        return this.getValueToString()
      }
    },

    created(){
     setTimeout(() => {
      this.configResize.currentWidthSize = document.getElementById(`${this.idComponent}`).clientWidth
      this.onLoad()
     }, 1);
    },
    watch:{
      params: {
        deep: true,
        immediate: true,
        handler(){
          this.onLoad()
        }
      },
    },
    methods:{
        async onLoad(){
          const st = new Date().getTime()
          this.loadingData = true
          try {
            this.filteredOptions=[]
            const typeApi = typeof this.api
            if(typeApi == 'undefined' || this.api === null){
              return
            }
            let res
            do{
               if(typeApi==='function'){
                  res = await this.api(this.params)
                  break
               }
                
               if(typeApi === 'string'){
                  res = await callRequest({uri:this.api, method:"GET_PATHS"}, this.params)
                  break
               }

               if(Array.isArray(this.api)){
                  res = this.api
               }
            }while(false)

            let valueSelect=[],  defSelect=[];
            const valInput = this.getValueToArr(this.value)
            const defVal = this.getValueToArr(this.defaultValue)

            //build lai list option, dong thoi kiem tra gia tri default
            this.filteredOptions =  res?.map(item => {
              const newItem =  { value:item[this.valueField], label: item[this.labelField], key:noAccentLower(item[this.labelField]) }
              if(valInput != null && valInput.indexOf(`${newItem.value}`)>=0){
                valueSelect.push(newItem)
              }
              if(valueSelect.length<1 && defVal != null && defVal.indexOf(`${newItem.value}`)>=0){
                defSelect.push(newItem)
              }
              return newItem
            })||[]

            //set du lieu cac truong hop
            //TH1: ton tai default value
            //TH2: khong ton tai defaultvalue
              //+ neu co auto set thi se set gia tri
              //+ neu khong co thi bo qua

            if(!this.filteredOptions || this.filteredOptions.length<1) return 

            await this.onSetFirstSelect(valueSelect.length<1?defSelect:valueSelect,
                                         ['multiple','tags'].indexOf(this.modeSelect)>=0)
          } catch (error) {
            console.log('error! component id: ',this.idComponent,error);
          }finally{
            console.log('onloadSelect - ',(new Date().getTime() - st),' ms');
            setTimeout(() => {
              this.loadingData = false
              this.widthComponent = document.getElementById(`${this.idComponent}`).clientWidth = ' px'
            }, 10);
          }
        },


        async onSetFirstSelect(defSelect=[], isMultiple=false){
          if(defSelect.length>0){
            if(isMultiple){
              await this.handleChange(defSelect.map(t=>t.value), defSelect)
            }else{
              await this.handleChange(defSelect[0].value,defSelect[0])
            }
            return
          }

          if(!this.autoSetValue){
            return
          }

          if(isMultiple){
              await this.handleChange([this.filteredOptions[0].value], [this.filteredOptions[0]])
          }else{
              await this.handleChange(this.filteredOptions[0].value, this.filteredOptions[0])
          }
        },

        getValueToArr(valueInput){
          if(valueInput == undefined || valueInput == null){
            return null
          }

          const defVal = [];
          if(!Array.isArray(valueInput)){
            return [`${valueInput}`]
          }

          if(valueInput.length<1 || !valueInput[0].hasOwnProperty('value')){
            return valueInput
          }
          return valueInput.map(t=>t.value)
        },

        getValueToString(){
          if(this.valueSl == undefined || this.valueSl == null){
            return ''
          }

          let text;
          if(Array.isArray(this.valueSl)){
            text = this.filteredOptions.filter(t=>this.valueSl.indexOf(t.value)>=0).map(t=>t.label).join(', ')
          }else{
            text = this.filteredOptions.filter(t=>this.valueSl===t.value).map(t=>t.label).join(', ')
          }

          return (text== null || text === '')? this.valueSl : text 
        },


        filterOptionHandle(input, option){
          return option.key.indexOf(noAccentLower(input)) >= 0;
        },

        //bat buoc phai co ham nay de emit value len Basicform
        async handleChange(value, ...args) {
          await this.onChange(value, args)
        }

    }
  }
</script>

