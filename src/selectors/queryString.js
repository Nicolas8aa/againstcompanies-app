export const queryString = (q = "") => {
  const qObject = {};
  q.slice(1)
    ?.split("&")
    .forEach((word) => {
      const wkp = word.split("=");
      qObject[wkp[0]] = wkp[1];
    });
  return qObject;
};
