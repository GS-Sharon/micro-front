<!--
 * @Author: your name
 * @Date: 2021-05-31 01:29:15
 * @LastEditTime: 2021-05-31 10:22:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-base/src/App.vue
-->
<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/vue">VueApp</el-menu-item>
      <el-menu-item index="/react">ReactApp</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>


