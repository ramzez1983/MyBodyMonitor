name := """MyBodyMonitorServer"""
organization := "prv.ramzez"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

libraryDependencies += filters
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "2.0.0" % Test

//for development port change to 9090
PlayKeys.devSettings := Seq("play.server.http.port" -> "9090")

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "prv.ramzez.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "prv.ramzez.binders._"
