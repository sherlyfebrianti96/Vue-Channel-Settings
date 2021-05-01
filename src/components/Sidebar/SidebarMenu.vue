<template>
  <div class="absolute top-0 w-full h-screen">
    <div class="w-full h-full bg-gray-800 opacity-70">
    </div>
    <div class="fixed top-0 left-0 bg-white h-full w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12">
      <div class="icon p-4 bg-green-50">
        <img alt="Apps Logo" src="./../../assets/logo.png" class="max-h-10 inline-block" />
        <span class="text-2xl inline-block pl-4 align-middle">Logo</span>
      </div>
      <div class="menus-container mt-2">
        <div
            v-for="(menu, i) in menus"
            :key="`menu-${i}`"
        >
          <div
              class="relative cursor-pointer pt-2 pb-2 pl-10 pr-5 hover:bg-gray-100"
              @click="toggleMenuExpand(i)"
          >
            <span
                v-if="menu.expand"
                class="absolute left-5 h-full"
            >
              <i class="fas fa-chevron-down text-xs" />
            </span>
            <span
                v-else
                class="absolute left-5 h-full"
            >
              <i class="fas fa-chevron-right text-xs" />
            </span>
            <strong>{{menu.name}}</strong>
          </div>
          <template v-if="menu.expand">
            <div
                v-for="(submenu, j) in menu.children"
                :key="`submenu-${j}`"
                class="relative cursor-pointer pl-10 pr-5 pt-1 pb-1 text-gray-500 hover:bg-gray-100"
            >
              <i
                  class="fas text-sm"
                  :class="submenu.icon"
              />
              <span class="ml-3">
                {{submenu.name}}
              </span>
              <span
                  v-if="submenu.badge"
                  class="text-sm absolute leading-6 align-middle right-6"
              >
                {{submenu.badge}}
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    msg: String
  },
  data() {
    return {
      menus: [
        {
          name: 'Inbox',
          expand: true,
          children: [
            {
              name: 'New',
              icon: 'fa-inbox',
              badge: 17
            },
            {
              name: 'Assigned',
              icon: 'fa-user-friends',
              badge: 110
            },
            {
              name: 'Closed',
              icon: 'fa-check',
              badge: null
            },
            {
              name: 'Spam',
              icon: 'fa-exclamation-circle',
              badge: null
            }
          ]
        },
        {
          name: 'Personal',
          expand: false,
          children: []
        },
        {
          name: 'Teams',
          expand: false,
          children: []
        },
        {
          name: 'Channels',
          expand: true,
          children: [
            {
              name: 'New',
              icon: 'fa-inbox',
              badge: 17
            },
            {
              name: 'Assigned',
              icon: 'fa-user-friends',
              badge: 17
            },
            {
              name: 'Closed',
              icon: 'fa-check',
              badge: null
            },
            {
              name: 'Spam',
              icon: 'fa-exclamation-circle',
              badge: null
            }
          ]
        },
      ]
    }
  },
  methods: {
    toggleMenuExpand(id) {
      this.menus[id].expand = !this.menus[id].expand;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
