<template>
  <Widget title="<h6> Watch </h6>" close collapse settings customHeader>
    <div class="watch-wrapper">
      <div class="watch-dial">
        <div v-if="includeSeconds">
          <div class="watch-hours">{{ hours }}</div>
          <div class="watch-minutes">{{ minutes }}</div>
        </div>
        <div v-else>
          <div class="watch-time">{{ time }}</div>
          <div class="watch-day">{{ day }}</div>
          <div class="watch-month">{{ month }}</div>
        </div>
      </div>
    </div>
  </Widget>
</template>

<script>
export default {
  name: "Watch",
  data() {
    return {
      includeSeconds: false,
      date: new Date(),
      dateInterval: null,
    };
  },
  mounted: function () {
    this.dateInterval = setInterval(() => {
      this.date = new Date();
    }, 100);
  },
  computed: {
    hours() {
      let hour = this.date.getHours();
      return hour > 12 ? (hour = hour - 12) : hour;
    },
    minutes() {
      let mins = this.date.getMinutes();
      return mins < 10 ? (mins = `0${mins}`) : mins;
    },
    time() {
      return `${this.hours}:${this.minutes}:${this.date.getSeconds()}`;
    },
    month() {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return month[`${this.date.getMonth()}`];
    },
    day() {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return weekday[this.date.getDay()];
    },
  },
};
</script>

<style lang="scss" scoped>
.watch-wrapper {
  text-align: center;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  .watch-dial {
    border: 1px solid;
    padding: 50px;
    width: 200px;
    background-color: #000000;
    color: #ffffff;

    .watch-hours {
      font-size: 2.5rem;
      color: red;
      font-weight: 600;
    }
    .watch-minutes {
      font-size: 2rem;
    }
    .watch-time {
      font-size: 2rem;
    }
    .watch-day {
      font-size: 1.6rem;
    }
    .watch-month {
      font-size: 2.5rem;
      color: red;
      font-weight: 400;
    }
  }
}
</style>