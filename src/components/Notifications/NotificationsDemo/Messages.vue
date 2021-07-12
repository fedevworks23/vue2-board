<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item
      v-for="msgListItem in messagesList"
      :key="msgListItem.id"
      :class="['listGroupItem', msgListItem.bgPrimaryLight]"
    >
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          :src="getImgUrl(msgListItem.imgSrc)"
          :alt="getImgUrl(msgListItem.imgSrc)"
        />
        <i :class="['status', 'status-bottom', msgListItem.iconStatus]" />
      </span>
      <time class="text-link help float-right">{{ msgListItem.time }}</time>
      <h6 class="m-0 mb-1" :class="[ifRead ? 'fw-bold' : '']">
        {{ msgListItem.name }}
      </h6>
      <p
        class="deemphasize text-ellipsis m-0"
        v-html="msgListItem.messageText"
      ></p>
    </b-list-group-item>

    <!-- old -->
  </b-list-group>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      ifRead: true,
      messagesList: [
        {
          imgSrc: "a2.jpg",
          iconStatus: "bg-success",
          time: "10 sec ago",
          name: "Chris Gray",
          messageText: "Hey! What&apos;s up? So many times since we",
          bgPrimaryLight: "bg-primary-light",
        },
        {
          imgSrc: "a5.jpg",
          iconStatus: "bg-success",
          time: "2 min ago",
          name: "Jamey Brownlow",
          messageText: "Good news coming tonight. Seems they agreed to proceed",
          bgPrimaryLight: "",
        },
        {
          imgSrc: "a1.jpg",
          iconStatus: "bg-warning",
          time: "9 min ago",
          name: "Livia Walsh",
          messageText: "Check out my latest email plz!",
          bgPrimaryLight: "",
        },
        {
          imgSrc: "a6.jpg",
          iconStatus: "bg-warning",
          time: "12:56 AM",
          name: "Jaron Fitzroy",
          messageText: "What about summer break?",
          bgPrimaryLight: "",
        },
        {
          imgSrc: "a4.jpg",
          iconStatus: "bg-gray-light",
          time: "Yesterday",
          name: "Mike Lewis",
          messageText:
            "Just ain&apos;t sure about the weekend now. 90% I&apos;ll make it.",
          bgPrimaryLight: "",
        },
        {
          imgSrc: "a6.jpg",
          iconStatus: "bg-success",
          time: "Apr 23",
          name: "Mike Lewis",
          messageText:
            "Hey what&apos;s up? Me and Monica going for a lunch somewhere. Wanna join?",
          bgPrimaryLight: "",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgSrc) {
      return require("../../../assets/people/" + imgSrc);
    },
  },
};
</script>

<style src="./ListGroup.scss" lang="scss" />
