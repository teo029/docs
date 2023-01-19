"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return n?i.createElement(g,l(l({ref:t},m),{},{components:n})):i.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32377:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"2 - Configuring Commands"},l=void 0,r={unversionedId:"tutorial/console/configuring-commands",id:"tutorial/console/configuring-commands",isDocsHomePage:!1,title:"2 - Configuring Commands",description:"Unlike many UI applications, Console or Command Line applications have limitations to user interactions. For example, console applications typically read text commands during a while loop as a standard design pattern. This section will outline the command line design and set up the loop to allow the user to give continual commands.",source:"@site/docs/csharp/tutorial/console/2-configuring-commands.md",sourceDirName:"tutorial/console",slug:"/tutorial/console/configuring-commands",permalink:"/csharp/tutorial/console/configuring-commands",editUrl:"https://github.com/getditto/docs/tree/main/docs/csharp/tutorial/console/2-configuring-commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configuring Commands"},sidebar:"docs",previous:{title:"1 - Setup",permalink:"/csharp/tutorial/console/setup"},next:{title:"3 - Assigning Commands",permalink:"/csharp/tutorial/console/assigning-commands"}},s=[{value:"2.1 Designing the Commands",id:"21-designing-the-commands",children:[],level:2},{value:"2.2 Observing the Tasks with a Live Query",id:"22-observing-the-tasks-with-a-live-query",children:[],level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unlike many UI applications, Console or Command Line applications have limitations to user interactions. For example, console applications typically read text commands during a ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loop as a standard design pattern. This section will outline the command line design and set up the loop to allow the user to give continual commands."),(0,o.kt)("h2",{id:"21-designing-the-commands"},"2.1 Designing the Commands"),(0,o.kt)("p",null,"Our Tasks Console app will have five commands that map to Ditto and general console commands. We will need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"--insert")," to allow the user to ",(0,o.kt)("inlineCode",{parentName:"li"},".insert")," a new document into the ",(0,o.kt)("inlineCode",{parentName:"li"},"ditto.collection('tasks\")")," collection"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"--toggle")," to allow the user to ",(0,o.kt)("inlineCode",{parentName:"li"},".update")," a new document's ",(0,o.kt)("inlineCode",{parentName:"li"},"bool isCompleted")," property by its ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"--delete")," to allow the user to ",(0,o.kt)("inlineCode",{parentName:"li"},".remove")," a new document by its ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"--list")," will print every current Task that we have in the collection. In addition, we will always call this method before every item."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"--exit")," will quit the console app.")),(0,o.kt)("p",null,"As a best practice, long-running console applications should continuously print the primary set of commands as long as they are succinct. We'll create a utility method called ",(0,o.kt)("inlineCode",{parentName:"p"},"ListCommands()")," which, will ",(0,o.kt)("inlineCode",{parentName:"p"},"Console.WriteLine")," each of the commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n\n      public static void Main(params string[] args)\n      {\n        ditto = new Ditto(DittoIdentity.OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID", "REPLACE_ME_WITH_YOUR_PLAYGROUND_TOKEN"), path);\n\n        // ... omitted for brevity\n        // see `setup`\n      }\n\n      public static void ListCommands()\n      {\n          Console.WriteLine("************* Commands *************");\n          Console.WriteLine("--insert my new task");\n          Console.WriteLine("   Inserts a task");\n          Console.WriteLine("   Example: \\"--insert Get Milk\\"");\n          Console.WriteLine("--toggle myTaskTd");\n          Console.WriteLine("   Toggles the isComplete property to the opposite value");\n          Console.WriteLine("   Example: \\"--toggle 1234abc\\"");\n          Console.WriteLine("--delete myTaskTd");\n          Console.WriteLine("   Deletes a task");\n          Console.WriteLine("   Example: \\"--delete 1234abc\\"");\n          Console.WriteLine("--list");\n          Console.WriteLine("   List the current tasks");\n          Console.WriteLine("--exit");\n          Console.WriteLine("   Exits the program");\n          Console.WriteLine("************* Commands *************");\n      }\n    }\n}\n')),(0,o.kt)("h2",{id:"22-observing-the-tasks-with-a-live-query"},"2.2 Observing the Tasks with a Live Query"),(0,o.kt)("p",null,"As we insert, update, and delete our tasks, we will update the Tasks collection. To sync changes coming from other devices, we will need create a Live Query by calling ",(0,o.kt)("inlineCode",{parentName:"p"},".Observe"),". Remember Ditto will only sync with devices by calling ",(0,o.kt)("inlineCode",{parentName:"p"},".Observe")," on queries. The ",(0,o.kt)("inlineCode",{parentName:"p"},".Observe")," method will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoLiveQuery")," object. As long as the ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoLiveQuery")," object stays in scope and is not garbage collected, the Live Query will fire for any changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks")," collection. Remember, the ",(0,o.kt)("inlineCode",{parentName:"p"},".Observe")," callback will fire for both ",(0,o.kt)("em",{parentName:"p"},"local changes")," and ",(0,o.kt)("em",{parentName:"p"},"remote changes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'DittoLiveQuery liveQuery = ditto.Store["tasks"].Find("!isDeleted").ObserveLocal((docs, _event) => {\n  // this will fire for all changes syncronized to the store.\n});\n')),(0,o.kt)("p",null,"In the context of our console application, we need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Store a ",(0,o.kt)("inlineCode",{parentName:"li"},"List<Task>")," as a ",(0,o.kt)("inlineCode",{parentName:"li"},"static")," variable so that we can print it upon command"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".Observe")," all the document in the tasks collection. Take care to store the ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoLiveQuery")," as a ",(0,o.kt)("inlineCode",{parentName:"li"},"static")," variable as well."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},".Observe")," callback, convert all the ",(0,o.kt)("inlineCode",{parentName:"li"},"List<DittoDocument> docs")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"List<Task>")," and assign them to both variables detailed in step 1 and 2.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n\n        // 1.\n        // highlight-next-line\n        static List<Task> tasks = new List<Task>();\n        // 2.\n        // highlight-next-line\n        static DittoLiveQuery liveQuery;\n        static DittoSubscription subscription;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(DittoIdentity.OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID", "REPLACE_ME_WITH_YOUR_PLAYGROUND_TOKEN"), path);\n\n            try\n            {\n                ditto.SetOfflineOnlyLicenseToken("<REPlACE_ME>");\n                ditto.StartSync();\n            }\n            catch (DittoException ex)\n            {\n                Console.WriteLine("There was an error starting Ditto.");\n                Console.WriteLine("Here\'s the following error");\n                Console.WriteLine(ex.ToString());\n                Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n                Console.WriteLine("Ditto will still work as a local database.");\n            }\n\n            Console.WriteLine("Welcome to Ditto\'s Task App");\n\n            // 3.\n            // highlight-start\n            subscription = ditto.Store["tasks"].Find("!isDeleted").Subscribe()\n            liveQuery = ditto.Store["tasks"].Find("!isDeleted").ObserveLocal((docs, _event) => {\n                tasks = docs.ConvertAll(document => new Task(document));\n            });\n            // highlight-end\n        }\n\n        public static void ListCommands() {\n          // omitted for brevity\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,"We have all the basic building blocks for syncing tasks to a locally stored ",(0,o.kt)("inlineCode",{parentName:"p"},"List<Task>")," variable. In the following section, we will go over how to map the user commands to actual Ditto live query, insert, update and delete methods."))}m.isMDXComponent=!0}}]);