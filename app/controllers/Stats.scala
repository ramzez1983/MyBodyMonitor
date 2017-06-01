package controllers

import javax.inject.Inject

import play.api.libs.json._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.mvc.{Action, Controller, Result}
import reactivemongo.bson.BSONObjectID
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

  def update(id: BSONObjectID) = Action.async(parse.json) { implicit request =>
    (request.body).validate[BodyStats]
      .map { stats =>
        bodyStatsService
          .update(id, stats)
            .map { result =>
              Ok(s"update completed: $result")
        }.recover { case _ => InternalServerError }
      } match {
      case result: JsSuccess[Future[Result]] => result.get
      case e: JsError => Future.successful(BadRequest("Could not parse request: " + JsError.toJson(e).toString()))
    }
  }

  def findById(id: BSONObjectID) = Action.async {
    bodyStatsService.get(id).map { maybeStats =>
      maybeStats.map { stats =>
        Ok(Json.toJson(stats))
      }.getOrElse(NotFound(s"BodyStat of given id not found: $id"))
    }
  }

  def all() = Action.async {
    bodyStatsService.all.map{ result =>
      Ok(Json.obj("stats" -> result))
    }
  }
}
