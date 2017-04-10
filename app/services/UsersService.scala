package services

import javax.inject.{Inject, Singleton}

import org.joda.time.DateTime
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import reactivemongo.api.ReadPreference
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json._
import play.modules.reactivemongo.json.collection._


import scala.concurrent.{ExecutionContext, Future}

trait User {
  def id: Int
  def email: String
}

case class Body(id: Int, email: String, height: Int, male: Boolean, birthDate: DateTime ) extends User

object Body{
  implicit val format = Json.format[Body]
}
/**
  * Created by lukasz.wolanski on 07.04.2017.
  */
@Singleton
class UsersService @Inject()(val reactiveMongoApi: ReactiveMongoApi)(implicit exec: ExecutionContext) extends MongoController with ReactiveMongoComponents {

  def bodiesFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection]("user"))
  /**stub value until db added*/
  private val body = Body(1, "test@test.com", 179, true, new DateTime(1980, 1, 1, 0, 0))

  //TODO: temporary to see if insert works
  def create() = {
    for {
      users <- bodiesFuture
      lastError <- users.insert(body)
    } yield
      Ok("Mongo LastError: %s".format(lastError))
  }

  def findByEmail(email: String) = {
    // let's do our query
    bodiesFuture.flatMap {
      // find all cities with name `name`
      _.find(Json.obj("email" -> email)).
        // perform the query and get a cursor of JsObject
        cursor[Body](ReadPreference.primary).
        // Coollect the results as a list
        collect[List]()
    }
  }

  def updateBody(body: Body) = ???
}
