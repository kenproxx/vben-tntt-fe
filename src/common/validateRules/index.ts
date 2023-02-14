export const ruleConfig = (props) => (trigger) => (message) => {
  return {
    ...props,
    trigger,
    message: message,
  };
};

export const required = ruleConfig({ required: true });

export const maxLengthOnBlur = (val, message) => {
  return ruleConfig({ max: val })('blur')(`${message}`);
};

export const maxLengthInput = (val: any) => {
  return ruleConfig({ max: val })('blur')(`Giới hạn ${val} kí tự`);
};

export const maxLengthInputNumber = (val: any) => {
  return ruleConfig({ max: val })('blur')(`Giới hạn ${val} số`);
};

export const minLengthInput = (val: any) => {
  return ruleConfig({ min: val })('blur')(`Tối thiểu ${val} kí tự`);
};

//validate đầu biển theo tỉnh
export const inputDbTheoTinh = (integerOnly = true) => {
  return ruleConfig({
    pattern: integerOnly ? new RegExp(/^\d{2}$/) : new RegExp(/^\d*\.?\d*$/),
  })('blur')('Đầu biển theo tỉnh gồm 2 kí tự số');
};

export const numberOnly = (integerOnly = true) => {
  return ruleConfig({
    pattern: integerOnly ? new RegExp(/^\d*$/) : new RegExp(/^\d*\.?\d*$/),
  })('blur')('Chỉ cho nhập số');
};

export const requiredOnChange = () => {
  return required('change')('Yêu cầu nhập đẩy đủ thông tin');
};

export const requiredOnChangeText = (text?: String) => {
  return required('change')(`Vui lòng nhập ${text}`);
};
export const requiredOnChangeSelect = (text?: String) => {
  return required('change')(`Vui lòng chọn ${text}`);
};

export const validateInput = () => {
  return ruleConfig({
    pattern: new RegExp(/^[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/),
  })('blur')('Không chứa các kí tự đặc biệt');
};

export const validateAddress = () => {
  return ruleConfig({
    pattern: new RegExp(/^[^!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?]*$/),
  })('blur')('Không chứa các kí tự đặc biệt');
};

export const validateSeriChu = () => {
  return ruleConfig({
    pattern: new RegExp(/^[A-Z]+[A-Z 0-9]*$/),
  })('blur')('Các kí tự in hoa, kí tự đầu là chữ, không dấu');
};

export const validateRegex = (reg?: RegExp, message?: String) => {
  return ruleConfig({
    pattern: reg,
  })('blur')(message);
};

export const validateDateOnChange = (assertValidCondition, message) =>
  ruleConfig({
    validator: (rule, value, callback) => {
      if (!value || assertValidCondition(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
  })('change')(message || 'error');

export const validateInputVungDuLieu = () => {
  return ruleConfig({
    pattern: new RegExp(/^[A-Z-_]*$/),
  })('blur')('Các kí tự viết in hoa, không dấu, cách bằng dấu gạch dưới');
};
