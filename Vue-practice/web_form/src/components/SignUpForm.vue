<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <p class="password">{{ passwordError }}</p>

    <label>Role:</label>
    <select name="" id="" v-model="role">
      <option value="Developer">Web Developer</option>
      <option value="Designer">Web Designer</option>
      <option value="Analyst">Web Analyst</option>
    </select>

    <div>
      <label>Skills</label>
      <input type="text" v-model="temSkill" @keydown.enter.prevent="addSkill" />
    </div>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }} </span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
  <p>Email:{{ email }}</p>
  <p>Password:{{ password }}</p>
  <p>Role:{{ role }}</p>
  <p>Terms Accepted:{{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "App",
      email: "",
      password: "",
      role: "None",
      terms: false,
      temSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill() {
      if (this.temSkill) {
        if (!this.skills.includes(this.temSkill)) {
          this.skills.push(this.temSkill);
        }
        this.temSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },
    handleSubmit() {
      //password Validation
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password Must Be At Least 6 Chars Long";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: left;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 2 0px;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  margin-bottom: 20px;
}

input[type="checkbox"] {
  display: inline-block;
  position: relative;
  top: 2px;
  width: 16px;
  margin: 0 10px 0 0;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
  padding: 6px 12px;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.submit {
  text-align: center;
}
.password {
  color: red;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
