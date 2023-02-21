export const ruleConfig = (props) => (message) => {
  return {
    ...props,
    message: message,
  };
};

export const required = ruleConfig({ required: true });

export const maxLengthOnBlur = (val, message) => {
  return ruleConfig({ max: val })(`${message}`);
};

export const maxLengthInput = (val: any) => {
  return ruleConfig({ max: val })(`Giới hạn ${val} kí tự`);
};

export const maxLengthInputNumber = (val: any) => {
  return ruleConfig({ max: val })(`Giới hạn ${val} số`);
};

export const minLengthInput = (val: any) => {
  return ruleConfig({ min: val })(`Tối thiểu ${val} kí tự`);
};

//validate đầu biển theo tỉnh
export const inputDbTheoTinh = (integerOnly = true) => {
  return ruleConfig({
    pattern: integerOnly ? new RegExp(/^\d{2}$/) : new RegExp(/^\d*\.?\d*$/),
  })('Đầu biển theo tỉnh gồm 2 kí tự số');
};

export const numberOnly = (integerOnly = true) => {
  return ruleConfig({
    pattern: integerOnly ? new RegExp(/^\d*$/) : new RegExp(/^\d*\.?\d*$/),
  })('Chỉ cho nhập số');
};

export const requiredOnChange = () => {
  return required('Yêu cầu nhập đẩy đủ thông tin');
};

export const requiredOnChangeText = (text?: String) => {
  return required(`Vui lòng nhập ${text}`);
};
export const requiredOnChangeSelect = (text?: String) => {
  return required(`Vui lòng chọn ${text}`);
};

export const validateInput = () => {
  return ruleConfig({
    pattern: new RegExp(/^[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/),
  })('Không chứa các kí tự đặc biệt');
};

export const validateAddress = () => {
  return ruleConfig({
    pattern: new RegExp(/^[^!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?]*$/),
  })('Không chứa các kí tự đặc biệt');
};

export const validateSeriChu = () => {
  return ruleConfig({
    pattern: new RegExp(/^[A-Z]+[A-Z 0-9]*$/),
  })('Các kí tự in hoa, kí tự đầu là chữ, không dấu');
};

export const validateRegex = (reg?: RegExp, message?: String) => {
  return ruleConfig({
    pattern: reg,
  })(message);
};

export const validateDateOnChange = (assertValidCondition, message) =>
  ruleConfig({
    validator: (value, callback) => {
      if (!value || assertValidCondition(value)) {
        callback();
      } else {
        callback(new Error());
      }
    },
  })(message || 'error');

export const validateInputVungDuLieu = () => {
  return ruleConfig({
    pattern: new RegExp(/^[A-Z-_]*$/),
  })('Các kí tự viết in hoa, không dấu, cách bằng dấu gạch dưới');
};
