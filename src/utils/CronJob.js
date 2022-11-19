import cronstrue from "cronstrue";
import parser from "cron-parser";
import dayjs from "dayjs";
import randomColor from "randomcolor";

class CronJob {
  constructor({ name, schedule }) {
    this.name = name;
    this.schedule = schedule;
    this.humanizedSchedule = cronstrue.toString(schedule);
    this.color = randomColor({ luminosity: "dark" });
  }

  get todaysSchedule() {
    let schedule = [];

    let interval = parser.parseExpression(this.schedule, { iterator: true });
    let time = interval.next();

    while (dayjs().isSame(time.value.toString(), "day")) {
      schedule.push({
        name: this.name,
        time: time.value.toString(),
        color: this.color,
      });
      time = interval.next();
    }

    return schedule;
  }
}

export default CronJob;
