(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),s=a(58);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(97);i.a.render(r.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return l}));var n="LOAD_TOOLS",r="FILTER_TOOLS",o="OPEN_POPUP",i="CLOSE_POPUP",s="SET_SEARCH",c="SET_CATEGORY",l="SET_FILE_FORMAT"},22:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return p}));var n=a(43),r=a(12),o=a(13);function i(e,t,a,n){return{type:o.d,tool:e,side:t,offsets:a,paddingBottom:n}}function s(){return{type:o.a}}function c(e){return{type:o.g,search:e}}function l(e){return{type:o.e,category:e}}function u(e){return{type:o.f,fileFormat:e}}function p(e,t){switch(t.type){case o.d:var a=t.tool?e.tools.filter((function(e){return e.name===t.tool}))[0]:null;return Object(r.a)({},e,{selectedToolInfo:a,selectedTool:t.tool,selectedToolSide:t.side,popupOpen:!0,paddingBottom:t.paddingBottom,popupOffsetTop:t.offsets.offsetTop,offsetHorizontal:t.offsets.offsetHorizontal});case o.a:return Object(r.a)({},e,{popupOpen:!1,paddingBottom:!1});case o.g:return Object(r.a)({},e,{filters:Object(r.a)({},e.filters,{search:t.search})});case o.e:return Object(r.a)({},e,{filters:Object(r.a)({},e.filters,{categories:Object(r.a)({},Object.entries(e.filters.categories).map((function(e){return!1})),Object(n.a)({},t.category,!e.filters.categories[t.category]))})});case o.f:return Object(r.a)({},e,{filters:Object(r.a)({},e.filters,{fileFormat:t.fileFormat})});default:return e}}},37:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var n=a(12),r=a(13);function o(){return{type:r.c}}function i(){return{type:r.b}}function s(e,t){switch(t.type){case r.c:var o=a(51),i=o.reduce((function(e,t){return console.log(t),t.fileFormats&&t.fileFormats.forEach((function(t){return e.includes(t)?null:e.push(t)})),e}),[]);return Object(n.a)({},e,{tools:o,filteredTools:o,fileFormats:i});case r.b:var s=e.tools;return e.filters.search&&(s=s.filter((function(t){return t.name.toLowerCase().includes(e.filters.search.toLowerCase())}))),e.filters.categories&&Object.entries(e.filters.categories).forEach((function(e){e[1]&&(s=s.filter((function(t){return t.language.includes(e[0])})))})),e.filters.fileFormat&&(s=s.filter((function(t){return"GDAL supported formats"===e.filters.fileFormat?t.fileFormats.length>=1:t.fileFormats.includes(e.filters.fileFormat)||"GDAL supported formats"===t.fileFormats[0]}))),Object(n.a)({},e,{filteredTools:s});default:return e}}},51:function(e){e.exports=JSON.parse('[{"name":"Weka","url":"https://www.cs.waikato.ac.nz/ml/weka/","description":"Weka includes tools for data preparation, classification, regression, clustering, and other machine learning algorithms used for data mining.","releaseYear":"1993","language":["Java"],"creators":"University of Waikato, NZ"},{"name":"Shogun","url":"https://github.com/shogun-toolbox/shogun","description":"Shogun is a machine learning toolbox that supports the implementation of standard machine learning algorithms.","releaseYear":"1999","language":["Python"],"creators":"Gunnar R\xe4tsch, Soeren Sonnenburg"},{"name":"OpenCV","url":"github.com/opencv/opencv","description":"OpenCV is a computer vision and machine learning library that provides common infrastructure to accelerate machine perception.","releaseYear":"2000","language":["C++","C","Python"],"creators":"Intel, Willow Garage, Itseez"},{"name":"Torch","url":"github.com/torch/torch7","description":"Torch is a scientific computing framework that supports machine learning algorithms on GPUs.","releaseYear":"2002","language":["C","C++","Lua"],"creators":"Ronan Collobert, Samy Bengio, Johnny Mari\xe9thoz"},{"name":"Dlib","url":"https://github.com/davisking/dlib","description":"Dlib is a toolkit that contains machine learning algorithms and resources for creating complex applications.","releaseYear":"2002","language":["C++","Python","CUDA","C"],"creators":"Davis E. King"},{"name":"FANN","url":"https://github.com/libfann/fann","description":"Fast Artificial Neural Network (FANN) is a library that supports the implementation of multilayer artificial neural networks.","releaseYear":"2003","language":["C++","Python","C"],"creators":"Steffen Nissen"},{"name":"OpenNN","url":"https://github.com/Artelnics/OpenNN","description":"OpenNN is a library that implements neural networks and is optimized for high-performance predictive analytics.","releaseYear":"2003","language":["C++","C","CUDA"],"creators":"RAMFLOOD, Artelnics"},{"name":"Tesseract OCR","url":"https://github.com/tesseract-ocr/tesseract","description":"Tesseract OCR is an optical character recognition (OCR) engine.","releaseYear":"2005","language":["C++","Java"],"creators":"Hewlett-Packard, University of Nevada - Las Vegas, Google"},{"name":"scikit-learn","url":"github.com/scikit-learn/scikit-learn","description":"scikit-learn is a Python module for machine learning built on top of SciPy.","releaseYear":"2007","language":["Python","C","C++"],"creators":"David Cournapeau"},{"name":"Theano","url":"github.com/Theano","description":"Theano lets you define, optimize, and evaluate mathematical expressions with multi-dimensional arrays.","releaseYear":"2007","language":["Python"],"creators":"University of Montreal, Mila"},{"name":"mlpack","url":"https://github.com/mlpack/mlpack","description":"mlpack aims to provide fast, extensible implementations of cutting-edge machine learning algorithms.","releaseYear":"2008","language":["C++","Python","Go"],"creators":"Ryan Curtin"},{"name":"Apache Mahout","url":"https://github.com/apache/mahout","description":"Apache Mahout produces free implementations of distributed and scalable machine learning algorithms.","releaseYear":"2009","language":["Java","Scala"],"creators":"Apache Software Foundation"},{"name":"H20.ai","url":"https://github.com/h2oai","description":"H2O.ai offers a suite of open source AI projects for machine learning, large language models (LLM) fine-tuning and web app development.","releaseYear":"2012","language":["Java","Scala"],"creators":"Sei Ambati"},{"name":"Caffe","url":"https://github.com/BVLC/caffe","description":"Caffe provides a deep learning framework designed with expression, speed, and modularity.","releaseYear":"2014","language":["C++","Python","CUDA","MATLAB"],"creators":"Yangqing Jia"},{"name":"Keras","url":"github.com/keras-team/keras","description":"Keras offers consistent and simple APIs to reduce cognitive.","releaseYear":"2015","language":["Python"],"creators":"Fran\xe7ois Chollet"},{"name":"Chainer","url":"https://github.com/chainer/chainer","description":"Chainer is a deep learning framework that supported the building and training of neural networks.","releaseYear":"2015","language":["Python"],"creators":"Seiya Tokui"},{"name":"TensorFlow","url":"https://github.com/tensorflow/tensorflow","description":"TensorFlow is an end-to-end platform that provides a flexible ecosystem of tools for machine learning.","releaseYear":"2015","language":["C++","Python","Go"],"creators":"Google, Google Brain"},{"name":"fastText","url":"https://github.com/facebookresearch/fastText","description":"fastText is a library that supports learning word representations and sentence classification.","releaseYear":"2015","language":["C++","JavaScript","Python"],"creators":"Facebook AI Research (FAIR)"},{"name":"OpenAI","url":"https://github.com/openai","description":"OpenAI develops and provides access to a series of libraries and resources for AI-based applications.","releaseYear":"2015","language":["Python"],"creators":"Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever, John Schulman,  Wojciech Zaremba"},{"name":"Apache MXNet","url":"https://github.com/apache/incubator-mxnet","description":"Apache MXNet is a deep learning framework for combining symbolic and imperative programming.","releaseYear":"2015","language":["C++","Python","CUDA"],"creators":"Distributed (Deep) Machine Learning Community"},{"name":"CNTK","url":"https://github.com/microsoft/CNTK","description":"The Microsoft Cognitive Toolkit (CNTK) described neural networks series of computational steps through a directed graph and allowed users to combine common model types.","releaseYear":"2016","language":["C++","Python","CUDA","C#"],"creators":"Microsoft Research"},{"name":"Mycroft","url":"https://github.com/MycroftAI/mycroft-core","description":"Mycroft is an open source voice assistant.","releaseYear":"2016","language":["Python"],"creators":"Mycroft AI team"},{"name":"PyTorch","url":"github.com/pytorch/pytorch","description":"PyTorch is a machine learning framework for applications including computer vision and natural language processing.","releaseYear":"2016","language":["Python","C++","CUDA","C"],"creators":"Linux Foundation, Meta AI"},{"name":"Rasa","url":"https://github.com/RasaHQ","description":"Rasa provides machine learning tools for developers to build, improve, and deploy text-and voice-based chatbots and assistants.","releaseYear":"2016","language":["Python"],"creators":"Alan Nichol, Alex Weidauer"},{"name":"Hugging Face","url":"https://github.com/huggingface","description":"Hugging Face provides open source tools that allow users to integrate AI into their products and workflows.","releaseYear":"2016","language":["Python","Rust","C++"],"creators":"Cl\xe9ment Delangue, Julien Chaumond, Thomas Wolf"},{"name":"Ray","url":"https://github.com/ray-project/ray","description":"Ray provides a universal API for building distributed applications.","releaseYear":"2017","language":["Python","C++","Java"],"creators":"anyscale"},{"name":"Transformers","url":"https://github.com/huggingface/transformers","description":"Transformers provides tools and resource for training pretrained models.","releaseYear":"2018","language":["Python"],"creators":"Jason (Jinquan) Dai, Yiheng Wang, Xin Qiu, Ding Ding, Yao Zhang,  Yanzhang Wang, Xianyan Jia, Li (Cherry) Zhang, Yan Wan, Zhichao Li, Jiao Wang, Shengsheng Huang, Zhongyuan Wu, Yang Wang,  Yuhao Yang, Bowen She, Dongjie Shi, Qi Lu, Kai Huang, and Guoqiong Song."},{"name":"JAX","url":"https://github.com/google/jax","description":"JAX is a machine learning framework that combines Autograd and XLA to support transforming numerical functions.","releaseYear":"2018","language":["Python"],"creators":"Google"},{"name":"PyCaret","url":"https://github.com/pycaret/pycaret","description":"PyCaret is a machine learning library that supports automating machine learning workflows. ","releaseYear":"2020","language":["Python"],"creators":"Moez Ali"},{"name":"DeepSpeed","url":"https://github.com/microsoft/DeepSpeed","description":"DeepSpeed is a deep learning optimization library that supports deep learning training and inference.","releaseYear":"2020","language":["Python","C++","CUDA","C"],"creators":"Microsoft Research"},{"name":"Stable Diffusion","url":"github.com/Stability-AI/stablediffusion","description":"Stable Diffusion is a deep learning project that supports detailed text-to-image generation.","releaseYear":"2022","language":["Python"],"creators":"Runway, CompVis, and Stability AI"},{"name":"Open Assistant","url":"https://github.com/LAION-AI/Open-Assistant","description":"OpenAssistant is a chat-based assistant and also supports the creation of chat-enabled generative pre-trained transformers.","releaseYear":"2022","language":["Python"],"creators":"Andreas K\xf6pf, Yannic Kilcher, Huu Nguyen, Christoph Schuhmann"},{"name":"LLaMA","url":"https://github.com/facebookresearch/llama","description":"Large Language Model Meta AI (LLaMA) foundational large language model geared towards users in the research community.","releaseYear":"2023","language":["Python"],"creators":"Meta AI"},{"name":"Dolly","url":"https://github.com/databrickslabs/dolly","description":"Dolly is a large language model that supports high-quality instruction with  limited training parameters.","releaseYear":"2023","language":["Python"],"creators":"Databricks"}]')},58:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),o=a(33),i=a(68),s=a(53),c=a(66);Object(s.setConfig)({logLevel:"debug"}),t.a=Object(s.hot)(e)((function(){return r.a.createElement(o.a,{store:i.a},r.a.createElement(c.a,null))}))}).call(this,a(57)(e))},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n={};a.r(n),a.d(n,"loadTools",(function(){return m.b})),a.d(n,"filterTools",(function(){return m.a})),a.d(n,"openPopup",(function(){return g.b})),a.d(n,"closePopup",(function(){return g.a})),a.d(n,"setSearch",(function(){return g.f})),a.d(n,"setCategory",(function(){return g.d})),a.d(n,"setFileFormat",(function(){return g.e}));var r=a(0),o=a.n(r),i=a(12),s=a(17),c=a(18),l=a(21),u=a(20),p=a(14),f=a(15),h=a(33),m=a(37),g=a(22),d=a(134),b=a(133),y=a(65),v=a.n(y),O=a(51);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var E=function(e){Object(l.a)(a,e);var t=C(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSearchInputChange=function(t){e.props.actions.setSearch(t),e.props.actions.filterTools()},e.handleCategoryClick=function(t){e.props.actions.setCategory(t),e.props.actions.filterTools()},e.normalizeClassName=function(e){return e.toLowerCase().replace("#","sharp").replace("++","plusplus")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.store.filters,a=O.reduce((function(e,t){return t.language.forEach((function(t){return e.includes(t)?null:e.push(t)})),e}),[]);return o.a.createElement("div",{className:"filters"},o.a.createElement("div",{className:"search"},o.a.createElement(d.a,{id:"search",placeholder:"Search",onChange:function(t){return e.handleSearchInputChange(t.target.value)},InputProps:{disableUnderline:!0,endAdornment:o.a.createElement(v.a,null)},fullWidth:!0})),o.a.createElement("h4",null,"Language"),o.a.createElement("div",{className:"language"},a.map((function(a){return o.a.createElement(b.a,{key:a,className:t.categories[a]?"".concat(e.normalizeClassName(a)," selected"):e.normalizeClassName(a),onClick:function(){return e.handleCategoryClick(a)}},a)}))))}}]),a}(r.Component);var k=Object(h.b)((function(e){return{store:e.store}}),(function(e){return{actions:Object(f.b)(Object(i.a)({},n),e)}}))(E);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var P=function(e){Object(l.a)(n,e);var t=w(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.first,n=e.side,i=e.last,s=e.secondLast,c=a(89),l=a(90),u=a(91),p=a(92)("./".concat("right"!==n?"Right":"Left","-Snake-Head.svg")),f=a(95);return o.a.createElement(r.Fragment,null,t&&i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{backgroundImage:"url(".concat(c)},className:"snake-tail"}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(f)},className:"snake-head first ".concat(n)})):t?o.a.createElement("div",{style:{backgroundImage:"url(".concat(c)},className:"snake-tail"}):i?o.a.createElement("div",{style:{backgroundImage:"url(".concat(p)},className:"snake-head ".concat(n)}):"left"===n?o.a.createElement("div",{style:{backgroundImage:"url(".concat(l)},className:"snake-body ".concat(n)}):"right"===n&&s?o.a.createElement("div",{style:{backgroundImage:"url(".concat(u)},className:"snake-body ".concat(n)}):null)}}]),n}(r.Component),A=a(135);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var j=function(e){Object(l.a)(a,e);var t=T(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getOffsets=function(t,a){var n=t.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop;if(!t.classList.contains("tool"))return e.getOffsets(t.parentElement,a);var o=n.top+r,i=t.getElementsByTagName("h3")[0];return{offsetTop:o,offsetHorizontal:"left"===a?i.offsetLeft:n.width-i.offsetLeft-i.offsetWidth}},e.normalizeClassName=function(e){return e.toLowerCase().replace("#","sharp").replace("++","plusplus")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.side,n=t.tool,r=t.first,i=t.last,s=t.secondLast,c=t.openPopup,l=t.selected,u=n.language.length>1?"Multi-language":n.language;return o.a.createElement("div",{className:"home-tool"},o.a.createElement("div",{className:"tool ".concat(a," ").concat(n.language.length>1?"multi":this.normalizeClassName(n.language[0])).concat(l?" selected":""),onClick:function(t){return c(n.name,a,e.getOffsets(t.target,a),i)}},"left"===a?o.a.createElement("div",{className:"text left"},o.a.createElement("h3",null,n.releaseYear),o.a.createElement("h2",null,n.name),o.a.createElement(A.a,{className:"category",label:u})):o.a.createElement("div",{className:"text right"},o.a.createElement(A.a,{className:"category",label:u}),o.a.createElement("h2",null,n.name),o.a.createElement("h3",null,n.releaseYear)),o.a.createElement(P,{side:a,first:r,last:i,secondLast:s})))}}]),a}(r.Component),N=a(67);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var S=function(e){Object(l.a)(a,e);var t=R(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.side,n=e.offsetTop,r=e.offsetHorizontal,i=e.name,s=e.url,c=e.description,l=e.releaseYear,u=e.language,p=e.fileFormats,f=e.creators,h=e.developerQuote,m=e.closePopup,g={top:n,left:"left"===a?r:"unset",right:"right"===a?r:"unset"};return o.a.createElement(N.a.div,{className:"popup-wrapper ".concat(a),style:g,initial:"hidden",animate:t?"visible":"hidden",transition:{type:"spring",damping:50,stiffness:500},variants:{hidden:{opacity:0,scale:.5,transitionEnd:{display:"none"}},visible:{opacity:1,scale:1,display:"block"}}},o.a.createElement("button",{className:"close",onClick:m}),o.a.createElement("span",{className:"box"}),o.a.createElement("div",{className:"tool-popup"},o.a.createElement("div",{className:"content"},o.a.createElement("a",{href:s,target:i},o.a.createElement("h2",null,i)),o.a.createElement("p",null,c),o.a.createElement("span",null,o.a.createElement("h4",null,"Initial Release"),o.a.createElement("h5",null,l)),o.a.createElement("span",null,o.a.createElement("h4",null,"Language",u&&u.length>1?"s":""),o.a.createElement("h5",null,u?u.map((function(e,t,a){return a.length-1===t?e+".":e+", "})):null)),o.a.createElement("span",null,o.a.createElement("h4",null,"Creator(s)"),o.a.createElement("h5",null,f)),p&&p.length>0?o.a.createElement("span",null,o.a.createElement("h4",null,"Type",p.length>1?"s":""),o.a.createElement("h5",null,p?p.map((function(e,t,a){return a.length-1===t?e+".":e+", "})):null)):null,h?o.a.createElement("span",null,o.a.createElement("i",null,h)):null)))}}]),a}(r.Component);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var L=function(e){Object(l.a)(a,e);var t=Y(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOpenPopup=function(t,a,n,r){var o=e.props.store,i=o.popupOpen,s=o.selectedTool;t===s&&i?e.handleClosePopup():i?(e.handleClosePopup(),window.setTimeout((function(){e.props.actions.openPopup(t,a,n,r)}),400)):e.props.actions.openPopup(t,a,n,r)},e.handleClosePopup=function(){e.props.actions.closePopup()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.loadTools(),setTimeout((function(){var e={height:document.body.scrollHeight,width:document.body.scrollWidth};window.top.postMessage(e,"*")}),1e3)}},{key:"render",value:function(){var e=this,t=this.props.store,a=t.filteredTools,n=t.popupOpen,r=t.paddingBottom,i=t.selectedToolInfo,s=t.selectedTool,c=t.selectedToolSide,l=t.popupOffsetTop,u=t.offsetHorizontal;return o.a.createElement("div",{className:"home-info-graphic"},o.a.createElement("header",null,o.a.createElement("h2",null,"make",o.a.createElement("span",null,"path")),o.a.createElement("p",null,"Visualize what\u2019s hiding in your data.")),o.a.createElement("main",null,o.a.createElement("a",{id:"github-fork-me",href:"https://github.com/makepath/open-source-ai-infographic/",target:"#blank"},o.a.createElement("img",{loading:"lazy",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",className:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})),o.a.createElement("h1",null,"A History of",o.a.createElement("br",null)," Open Source AI Tools"),o.a.createElement("h3",null,"Click on the name of the tool to learn more about it."),o.a.createElement(k,null)),o.a.createElement("div",{className:"tools",style:n&&r?{paddingBottom:"20rem"}:{transition:"0.5s ease-in-out"}},a.length>0?a.map((function(t,r){return o.a.createElement(j,{key:"".concat(t.name,"-").concat(t.releaseYear),tool:t,side:r%2===0?"left":"right",first:0===r,last:r===a.length-1,secondLast:r===a.length-2,openPopup:e.handleOpenPopup,selected:t.name===s&&n})})):o.a.createElement("span",{className:"nothing-found"},"No tools found"),o.a.createElement(S,Object.assign({open:n,side:c},i,{offsetTop:l,offsetHorizontal:u,closePopup:this.handleClosePopup}))),o.a.createElement("footer",null,o.a.createElement("h2",null,"make",o.a.createElement("span",null,"path")),o.a.createElement("p",null,"Visualize what\u2019s hiding in your data.")))}}]),a}(r.Component);var F=Object(h.b)((function(e){return{store:e.store}}),(function(e){return{actions:Object(f.b)(Object(i.a)({},n),e)}}))(L);function I(e){e.children;return o.a.createElement("div",{className:"home-app"},o.a.createElement(F,null))}},68:function(e,t,a){"use strict";var n=a(15),r=a(60),o={tools:[],filteredTools:[],fileFormats:[],popupOpen:!1,paddingBottom:!1,selectedTool:null,selectedToolSide:null,popupOffsetTop:null,offsetHorizontal:null,filters:{search:"",categories:{vector:!1,raster:!1,both:!1,other:!1},fileFormat:""}},i=a(37),s=a(22),c=[i.c,s.c];var l={store:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;return a.type,e=t,c.reduce((function(e,t){return t(e,a)}),e)}},u=Object(n.c)(l),p=[r.a],f=function(e){return e};var h;t.a=Object(n.e)(u,h,Object(n.d)(n.a.apply(void 0,p),f))},75:function(e,t,a){e.exports=a(100)},89:function(e,t,a){e.exports=a.p+"static/media/Right-Snake-Tail.ebf1b7c3.svg"},90:function(e,t,a){e.exports=a.p+"static/media/Loop-Snake.8edbbf9a.svg"},91:function(e,t,a){e.exports=a.p+"static/media/Right-Snake.60ed3bb6.svg"},92:function(e,t,a){var n={"./Left-Snake-Head.svg":93,"./Right-Snake-Head.svg":94};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=92},93:function(e,t,a){e.exports=a.p+"static/media/Left-Snake-Head.09cdd625.svg"},94:function(e,t,a){e.exports=a.p+"static/media/Right-Snake-Head.41545645.svg"},95:function(e,t,a){e.exports=a.p+"static/media/Right-Head.b01fa118.svg"},97:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.9d96ac84.chunk.js.map