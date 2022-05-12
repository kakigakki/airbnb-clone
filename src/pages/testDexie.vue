<script setup lang="ts">
import { db } from "@/api/db";
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { Friend } from "@/api/db";
import { Ref } from "vue";


//add
const addFriend = async () => {
  try {
    // Add the new friend!
    const id = await db.friends.add({ name: "aaa", age: 11 })
    console.log(id)


  } catch (error) {
    console.log(error)
  }
}

//query
const friends = useObservable(
  liveQuery(() => db.friends.toArray()) as any
) as Ref<Friend[]>

//
const updateFriend = async () => {
  try {
    // Add the new friend!
    const id = await db.friends.put({ id: 2, name: "sdsd", age: 111 })
    console.log(id)


  } catch (error) {
    console.log(error)
  }
}

const deleteFriend = async () => {
  try {
    // Add the new friend!
    const id = await db.friends.delete(3)
    console.log(id)
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <button rounded @click="addFriend" border=" dark-600" border-1 p="4" m="4" text="lg" bg="red"> addFriend</button>
  <button rounded @click="updateFriend" border=" dark-600" border-1 p="4" m="4" text="lg" bg="red">
    updateFriend</button>
  <button rounded @click="deleteFriend" border=" dark-600" border-1 p="4" m="4" text="lg" bg="red">
    deleteFriend</button>
  <span v-for="item in friends">
    <table>
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </span>
</template>
