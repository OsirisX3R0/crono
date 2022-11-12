import cronstrue from "cronstrue";
import parser from "cron-parser";
import dayjs from "dayjs";

class CronJob {
  constructor({ name, schedule }) {
    this.name = name;
    this.schedule = schedule;
    this.humanizedSchedule = cronstrue.toString(schedule);
    this.todaysSchedule = [];

    let interval = parser.parseExpression(schedule, { iterator: true });
    let time = interval.next();

    while (dayjs().isSame(time.value.toString(), "day")) {
      this.todaysSchedule.push({
        name: this.name,
        time: time.value.toString(),
      });
      time = interval.next();
    }
  }
}

export default CronJob;
