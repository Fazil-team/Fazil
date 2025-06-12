import{Q as t}from"./DJIGoAyo.js";import{g as a}from"./YuATTzTn.js";const g=r=>new Promise(e=>{t.get(`/log?${a(r)}`).then(o=>{e(o)})});export{g as load_all_logs};
