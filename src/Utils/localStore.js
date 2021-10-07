const Types = {
  LOGIN_REMEBER_ME: "LOGIN_REMEBER_ME",
  LOGIN_DETAILS: "LOGIN_DETAILS",
};

const storeLocalData = async (type, data) => {
  if (type && data) {
    try {
      localStorage.setItem(type, JSON.stringify(data));
      return { res: true, error: null };
    } catch {
      return { res: null, error: "JSON Storing Error" };
    }
  }
};

const getLocalData = async (type) => {
  if (type) {
    try {
      const local = localStorage.getItem(type);
      const res = JSON.parse(local);
      return { data: res, error: null };
    } catch (err) {
      console.error(err);
      return { data: null, error: "Parsing Error" };
    }
  }
};

export { storeLocalData, getLocalData, Types };
