import { scheduleJob } from 'node-schedule';

type CallbackFunction = () => void;

export class Schedule {

  constructor(
    private schedule = scheduleJob
  ) { }

  everyFirstDayOfMonth(callback: CallbackFunction) {
    this.schedule('0 7 * 1 *', callback);
  }

  everyMonday(callback: CallbackFunction) {
    this.schedule('0 7 * * 1', callback);
  }

  everyFriday(callback: CallbackFunction) {
    this.schedule('0 7 * * 5', callback);
  }

  everyWorkingDay(callback: CallbackFunction) {
    this.schedule('0 6 * * 1-5', callback);
  }
}