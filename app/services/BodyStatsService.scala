package services

import javax.inject.{Inject, Singleton}

import org.joda.time.DateTime
import play.api.Logger
import play.api.libs.json.{JsObject, Json, OWrites}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import reactivemongo.play.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

//TODO: need to think over the structure of BodyStats
case class BodyStats(_id: Option[BSONObjectID], date: DateTime, weight: Double, fat: Int, water: Int, muscle: Int, bones: Int, calories: Int)

object BodyStats {
  val BodyStatsCollectionName = "bodyStats"
  implicit val format = Json.format[BodyStats]
}

/**
  * Created by lukasz.wolanski on 07.04.2017.
  */
@Singleton
class BodyStatsService @Inject()(val reactiveMongoApi: ReactiveMongoApi)(implicit exec: ExecutionContext) extends MongoController with ReactiveMongoComponents {

  def bodyStatsFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection](BodyStats.BodyStatsCollectionName))

  def findAllByUserId(id: BSONObjectID): Future[List[BodyStats]] = ???

  def get(id: BSONObjectID): Future[Option[BodyStats]] = {
    bodyStatsFuture.flatMap(_.find(Json.obj("_id" -> id)).one[BodyStats])
  }

  def create(newBodyStats: BodyStats) = {
    Logger.info(s"Creating new body stats: $newBodyStats")
    for {
      bodyCollection <- bodyStatsFuture
      lastError <- bodyCollection.insert(newBodyStats)
    } yield
      Ok("Mongo LastError: %s".format(lastError))
  }

  def update(bodyStats: BodyStats) = ???

  def delete(id: BSONObjectID) = ???
}
