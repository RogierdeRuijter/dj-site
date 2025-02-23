const fiveDays = 1000 * 60 * 60 * 24 * 5;
// TODO: can I type info?
export const filterPastEvents = (event: any) => {
  const until = new Date(event.datetime.until);

  return until.valueOf() > new Date().valueOf() - fiveDays;
};
