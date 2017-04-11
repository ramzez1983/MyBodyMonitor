package services

import javax.inject.{Inject, Singleton}

import org.joda.time.DateTime
import play.api.libs.json.Json
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import reactivemongo.api.ReadPreference
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json._
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

case class UserBody(_id: Option[BSONObjectID], email: String, height: Int, male: Boolean, birthDate: DateTime, stats: List[BSONObjectID] )

object UserBody{
  implicit val format = Json.format[UserBody]
}
/**
  * Created by lukasz.wolanski on 07.04.2017.
  */
@Singleton
class UsersService @Inject()(val reactiveMongoApi: ReactiveMongoApi)(implicit exec: ExecutionContext) extends MongoController with ReactiveMongoComponents {

  def bodiesFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection]("user"))
  /**stub value until db added*/
  private val body = UserBody(Option.empty, "test@test.com", 179, true, new DateTime(1980, 1, 1, 0, 0), List.empty)

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
        cursor[UserBody](ReadPreference.primary).
        // Collect the results as a list
        collect[List]()
    }
  }

  def updateBody(body: UserBody) = ???
}
