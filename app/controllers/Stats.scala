package controllers

import javax.inject.Inject

import play.api.libs.json._
import play.api.mvc.{Action, Controller, Result}
import services.{BodyStats, BodyStatsService}

import scala.concurrent.Future

/**
  * Created by lukasz.wolanski on 23.05.2017.
  */
class Stats @Inject()(bodyStatsService: BodyStatsService) extends Controller {

  def create = Action.async(parse.json) { implicit request =>
    (request.body).validate[BodyStats]
      .map { stats =>
        bodyStatsService
          .create(stats)
      } match {
      case result: JsSuccess[Future[Result]] => result.get
      case e : JsError => Future.successful(BadRequest("Could not parse request: " + JsError.toJson(e).toString()))
    }
  }
}
