package services

import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

//TODO: need to think over the structure of BodyStats
case class BodyStats(_id: BSONObjectID, date: DateTime, weight: Double, fat: Int, water: Int, muscle: Int, bones: Int, calories: Int)

/**
  * Created by lukasz.wolanski on 07.04.2017.
  */
class BodyStatsService {

  def findAllByUserId(id: BSONObjectID): Future[List[BodyStats]] = ???

  def get(id: BSONObjectID): Future[BodyStats] = ???

  def create(bodyStats: BodyStats) = ???

  def update(bodyStats: BodyStats) = ???

  def delete(id: BSONObjectID) = ???
}
