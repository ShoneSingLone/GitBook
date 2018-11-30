# Android

- [创建 Android 项目](https://developer.android.com/training/basics/firstapp/creating-project)
- [探索 Android Studio](https://developer.android.com/training/basics/firstapp/creating-project)
- [Android – Kotlin](https://codelabs.developers.google.com/codelabs/mdc-101-kotlin/)
- [Android – firstapp](https://developer.android.com/training/basics/firstapp/)

```bash
#在系统环境变量 中增加 ChocolateyInstall：
d:\chocolatey
```

```js
shortcut:
Ctrl Alt S =>setting

Alt Shift F10 => run app

Ctrl+Shift+J shortcut joins two lines into one and removes unnecessary space to match your code style.

```

API 16 通知特性才开始

- app > java > com.example.myfirstapp > MainActivity.java

这是主 Activity（您的应用的入口点）。当您构建和运行应用时，系统会启动此 Activity 的实例并加载其布局。

- app > res > layout > activity_main.xml

此 XML 文件会定义 Activity 界面的布局。它包含一个带有文本“Hello world!”的 TextView 元素。

- app > manifests > AndroidManifest.xml

manifest 文件描述应用的基本特性并定义其每个组件。
Gradle Scripts > build.gradle
您会看到具有此名称的两个文件：一个用于项目，一个用于“应用”模块。每个模块均有自己的 build.gradle 文件，但此项目当前仅有一个模块。您将主要使用模块的 build.gradle 文件配置 Gradle 工具编译和构建您的应用的方式。

- 选择菜单'Build'→'Make Project'，这个是编译整个项目下的所有模块。
- 选择菜单'Build'→'Make Module ***'，这个是编译指定名称的模块。
- 选择菜单'Build'→'Clean Project'，然后再选择菜单'Build'→'Rebuild Project'， 先清理项目，再对整个项目重新编译。
- 'Run' → 'Run app'
- 'New'→'Kotlin File/Class'
- 'New'→'Activity'→'Empty Activity'，
