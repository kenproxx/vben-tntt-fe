import moment from 'moment';
import { noAccent } from './no-accent';
import URI_API from './uri-const';

const DATE_ADD_CONST_TAG = {
  years: 'years',
  months: 'months',
  days: 'days',
  hours: 'hours',
  minutes: '',
};

const DATE_FORMAT_TAG = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  date_export: 'YYYYMMDD_HHmmss_',
  date_vn: 'DD/MM/YYYY',
};

const FORM_ACTION_TAG = {
  VIEW: 0,
  CREATE: 1,
  EDIT: 2,
  DELETE: 3,
};

const deepClone = (jsonData) => {
  return JSON.parse(JSON.stringify(jsonData));
};

const toJson = (inputData, defaultValue = {}) => {
  try {
    return typeof inputData == 'string' ? JSON.parse(inputData) : inputData;
  } catch (error) {
    return defaultValue;
  }
};

const reformatDate = (dateInput = new Date(), newformat = 'YYYY-MM-DD') => {
  if (!dateInput) {
    return dateInput;
  }
  return moment(moment(dateInput).format(newformat), newformat).toDate();
};

const reformatStringDate = (stringDate = '', currentFormat = '', newformat = 'YYYY-MM-DD') => {
  if (!stringDate) {
    return stringDate;
  }

  return moment(stringDate, currentFormat).format(newformat);
};

const dateAdd = (dateInput, value, addConst = DATE_ADD_CONST_TAG.days) => {
  if (!dateInput) {
    return dateInput;
  }
  return moment(dateInput).add(addConst, value).toDate();
};

const dateToString = (dateInput, formatDate = 'YYYY-MM-DD') => {
  if (!dateInput) {
    return '';
  }
  return moment(dateInput).format(formatDate);
};

const dateFromString = (dateInput, formatDate = 'YYYY-MM-DD') => {
  if (!dateInput) {
    return null;
  }
  return moment(dateInput, formatDate).toDate();
};

const sysdate = () => {
  return reformatDate(new Date());
};

/**
 * ------------------------------------------------------------------------------------------------
 * --------------------------------------COMMON VUEJS----------------------------------------------
 * ------------------------------------------------------------------------------------------------
 */
const commonVue = (_this) => {
  const validate = {
    trust: async (regFormName, tagNames = []) => {
      try {
        if (tagNames && tagNames.length > 0) {
          await _this.$refs[regFormName].validate(tagNames);
        } else {
          await _this.$refs[regFormName].validate();
        }
      } catch (error) {
        return false;
      }
    },
    clean: (regFormName, tagNames = []) => {
      if (tagNames && tagNames.length > 0) {
        _this.$refs[regFormName]?.clearValidate(tagNames);
      } else {
        _this.$refs[regFormName]?.clearValidate();
      }
    },
  };

  return { validate };
};

const mapComputed = (propName) => {
  return {
    // getter
    get: function () {
      return this[propName]
    },
    // setter
    set: function (newValue) {
          this.$emit('update:'+propName, newValue);
    }
  }
}
/**
 * ------------------------------------------------------------------------------------------------
 * --------------------------------------COMMON end----------------------------------------------
 * ------------------------------------------------------------------------------------------------
 */

export default {
  DATE_ADD_CONST_TAG,
  DATE_FORMAT_TAG,
  FORM_ACTION_TAG,
  URI_API,

  deepClone,
  toJson,

  reformatDate,
  reformatStringDate,
  dateAdd,
  dateToString,
  dateFromString,
  sysdate,

  commonVue,
  mapComputed,
};
