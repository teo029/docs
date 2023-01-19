"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70856:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(49366),r=n(30547);const l={title:"1 - Setup"},s=void 0,c={unversionedId:"tutorial/console/setup",id:"tutorial/console/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a Task list application with a standard C# Console App Starter Project. This tutorial assumes that you have some familiarity with starting up a new Visual Studio Project.",source:"@site/docs/csharp/tutorial/console/1-setup.md",sourceDirName:"tutorial/console",slug:"/tutorial/console/setup",permalink:"/csharp/tutorial/console/setup",editUrl:"https://github.com/getditto/docs/tree/main/docs/csharp/tutorial/console/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"docs",previous:{title:"4 - Editing Tasks",permalink:"/csharp/tutorial/xamarin/edit-screen"},next:{title:"2 - Configuring Commands",permalink:"/csharp/tutorial/console/configuring-commands"}},p=[{value:"1.1 Create a new Console Project",id:"11-create-a-new-console-project",children:[],level:2},{value:"1.2 Add Ditto to the project",id:"12-add-ditto-to-the-project",children:[],level:2},{value:"1.3 Create a new file called <strong>Task.cs</strong>",id:"13-create-a-new-file-called-taskcs",children:[],level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following guide will show you how to build a Task list application with a standard C# Console App Starter Project. This tutorial assumes that you have some familiarity with starting up a new Visual Studio Project."),(0,o.kt)("h2",{id:"11-create-a-new-console-project"},"1.1 Create a new Console Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up Visual Studio for Windows or for Mac."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"New Project")," and select ",(0,o.kt)("strong",{parentName:"li"},"Console Application"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console Project Selection Visual Studio Mac",src:n(88823).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"When the prompt asks to select a target framework, you can feel free to select ",(0,o.kt)("strong",{parentName:"li"},".NET 6.0"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a Project Name, for this example we went with ",(0,o.kt)("strong",{parentName:"li"},"Tasks"),".")),(0,o.kt)("h2",{id:"12-add-ditto-to-the-project"},"1.2 Add Ditto to the project"),(0,o.kt)("p",null,"We've deployed Ditto for C# on the standard NuGet package repository. We will need to add Ditto to this project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click the project's ",(0,o.kt)("strong",{parentName:"li"},"Dependencies")," folder, and click ","_",(0,o.kt)("em",{parentName:"li"},"Manage NuGet Dependencies"),"."),(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("strong",{parentName:"li"},'"Ditto"')," in the search bar and add the package called ",(0,o.kt)("strong",{parentName:"li"},'"Ditto" by "Ditto"'),". Ensure not to mistake it for another package.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Nuget Selection Selection Visual Studio Mac",src:n(6964).Z})),(0,o.kt)("p",null,"If you prefer a different way of installation, feel free to take a look at the alternative ways to install or ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Ditto/"},"reference the NuGet page here."),"."),(0,o.kt)(i.Z,{groupId:"dotnet-installation",defaultValue:"javascript",values:[{label:"Package Manager",value:"package-manager"},{label:".NET CLI",value:"cli"},{label:"Package Reference",value:"package-reference"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"package-manager",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-command"},"Install-Package Ditto\n"))),(0,o.kt)(r.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-command"},"dotnet add package Ditto\n"))),(0,o.kt)(r.Z,{value:"package-reference",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Ditto" Version="2.*" />\n')))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("strong",{parentName:"li"},"Program.cs")," file add ",(0,o.kt)("inlineCode",{parentName:"li"},"using DittoSDK")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"using System.Collections.Generic")," to the top of the file like so:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Now we'll need to hold a reference to our Ditto instance as a ",(0,o.kt)("inlineCode",{parentName:"li"},"static")," variable and also add a ",(0,o.kt)("inlineCode",{parentName:"li"},"static DittoLiveQuery")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"static DittoSubscription")," variable. These variables must be ",(0,o.kt)("inlineCode",{parentName:"li"},"static")," because the console program's ",(0,o.kt)("inlineCode",{parentName:"li"},"Main")," function is also ",(0,o.kt)("inlineCode",{parentName:"li"},"static"),"."),(0,o.kt)("li",{parentName:"ol"},"Instantiate the ",(0,o.kt)("inlineCode",{parentName:"li"},"ditto")," static variable by constructing it with a development identity with an ",(0,o.kt)("inlineCode",{parentName:"li"},'appID: "live.ditto.tasks"'),". If you want to sync with other tutorial app types like iOS or Android, you'll need to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"appID")," to enable sync. Also ensure to add your license token to ",(0,o.kt)("inlineCode",{parentName:"li"},"ditto.SetOfflineOnlyLicenseToken")," to properly")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'namespace Tasks\n{\n    class Program\n    {\n        // 4.\n        // highlight-start\n        static Ditto ditto;\n        static DittoLiveQuery liveQuery;\n        static DittoSubscription subscription;\n        // highlight-end\n\n        public static void Main(params string[] args)\n        {\n          // 5.\n          // highlight-start\n          ditto = new Ditto(identity: DittoIdentity.OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID", "REPLACE_ME_WITH_YOUR_PLAYGROUND_TOKEN"), path);\n\n          try\n          {\n              ditto.SetOfflineOnlyLicenseToken("<REPlACE_ME>");\n              ditto.StartSync();\n          }\n          catch (DittoException ex)\n          {\n              Console.WriteLine("There was an error starting Ditto.");\n              Console.WriteLine("Here\'s the following error");\n              Console.WriteLine(ex.ToString());\n              Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n              Console.WriteLine("Ditto will still work as a local database.");\n          }\n          Console.WriteLine("Welcome to Ditto\'s Task App");\n          // highlight-end\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"13-create-a-new-file-called-taskcs"},"1.3 Create a new file called ",(0,o.kt)("strong",{parentName:"h2"},"Task.cs")),(0,o.kt)("p",null,"Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like C#, we will create a data structure give more definition to the app. Create a new C# file called ",(0,o.kt)("strong",{parentName:"p"},"Task.cs")," in your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the new file, you'll need to reference ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoSDK"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the matching variables ",(0,o.kt)("inlineCode",{parentName:"p"},"string _id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string body"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"bool isCompleted")," to the struct. We will use this to match the document values to to the struct.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add an constructor to Task that takes in a DittoDocument. In the constructor, parse out the document's keys with Ditto's type safe value accessors. This will safely map all the document's values to the struct's variables that we created in step 2. In addition we will add a couple of other constructor overloads for easier creation of data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Override the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToString()")," method of the struct. We will later use this to easily print out a more readable string that we can use in ",(0,o.kt)("inlineCode",{parentName:"p"},"Console.WriteLine")," back in the main ",(0,o.kt)("strong",{parentName:"p"},"Program.cs"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a function to the struct called ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDictionary")," which will serialize the values into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>"),". This will assist us later when we need to insert a new document into Ditto."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Task.cs"',title:'"Task.cs"'},'// 1.\n// highlight-start\nusing System;\nusing System.Collections.Generic;\nusing DittoSDK;\n// highlight-end\n\nnamespace Tasks\n{\n    public struct Task\n    {\n        string _id;\n        string body;\n        bool isCompleted;\n\n        // 3\n        // highlight-start\n        public Task(string _id, string body, bool isCompleted)\n        {\n            this._id = _id;\n            this.body = body;\n            this.isCompleted = isCompleted;\n        }\n\n        public Task(string body, bool isCompleted)\n        {\n            this._id = Guid.NewGuid().ToString();\n            this.body = body;\n            this.isCompleted = isCompleted;\n        }\n\n        public Task(DittoDocument document)\n        {\n            this._id = document["_id"].StringValue;\n            this.body = document["body"].StringValue;\n            this.isCompleted = document["isCompleted"].BooleanValue;\n        }\n        // highlight-end\n\n        // 4.\n        // highlight-start\n        public override string ToString()\n        {\n            return $"Task _id: {_id}, body: {body}, isCompleted: {isCompleted}";\n        }\n        // highlight-end\n\n        // 5.\n        // highlight-start\n        public Dictionary<string, object> ToDictionary()\n        {\n            return new Dictionary<string, object>\n            {\n                { "_id", _id },\n                { "body", body },\n                { "isCompleted", isCompleted },\n            };\n        }\n        // 5.\n        // highlight-end\n    }\n}\n')))}u.isMDXComponent=!0},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(79443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},49366:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(80944),i=n(86010);const r=function(e){const{lazy:t,platform:n,block:r,defaultValue:l,values:s,groupId:c,className:p}=e,d=a.Children.toArray(e.children),u=s??d.map((e=>({value:e.props.value,label:e.props.label}))),m=l??d.find((e=>e.props.default))?.props.value,{tabGroupChoices:g,setTabGroupChoices:h}=(0,o.Z)(),[k,f]=(0,a.useState)(m);(0,a.useEffect)((()=>{if(null!=c){const e=g[c];null!=e&&e!==k&&(u.some((t=>t.value===e))?f(e):f(m))}}),[n,g[c]]);const y=e=>{f(e),null!=c&&h(c,e)},b=u.length>1;return a.createElement("div",{className:"tabs-container"},b&&a.createElement(a.Fragment,null,a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:k,onChange:e=>y(e.currentTarget.value),className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((e=>{let{value:t,label:n}=e;return a.createElement("option",{value:t,key:t},n??t)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((e=>{let{value:t,label:n}=e;return a.createElement("button",{key:t,onClick:()=>y(t),className:(0,i.Z)(k===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":k===t?"page":void 0},n??t)}))))),t?(0,a.cloneElement)(d.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},86010:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},88823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-project-selection-eb032ab074a0ab27450b409c6806ce3b.png"},6964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nuget-selection-mac-1dc1f9b8d3ff1a44dd8c915874590d9f.png"}}]);