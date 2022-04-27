"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9837],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91934:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"2 - Configuring Commands"},s=void 0,c={unversionedId:"tutorials/c-sharp-console/configuring-commands",id:"tutorials/c-sharp-console/configuring-commands",isDocsHomePage:!1,title:"2 - Configuring Commands",description:"Unlike many UI applications, Console or Command Line applications have limitations to user interactions. For example, console applications typically read text commands during a while loop as a standard design pattern. This section will outline the command line design and set up the loop to allow the user to give continual commands.",source:"@site/docs/tutorials/c-sharp-console/2-configuring-commands.md",sourceDirName:"tutorials/c-sharp-console",slug:"/tutorials/c-sharp-console/configuring-commands",permalink:"/pr-preview/pr-166/tutorials/c-sharp-console/configuring-commands",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/c-sharp-console/2-configuring-commands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configuring Commands"},sidebar:"tutorialSidebar",previous:{title:"1 - Setup",permalink:"/pr-preview/pr-166/tutorials/c-sharp-console/setup"},next:{title:"3 - Assigning Commands",permalink:"/pr-preview/pr-166/tutorials/c-sharp-console/assigning-commands"}},p=[{value:"2-1 Designing the Commands",id:"2-1-designing-the-commands",children:[],level:2},{value:"2-2 Observing the Tasks with a Live Query",id:"2-2-observing-the-tasks-with-a-live-query",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlike many UI applications, Console or Command Line applications have limitations to user interactions. For example, console applications typically read text commands during a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop as a standard design pattern. This section will outline the command line design and set up the loop to allow the user to give continual commands."),(0,a.kt)("h2",{id:"2-1-designing-the-commands"},"2-1 Designing the Commands"),(0,a.kt)("p",null,"Our Tasks Console app will have five commands that map to Ditto and general console commands. We will need:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--insert")," to allow the user to ",(0,a.kt)("inlineCode",{parentName:"li"},".insert")," a new document into the ",(0,a.kt)("inlineCode",{parentName:"li"},"ditto.collection('tasks\")")," collection"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--toggle")," to allow the user to ",(0,a.kt)("inlineCode",{parentName:"li"},".update")," a new document's ",(0,a.kt)("inlineCode",{parentName:"li"},"bool isCompleted")," property by its ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--delete")," to allow the user to ",(0,a.kt)("inlineCode",{parentName:"li"},".remove")," a new document by its ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--list")," will print every current Task that we have in the collection. In addition, we will always call this method before every item."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--exit")," will quit the console app.")),(0,a.kt)("p",null,"As a best practice, long-running console applications should continuously print the primary set of commands as long as they are succinct. We'll create a utility method called ",(0,a.kt)("inlineCode",{parentName:"p"},"ListCommands()")," which, will ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.WriteLine")," each of the commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n\n      public static void Main(params string[] args)\n      {\n        ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n        // ... omitted for brevity\n        // see `setup`\n\n      }\n\n      public static void ListCommands()\n      {\n          Console.WriteLine("************* Commands *************");\n          Console.WriteLine("--insert my new task");\n          Console.WriteLine("   Inserts a task");\n          Console.WriteLine("   Example: \\"--insert Get Milk\\"");\n          Console.WriteLine("--toggle myTaskTd");\n          Console.WriteLine("   Toggles the isComplete property to the opposite value");\n          Console.WriteLine("   Example: \\"--toggle 1234abc\\"");\n          Console.WriteLine("--delete myTaskTd");\n          Console.WriteLine("   Deletes a task");\n          Console.WriteLine("   Example: \\"--delete 1234abc\\"");\n          Console.WriteLine("--list");\n          Console.WriteLine("   List the current tasks");\n          Console.WriteLine("--exit");\n          Console.WriteLine("   Exits the program");\n          Console.WriteLine("************* Commands *************");\n      }\n    }\n}\n')),(0,a.kt)("h2",{id:"2-2-observing-the-tasks-with-a-live-query"},"2-2 Observing the Tasks with a Live Query"),(0,a.kt)("p",null,"As we insert, update, and delete our tasks, we will update the Tasks collection. To sync changes coming from other devices, we will need create a Live Query by calling ",(0,a.kt)("inlineCode",{parentName:"p"},".Observe"),". Remember Ditto will only sync with devices by calling ",(0,a.kt)("inlineCode",{parentName:"p"},".Observe")," on queries. The ",(0,a.kt)("inlineCode",{parentName:"p"},".Observe")," method will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"DittoLiveQuery")," object. As long as the ",(0,a.kt)("inlineCode",{parentName:"p"},"DittoLiveQuery")," object stays in scope and is not garbage collected, the Live Query will fire for any changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks")," collection. Remember, the ",(0,a.kt)("inlineCode",{parentName:"p"},".Observe")," callback will fire for both ",(0,a.kt)("em",{parentName:"p"},"local changes")," and ",(0,a.kt)("em",{parentName:"p"},"remote changes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'DittoLiveQuery liveQuery = ditto.Store["tasks"].FindAll().Observe((docs, _event) => {\n  // this will fire for all remote and local changes.\n});\n')),(0,a.kt)("p",null,"In the context of our console application, we need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Store a ",(0,a.kt)("inlineCode",{parentName:"li"},"List<Task>")," as a ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," variable so that we can print it upon command"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".Observe")," all the document in the tasks collection. Take care to store the ",(0,a.kt)("inlineCode",{parentName:"li"},"DittoLiveQuery")," as a ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," variable as well."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},".Observe")," callback, convert all the ",(0,a.kt)("inlineCode",{parentName:"li"},"List<DittoDocument> docs")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"List<Task>")," and assign them to both variables detailed in step 1 and 2.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n\n        // 1.\n        // highlight-next-line\n        static List<Task> tasks = new List<Task>();\n        // 2.\n        // highlight-next-line\n        static DittoLiveQuery liveQuery;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n\n            try\n            {\n                ditto.SetLicenseToken("<REPlACE_ME>");\n                ditto.TryStartSync();\n            }\n            catch (DittoException ex)\n            {\n                Console.WriteLine("There was an error starting Ditto.");\n                Console.WriteLine("Here\'s the following error");\n                Console.WriteLine(ex.ToString());\n                Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n                Console.WriteLine("Ditto will still work as a local database.");\n            }\n\n            Console.WriteLine("Welcome to Ditto\'s Task App");\n\n            // 3.\n            // highlight-start\n            liveQuery = ditto.Store["tasks"].FindAll().Observe((docs, _event) => {\n                tasks = docs.ConvertAll(document => new Task(document));\n            });\n            // highlight-end\n        }\n\n        public static void ListCommands() {\n          // omitted for brevity\n        }\n}\n\n')),(0,a.kt)("p",null,"We have all the basic building blocks for syncing tasks to a locally stored ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Task>")," variable. In the following section, we will go over how to map the user commands to actual Ditto live query, insert, update and delete methods."))}d.isMDXComponent=!0}}]);