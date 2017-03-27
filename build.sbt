enablePlugins(ScalaJSPlugin)

name := "MyBodyMonitor"

version := "1.0"

scalaVersion := "2.12.1"

libraryDependencies += "org.mongodb.scala" %% "mongo-scala-driver" % "1.2.1"

scalaJSUseMainModuleInitializer := true
