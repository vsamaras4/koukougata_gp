import{S as w,i as b,s as B,k as y,l as I,n,R as o,T as g,b as S,H as h,h as j}from"./index.cdc996a9.js";/* empty css                                            */function k(a){let e,i;return{c(){e=y("img"),this.h()},l(l){e=I(l,"IMG",{srcset:!0,src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),this.h()},h(){n(e,"srcset",a[3]()),o(e.src,i=a[0])||n(e,"src",i),n(e,"alt",a[1]),n(e,"loading","lazy"),n(e,"decoding","async"),n(e,"class","svelte-1ykl0dj"),g(e,"full-bleed",a[2])},m(l,f){S(l,e,f)},p(l,[f]){f&1&&!o(e.src,i=l[0])&&n(e,"src",i),f&2&&n(e,"alt",l[1]),f&4&&g(e,"full-bleed",l[2])},i:h,o:h,d(l){l&&j(e)}}}function q(a,e,i){let l,{src:f}=e,{alt:m}=e,{fullBleed:d=void 0}=e,{formats:c=["jpg","png"]}=e,{format:u=void 0}=e,{widths:r=void 0}=e;function _(){let t="";if(r)for(let s=0;s<r.length;s++)t+=`${l}-${r[s]}.${c[0]} ${r[s]}w`,s<r.length-1&&(t+=", ");else if(u)t+=`${l}.${u}`;else for(let s=0;s<c.length;s++)t+=`${l}.${c[s]}`,s<c.length-1&&(t+=", ");return t}return a.$$set=t=>{"src"in t&&i(0,f=t.src),"alt"in t&&i(1,m=t.alt),"fullBleed"in t&&i(2,d=t.fullBleed),"formats"in t&&i(4,c=t.formats),"format"in t&&i(5,u=t.format),"widths"in t&&i(6,r=t.widths)},a.$$.update=()=>{a.$$.dirty&1&&(l=f.split(".")[0])},[f,m,d,_,c,u,r]}class C extends w{constructor(e){super(),b(this,e,q,k,B,{src:0,alt:1,fullBleed:2,formats:4,format:5,widths:6})}}export{C as I};
