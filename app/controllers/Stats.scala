package controllers

import javax.inject.Inject

import play.api.libs.json.{JsObject, JsValue, Json, Writes}
import play.api.mvc.{Action, Controller}
import services.{BodyStats, BodyStatsService}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by lukasz.wolanski on 23.05.2017.
  */
class Stats @Inject()(bodyStatsService: BodyStatsService) extends Controller {

  def create = Action.async(parse.json) { implicit request =>
    (request.body \ "stats").asOpt[BodyStats]
      .map { stats =>
        bodyStatsService
          .create(stats)
      }.getOrElse(Future.successful(BadRequest("error")))
  }
}
