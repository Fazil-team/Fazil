import{U as o}from"./BEw8kgE9.js";const i=(e,r,a)=>new Promise((t,n)=>{o.get(`/stream/shares?page_size=${e}&current_page=${r}&sort=${a}`).then(s=>{t(s.data.data)})});export{i as load_all_shares};
