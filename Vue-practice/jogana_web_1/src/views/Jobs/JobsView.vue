<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="jobs" :key="job.id" v-for="job in jobs">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.rank }}------{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading.....</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.jobs h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px auto;
  color: #444;
  max-width: 600px;
}
.jobs h2:hover {
  background: #ddd;
}

.jobs a {
  text-decoration: none;
}
</style>
