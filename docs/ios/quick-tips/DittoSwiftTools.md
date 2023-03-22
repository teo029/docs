---
title: 'DittoSwiftTools'
sidebar_position: 8
---
DittoSwiftTools are diagnostic tools for Ditto. You can view connected peers, export debug logs, browse collections/documents and see Ditto's disk usage.

## Requirements
* iOS 15.0+
* Swift 5.0+

## Installation

The reccomended approach to use DittoSwiftTools in your project is using the Swift Package Manager.
1. With your project open in Xcode go to File -> Add Packages, then search using  "github.com/getditto/DittoSwiftTools" to find the DittoSwiftTools package.  

 ![addPackage Image](./Img/addPackage.png) 
 
2. Select "Add Package"
3. Select which DittoSwiftTools products you would like, then select "Add Package"

*If you are looking for compatibility with Ditto v4, please target the [v4 branch](https://github.com/getditto/DittoSwiftTools/tree/v4) in the Swift Package Manager.*


## Usage

There are four targets in this package: Presence Viewer, Data Browser, Export Logs, Disk Usage.

### 1. Presence Viewer
The Presence Viewer displays a mesh graph that allows you to see all connected peers within the mesh and the transport that each peer is using to make a connection.  

 ![presenceViewer Image](./Img/presenceViewer.png) 
 
First, make sure the "DittoPresenceViewer" was added to your Target.
Then, use `import DittoPresenceViewer` to import the Presence Viewer

You can use the Presence Viewer in SiwftUI or UIKit

**SwiftUI**  

Use `PresenceView(ditto: Ditto)` and pass in your Ditto instance to display the mesh graph.
```
import DittoPresenceViewer

struct PresenceViewer: View{

    var body: some View {
        PresenceView(ditto: DittoManager.shared.ditto)
    }
}
```

**UIKit**  

Call [present](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621380-present) and pass `DittoPresenceView(ditto: DittoManager.shared.ditto).viewController` as a parameter. Set `animated` to `true`
```
func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    present(DittoPresenceView(ditto: DittoManager.shared.ditto).viewController, animated: true) {
        if let selected = tableView.indexPathForSelectedRow {
            tableView.deselectRow(at: selected, animated: true)
        }
    }
}
```

### 2. Data Browser
The Ditto Data Browser allows you to view all your collections, documents within each collection and the propeties/values of a document. With the Data Browser, you can observe any changes that are made to your collections and documents in real time.  

 ![Collections Image](./Img/collections.png) 
 
 ![Document Image](./Img/document.png)
 
**Standalone App**
If you are using the Data Browser as a standalone app, there is a button, `Start Subscriptions`, you must press in order to start syncing data.
If you are embedding the Data Browser into another application then you do not need to press `Start Subscriptions` as you should already have your subscriptions running.  

First, make sure the "DittoDataBrowser" was added to your Target.
Then, use `import DittoDataBrowser` to import the Data Browser.  

**SwiftUI**  

Use `DataBrowser(ditto: Ditto)` and pass in your Ditto instance to display the Data Browser.
```
import DittoDataBrowser

struct DataBrowserView: View {
    var body: some View {
       DataBrowser(ditto: DittoManager.shared.ditto)
    }
}
```  

**UIKit**  

Pass `DataBrowser(ditto: Ditto)` to a [UIHostingController](https://sarunw.com/posts/swiftui-in-uikit/) which will return a view controller that you can use to present.
```
let vc = UIHostingController(rootView: DataBrowser(ditto: DittoManager.shared.ditto))

present(vc, animated: true)
```  

### 3. Export Logs
Export Logs allows you to export a file of the logs from your applcation.  

![Export Logs Image](./Img/exportLogs.png) 
 
First, make sure the "DittoExportLogs" was added to your Target.
Then, use `import DittoExportLogs` to import the Export Logs.

**SwiftUI**  

Use `ExportLogs()` to export the logs. It is reccomended to call `ExportLogs` from within a [sheet](https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)).
```
.sheet(isPresented: $exportLogs) {
    ExportLogs()
}
```  

**UIKit**  

Pass `ExportLogs()` to a [UIHostingController](https://sarunw.com/posts/swiftui-in-uikit/) which will return a view controller that you can use to present.
```
let vc = UIHostingController(rootView: ExportLogs())

present(vc, animated: true)
```  

### 4. Disk Usage

Disk Usage allows you to see Ditto's file space usage.  

![Disk Usage Image](./Img/diskUsage.png) 

First, make sure the "DittoDiskUsage" was added to your Target.
Then, use `import DittoDiskUsage` to import the Disk Usage.

**SwiftUI**  

Use `DittoDiskUsageView(ditto: Ditto)` and pass in your Ditto instance.
```
import DittoDiskUsage

struct DiskUsageViewer: View {
    var body: some View {
        DittoDiskUsageView(ditto: DittoManager.shared.ditto)
    }
}
```  

**UIKit**  

Pass `DittoDiskUsageView(ditto: Ditto)` to a [UIHostingController](https://sarunw.com/posts/swiftui-in-uikit/) which will return a view controller that you can use to present.
```
let vc = UIHostingController(rootView: DittoDiskUsageView(ditto: DittoManager.shared.ditto))

present(vc, animated: true)
```  
