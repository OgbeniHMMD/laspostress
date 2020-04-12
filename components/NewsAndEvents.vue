<template>
  <div class="row container-fluid m-0 bg-light py-3 border-top">
    <section class="col-12 col-md-6 col-lg-8">
      <div>
        <span class="h1">News</span>
        <a href="#" class="border-left ml-3 pl-3">&gt;&gt; All News</a>
      </div>

      <div v-for="item in news" :key="item.id" class="d-flex flex-wrap">
        <article class="media position-relative my-2">
          <img src="~~/assets/images/logo-inner.png" class="mr-3 thumb" alt="..." />
          <div class="media-body">
            <a :href="item.slug" class="stretched-link">
              <h3 class="m-0">{{item.title}}</h3>
            </a>
            <p class="lead d-none d-lg-block">{{item.description}}</p>
            <div class="text-muted">{{item.time}}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="col-12 col-md-6 col-lg-4">
      <div class="mt-5 mt-md-0">
        <span class="h1">Events</span>
        <a href="#" class="border-left ml-3 pl-3">&gt;&gt; All Events</a>
      </div>

      <div v-for="item in events" :key="item.id" class="d-flex flex-column justify-content-between">
        <article class="d-flex position-relative p-0 m-1 py-2">
          <div class="event-thumb h4 bg-primary m-0 p-2 mr-2 text-center text-white">
            {{item.time[0]}}
            <br />
            {{item.time[1]}}
          </div>
          <div>
            <a :href="item.slug" class="stretched-link">
              <h5 class="m-0">{{item.title}}</h5>
            </a>
            <div class="pt-2 text-muted text-small">{{item.comment}}</div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>


<script>
//import newsJSON from "news.json";

export default {
  data: function() {
    return {
      news: [
        {
          id: "000",
          slug: "dummy-slug",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          time: "Yesterday",
          description:
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: "002",
          slug: "dummy-slug",
          title: " Vivendum intellegat et qui, ei denique consequuntur vix",
          time: "Today",
          description:
            "Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec."
        },
        {
          id: "002",
          slug: "dummy-slug",
          title:
            "Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te",
          time: "3 minutes ago",
          description:
            "Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Et mazim recteque nam. Nobis perfecto id vix, dicat vocent id nam."
        }
      ],

      events: [
        {
          id: "000",
          slug: "dummy-event-slug",
          title: "He stared at the clinic, Molly took him to the Tank War",
          time: ["21", "APR"],
          comment: "Dummy Event description..."
        },
        {
          id: "000",
          slug: "dummy-event-slug",
          title:
            "Mouth touched with hot gold as a gliding cursor struck sparks",
          time: ["1", "JAN"],
          comment: "Dummy Event description..."
        },
        {
          id: "000",
          slug: "dummy-event-slug",
          title:
            "From the wall between the bookcases, its distorted face sagging to the bare concrete floor",
          time: ["DEC", "19"],
          comment: ""
        },
        {
          id: "004",
          slug: "dummy-event-slug",
          title:
            "The semiotics of the previous century. They floated in the human system",
          time: ["DEC", "7"],
          comment: "Annual"
        },
        {
          id: "004",
          slug: "dummy-event-slug",
          title:
            "The alarm still oscillated, louder here, the rear wall dulling the roar of the spherical chamber",
          time: ["DEC", "31"]
        }
      ]
    };
  }
};
</script>