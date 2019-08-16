const toObj = (obj, item) => {
  const [key, val] = item;
  const data = { ...obj };
  data[key] = val;
  return data;
};

// validateEmail :: String -> Bool
function validateEmail(email) {
  // eslint-disable-next-line
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
}

// removeFalsy :: Obj -> Obj
function removeFalsy(obj) {
  const truthyValue = ([, val]) => val;

  const data = Object.entries(obj)
    .filter(truthyValue)
    .reduce(toObj, {});

  return data;
}

const parseUsername = username =>
  username
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();

function errHandler(msg, status) {
  const err = new Error(msg);
  err.status = status || null;
  return err;
}

const sendData = {
  success(arg, custom) {
    const data = {
      success: true,
      results: arg
    };
    return { ...data, ...custom };
  },
  fail(arg, custom) {
    const data = {
      success: false,
      results: arg
    };
    return { ...data, ...custom };
  }
};

module.exports = {
  validateEmail,
  removeFalsy,
  errHandler,
  sendData,
  parseUsername
};
