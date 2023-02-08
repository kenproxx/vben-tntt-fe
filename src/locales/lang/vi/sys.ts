export default {
  api: {
    operationSuccess: 'Operation Success',
    operationFailed: 'Operation failed',
    errorTip: 'Error Tip',
    successTip: 'Success Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',

    errMsg401: 'The user does not have permission (token, user name, password error)!',
    errMsg403: 'The user is authorized, but access is forbidden!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Đăng nhập',
    backHome: 'Trang chủ',
    subTitle403: "Bạn không có quyền truy cập trang này",
    subTitle404: 'Trang bạn truy cập không tồn tại!',
    subTitle500: 'Lỗi máy chủ, vui lòng liên hệ quản trị viên!',
    noDataTitle: 'Trang không có dữ liệu',
    networkErrorTitle: 'Mất kết nối mạng',
    networkErrorSubTitle:
      'Xin lỗi, vui lòng kiểm tra lại kết nối mạng của bạn!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Vui lòng nhập mật khẩu khóa màn hình hoặc mật khẩu đăng nhập',
  },
  login: {
    backSignIn: 'Quay lại đăng nhập',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr code sign in',
    signInFormTitle: 'Đăng nhập',
    signUpFormTitle: 'Đăng ký',
    forgetFormTitle: 'Khôi phục mật khẩu',

    signInTitle: 'THIẾU NHI THÁNH THỂ VIỆT NAM',
    signInDesc: 'Enter your personal details and get started!',
    policy: 'Tôi đã đọc và đồng ý với các điều khoản và điều kiện của dịch vụ',
    scanSign: `scanning the code to complete the login`,

    loginButton: 'Đăng nhập',
    registerButton: 'Đăng ký',
    rememberMe: 'Ghi nhớ',
    forgetPassword: 'Quên mật khẩu?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Đăng nhập thành công',
    loginSuccessDesc: 'Chào mừng bạn đến với Thiếu nhi Thánh Thể Việt Nam',

    // placeholder
    accountPlaceholder: 'Vui lòng nhập Tên đăng nhập',
    passwordPlaceholder: 'Vui lòng nhập Mật khẩu',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'Mật khẩu không khớp',

    userName: 'Tên đăng nhập',
    password: 'Mật khẩu',
    confirmPassword: 'Xác nhận mật khẩu',
    email: 'Email',
    smsCode: 'SMS code',
    mobile: 'Mobile',
  },
};
