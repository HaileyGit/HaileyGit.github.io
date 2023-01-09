"use strict";(self.webpackChunkhailey_blog=self.webpackChunkhailey_blog||[]).push([[264],{2600:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},583:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return p},M:function(){return v},P:function(){return w},_:function(){return i},a:function(){return l},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7378),n=(a(2600),a(3615)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,u);return r.createElement(r.Fragment,null,r.createElement(m,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,g);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,y);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},f.displayName="Picture",f.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,E);return t?r.createElement(f,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=f.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(f,l({},e)),r.createElement("noscript",null,r.createElement(f,l({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=f.propTypes;const C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:C},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],k=new Set;let S,x;const I=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,y=i(e,N);const{width:h,height:f,layout:b}=n,E=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,f,b),{style:w,className:v}=E,C=i(E,T),L=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const A=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,h,f);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(857)]).then(a.bind(a,857)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(I);if(x&&k.has(I))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:k.has(I),image:n},y)),k.has(I)||(t=requestAnimationFrame((()=>{L.current&&(r=i(L.current,I,k,s,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{k.has(I)&&x&&(L.current.innerHTML=x(l({isLoading:k.has(I),isLoaded:k.has(I),image:n},y)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},w,s,{backgroundColor:c}),className:v+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));A.propTypes=L,A.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),R={src:s().string.isRequired,alt:C,width:O,height:O,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(W=A,function(e){let{src:t,__imageData:a,__error:n}=e,s=i(e,_);return n&&console.warn(n),a?r.createElement(W,l({image:a},s)):(console.warn("Image not loaded",t),null)});var W;P.displayName="StaticImage",P.propTypes=R},6331:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7378),n=a(2298),s=a(583),l=a(1964),i=a(8356),o=a(1325);function c(){const{author:e,avatar:t,bio:a}=(0,o.$)();return r.createElement("div",{className:"style-module--AuthorSnippet--c590f"},r.createElement(s.G,{image:t.childImageSharp.gatsbyImageData,alt:e,className:"style-module--Avatar--465c3"}),r.createElement("div",{className:"style-module--Description--cb98e"},r.createElement("span",{className:"style-module--WrittenBy--badc5"},"Written By ",r.createElement("u",null,e)),r.createElement("p",{className:"style-module--Bio--f22bc"},a)))}function d(e){const t=e.pageContext.article;return r.createElement(r.Fragment,null,r.createElement(i.p,{title:t.title,description:t.description||void 0,useTitleTemplate:!0}),r.createElement(l.T,null,r.createElement("article",{className:"style-module--Article--2f61f"},r.createElement("div",{className:"style-module--Breadcrumb--9a493"},r.createElement(n.Link,{to:e.pageContext.listingPagePath,title:"Back To Article Listing"},r.createElement("span",{className:"style-module--BackArrow--de935"},"❮"),"All Articles")),r.createElement("section",{className:"style-module--Header--f58b3"},r.createElement("span",{className:"style-module--Category--cd0b6"},t.categories.join(" / ")),r.createElement("h1",null,t.title),r.createElement("div",{className:"style-module--Details--5cb94"},t.date,r.createElement("span",{className:"style-module--ReadingTime--72822"},t.readingTime.text))),t.banner&&t.banner.src&&r.createElement("section",{className:"style-module--Banner--8696e"},r.createElement(s.G,{image:t.banner.src.childImageSharp.gatsbyImageData,alt:t.banner.alt||"Image for "+t.title,imgClassName:"style-module--BannerImage--cc4da"}),t.banner.caption&&r.createElement("span",{className:"style-module--BannerCaption--0a3e0",dangerouslySetInnerHTML:{__html:t.banner.caption}})),r.createElement("section",{className:"style-module--Body--45d11"},r.createElement("div",{className:"style-module--Content--555f5",dangerouslySetInnerHTML:{__html:t.body}}),t.keywords&&t.keywords.map(((e,t)=>r.createElement("span",{key:t,className:"style-module--Keyword--3887c"},e)))),r.createElement("section",{className:"style-module--Footer--07cd7"},r.createElement(c,null)))))}a(3582)},3582:function(e,t,a){a.r(t)}}]);
//# sourceMappingURL=component---gatsby-theme-portfolio-minimal-src-templates-article-index-tsx-3ec0c2a09028bc983c00.js.map