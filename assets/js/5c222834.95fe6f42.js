"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5576],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40429:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"2 - Configure Ditto"},s=void 0,p={unversionedId:"tutorial/swift/configure-ditto",id:"tutorial/swift/configure-ditto",isDocsHomePage:!1,title:"2 - Configure Ditto",description:"2-1 Create Your Ditto App",source:"@site/docs/ios/tutorial/swift/2-configure-ditto.md",sourceDirName:"tutorial/swift",slug:"/tutorial/swift/configure-ditto",permalink:"/ios/tutorial/swift/configure-ditto",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/tutorial/swift/2-configure-ditto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configure Ditto"},sidebar:"docs",previous:{title:"1 - Setup",permalink:"/ios/tutorial/swift/setup"},next:{title:"3 - Showing the List of Tasks",permalink:"/ios/tutorial/swift/tasks-list-screen"}},d=[{value:"2-1 Create Your Ditto App",id:"2-1-create-your-ditto-app",children:[],level:2},{value:"2-2 Add Permissions to the <code>Info.plist</code>",id:"2-2-add-permissions-to-the-infoplist",children:[],level:2},{value:"2-3 Add <code>ditto</code> to <code>TasksApp.swift</code>",id:"2-3-add-ditto-to-tasksappswift",children:[],level:2},{value:"2-4 Create a <code>Task</code> struct",id:"2-4-create-a-task-struct",children:[],level:2},{value:"2-5 Create a <code>TasksListScreen</code> view",id:"2-5-create-a-taskslistscreen-view",children:[],level:2}],c={toc:d};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"2-1-create-your-ditto-app"},"2-1 Create Your Ditto App"),(0,o.kt)("p",null,"Before we start coding, we first need to create a new app in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,o.kt)("p",null,"Each app created on the portal has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,o.kt)("h2",{id:"2-2-add-permissions-to-the-infoplist"},"2-2 Add Permissions to the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Info.plist")),(0,o.kt)("p",null,"For Ditto to fully use all the network transports like Bluetooth Low Energy, Local Area Network, Apple Wireless Direct, the app will need to ask the user for permissions. These permission prompts need to be in the ",(0,o.kt)("strong",{parentName:"p"},"Info.plist")," file of your project."),(0,o.kt)("p",null,"Follow the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/installation/ios#platform-permissions"},"iOS Installation page"),"."),(0,o.kt)("h2",{id:"2-3-add-ditto-to-tasksappswift"},"2-3 Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"ditto")," to ",(0,o.kt)("inlineCode",{parentName:"h2"},"TasksApp.swift")),(0,o.kt)("p",null,"When Xcode generated your project, there should be a file called ",(0,o.kt)("strong",{parentName:"p"},"TasksApp.swift"),". We will need an instance of Ditto throughout this tutorial and the app's lifecycle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First import Ditto with ",(0,o.kt)("inlineCode",{parentName:"li"},"import DittoSwift")),(0,o.kt)("li",{parentName:"ol"},"Construct an instance of Ditto with an online playground identity using the APP ID of the app that you just created on the portal. We are using an ",(0,o.kt)("inlineCode",{parentName:"li"},".onlinePlayground")," setup, which should suffice for this tutorial. However, you should never deploy this to a production environment like the Apple App Store."),(0,o.kt)("li",{parentName:"ol"},"We will call ",(0,o.kt)("inlineCode",{parentName:"li"},"startSync")," as soon as the app's ",(0,o.kt)("inlineCode",{parentName:"li"},"ContentView")," appears. This method can throw an error in the event that the license token is invalid or expired. Add two ",(0,o.kt)("inlineCode",{parentName:"li"},"@State")," variables to capture if ",(0,o.kt)("inlineCode",{parentName:"li"},"ditto.startSync")," throws an error. One variable will be ",(0,o.kt)("inlineCode",{parentName:"li"},"@State var isPresentingAlert = false")," and the other is a ",(0,o.kt)("inlineCode",{parentName:"li"},'@State var errorMessage = ""'),"."),(0,o.kt)("li",{parentName:"ol"},"Add an ",(0,o.kt)("inlineCode",{parentName:"li"},".onAppear")," function and give it a license token. Look for ",(0,o.kt)("inlineCode",{parentName:"li"},'"YOUR_APP_ID_HERE"')," and insert your valid license token. You can get a license token from our ",(0,o.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"Big Peer portal"),". If the ",(0,o.kt)("inlineCode",{parentName:"li"},"startSync()")," fails, we will set ",(0,o.kt)("inlineCode",{parentName:"li"},"isPresentingAlert = true")," and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"errorMessage")," to the error's ",(0,o.kt)("inlineCode",{parentName:"li"},".localizedDescription"),"."),(0,o.kt)("li",{parentName:"ol"},"We will then present a ",(0,o.kt)("inlineCode",{parentName:"li"},".alert")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"isPresentingAlert")," is true. Notice that we will pass a ",(0,o.kt)("inlineCode",{parentName:"li"},"@State")," variable as a binding type, which is why we denoted ",(0,o.kt)("inlineCode",{parentName:"li"},"$isPresentingAlert")," prefixed with a ",(0,o.kt)("inlineCode",{parentName:"li"},"$"),". To learn more about SwiftUI's ",(0,o.kt)("inlineCode",{parentName:"li"},"Binding")," types like ",(0,o.kt)("inlineCode",{parentName:"li"},"@State")," ",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/swiftui/state-and-data-flow"},"click here."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=TasksApp.swift",title:"TasksApp.swift"},'import SwiftUI\n// 1.\n// highlight-next-line\nimport DittoSwift\n\n@main\nstruct TasksApp: App {\n\n    // 2.\n    // highlight-next-line\n    var ditto = Ditto(identity: .onlinePlayground(appID: "YOUR_APP_ID_HERE", token: "YOUR_TOKEN_HERE"))\n\n    // 3.\n    // highlight-start\n    @State var isPresentingAlert = false\n    @State var errorMessage = ""\n    // highlight-end\n\n    var body: some Scene {\n        WindowGroup {\n            TasksListScreen(ditto: ditto)\n\n                // 4\n                // highlight-start\n                .onAppear(perform: {\n                    do {\n                        try ditto.startSync()\n                    } catch (let err){\n                        isPresentingAlert = true\n                        errorMessage = err.localizedDescription\n                    }\n                })\n                // highlight-end\n                // 5.\n                // highlight-start\n                .alert(isPresented: $isPresentingAlert) {\n                    Alert(title: Text("Uh Oh"), message: Text("There was an error trying to start the sync. Here\'s the error \\(errorMessage) Ditto will continue working as a local database."), dismissButton: .default(Text("Got it!")))\n                }\n                // highlight-end\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"2-4-create-a-task-struct"},"2-4 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"Task")," struct"),(0,o.kt)("p",null,"Ditto is a document database, which represents all of its rows in the database a JSON-like structure. In this tutorial, we will define each task like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "_id": "123abc",\n  "body": "Get Milk",\n  "isCompleted": true\n}\n')),(0,o.kt)("p",null,'These Task documents will all be in the "tasks" collection. We will be referencing this collection throughout this tutorial with:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let tasksCollection = ditto.store["tasks"]\n')),(0,o.kt)("p",null,"Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like Swift, we will create a data structure give more definition to the app."),(0,o.kt)("p",null,"Create a new Swift file called ",(0,o.kt)("strong",{parentName:"p"},"Task.swift")," in your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"import DittoSwift")," to the top of the file."),(0,o.kt)("li",{parentName:"ol"},"Add the matching variables ",(0,o.kt)("inlineCode",{parentName:"li"},"let _id: String"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"let body: String"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"let isCompleted: Bool")," to the struct. We will use this to match the document values to to the struct."),(0,o.kt)("li",{parentName:"ol"},"Add an ",(0,o.kt)("inlineCode",{parentName:"li"},"init")," constructor to ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," that takes in a ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoDocument")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"init")," constructor, parse out the document's keys with Ditto's type safe value accessors. This will safely map all the document's values to the struct's variables that we created in step 2."),(0,o.kt)("li",{parentName:"ol"},"Add a second ",(0,o.kt)("inlineCode",{parentName:"li"},"init")," constructor to ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," that just takes a ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"bool")),(0,o.kt)("li",{parentName:"ol"},"Add an ",(0,o.kt)("inlineCode",{parentName:"li"},"extension Task: Identifiable")," right below the ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," struct definition and implement ",(0,o.kt)("inlineCode",{parentName:"li"},"var id: String")," to return the ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")," key. We add the ",(0,o.kt)("inlineCode",{parentName:"li"},"Identifiable")," protocol to assist SwiftUI's ",(0,o.kt)("inlineCode",{parentName:"li"},"List")," view and ",(0,o.kt)("inlineCode",{parentName:"li"},"ForEach")," component in later sections. Collection views in SwiftUI require knowing if a view is unique to prevent wasteful redraws. While it may seem confusing, we are only allowing the protocol to read the ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")," that we added in step 2.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Task.swift"',title:'"Task.swift"'},'// 1.\nimport DittoSwift\n\nstruct Task {\n\n    // 2.\n    let _id: String\n    let body: String\n    let isCompleted: Bool\n\n    // 3.\n    init(document: DittoDocument) {\n        // 4.\n        _id = document["_id"].stringValue\n        body = document["body"].stringValue\n        isCompleted = document["isCompleted"].boolValue\n    }\n    \n    // 5.\n    init(body: String, isCompleted: Bool) {\n        self._id = UUID().uuidString\n        self.body = body\n        self.isCompleted = isCompleted\n    }\n}\n\n// 6.\nextension Task: Identifiable {\n    var id: String {\n        return _id\n    }\n}\n\n')),(0,o.kt)("p",null,"This data class takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoDocument")," and safely parses out the values into native Swift types. We also added constructor that allows us to preview data without requiring Ditto."),(0,o.kt)("p",null,"So now in our application if we want an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Tasks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[Task]"),", we can write the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let tasks: [Task] = ditto.store["tasks"].find("!isDeleted").exec().map({ Task(document: $0) })\n')),(0,o.kt)("p",null,"Once we set up our user interface, you'll notice that reading these values becomes a bit easier with this added structure."),(0,o.kt)("h2",{id:"2-5-create-a-taskslistscreen-view"},"2-5 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"TasksListScreen")," view"),(0,o.kt)("p",null,"When we generated the project, Xcode created a default ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentView"),", which need to swap out for a better starter view. Let's create a view called ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen")," which will show the list of the views."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new ",(0,o.kt)("strong",{parentName:"li"},"SwiftUI View")," View by clicking ",(0,o.kt)("strong",{parentName:"li"},"File > New > SwiftUI View"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode File New SwiftUI view",src:n(15304).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Name it ",(0,o.kt)("strong",{parentName:"p"},'"TasksListScreen"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At the top of the new ",(0,o.kt)("strong",{parentName:"p"},"TasksListScreen."),"Add Ditto with ",(0,o.kt)("inlineCode",{parentName:"p"},"import DittoSwift")," at the top of the file")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a constructor and a variable to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"var ditto: Ditto"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationView")," with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," child. We will fill out the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," in the next section. We've also added a couple of decorative navigation elements which we will hook up later. This includes a navigation title, ",(0,o.kt)("inlineCode",{parentName:"p"},".navigationTitle")," which shows the name of the app, a navigation plus button in ",(0,o.kt)("inlineCode",{parentName:"p"},".navigationBarItems")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},".sheet")," that we will use navigate to an ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen"),". We will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen")," later."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="TasksListScreen.swift"',title:'"TasksListScreen.swift"'},'import SwiftUI\n// 3.\n// highlight-next-line\nimport DittoSwift\n\nstruct TasksListScreen: View {\n\n    // 4.\n    // highlight-start\n    let ditto: Ditto\n\n    init(ditto: Ditto) {\n        self.ditto = ditto\n    }\n    // highlight-end\n\n    var body: some View {\n        // 5.\n        // highlight-start\n        NavigationView {\n            List {\n\n            }\n            .navigationTitle("Tasks - SwiftUI")\n            .navigationBarItems(trailing: Button(action: {\n\n            }, label: {\n                Image(systemName: "plus")\n            }))\n            .sheet(isPresented: .constant(false), content: {\n\n            })\n        }\n        // highlight-end\n    }\n}\n')))}u.isMDXComponent=!0},15304:function(e,t,n){t.Z=n.p+"assets/images/xcode-new-swiftui-view-5c5bd524ecc6bf16786a4645664a7002.png"}}]);