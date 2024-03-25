<template>
  <div class="main-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Pokemon List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/id">Pokemon by ID</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>
