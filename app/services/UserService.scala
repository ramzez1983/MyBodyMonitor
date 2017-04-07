package services

import javax.inject.Singleton

import org.joda.time.DateTime
import play.api.libs.json.Json

import scala.concurrent.Future

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
class UserService {

  /**stub value until db added*/
  private val body = Body(1, "test@test.com", 179, true, new DateTime(1980, 1, 1, 0, 0))

  def getBody(id: Int): Future[Option[Body]] = {
    Future.successful(Option.apply(body))
  }

  def updateBody(body: Body) = ???
}
