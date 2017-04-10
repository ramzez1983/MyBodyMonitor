package controllers

import javax.inject.Inject

import play.api.libs.json.{JsObject, JsValue, Json, Writes}
import play.api.mvc.{Action, Controller}
import services.UsersService

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by Ramzez on 10.04.2017.
  */
class Users  @Inject()(userService: UsersService) extends Controller {

  def create() = Action.async {
    userService.create().map { _ => Ok("") }
  }

  def findByEmail() = Action.async {
      userService.findByEmail("test@test.com").map { user =>
          Ok(Json.toJson(user))
        }
  }
}
