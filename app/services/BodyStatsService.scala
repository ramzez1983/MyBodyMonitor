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
case class BodyStats(_id: Option[BSONObjectID],
                      date: DateTime,
                      weight: Double,
                      fatPercent: Int,
                      waterPercent: Int,
                      musclePercent: Int,
                      bonesPercent: Int,
                      calories: Int)

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

  //TODO only temporary
  def all: Future[List[BodyStats]] = {
    bodyStatsFuture.flatMap(_.find(Json.obj()).sort(Json.obj("date" -> 1)).cursor[BodyStats]().collect[List]())
  }

  def get(id: BSONObjectID): Future[Option[BodyStats]] = {
    bodyStatsFuture.flatMap(_.find(Json.obj("_id" -> id)).one[BodyStats])
  }

  //TODO change to Future[WriteResult] from Future[Result]?
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
