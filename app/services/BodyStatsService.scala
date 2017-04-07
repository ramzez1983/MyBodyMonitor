package services

import org.joda.time.DateTime

//TODO: need to think over the structure of BodyStats
case class BodyStats(id: Int, date: DateTime, weight: Double, fat: Int, water: Int, muscle: Int, bones: Int, calories: Int)

/**
  * Created by lukasz.wolanski on 07.04.2017.
  */
class BodyStatsService {

}
