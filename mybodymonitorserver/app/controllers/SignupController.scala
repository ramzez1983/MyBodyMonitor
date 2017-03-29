package controllers

import javax.inject.{Inject, Singleton}

import play.api.mvc.{Action, Controller}

/**
  * Created by lukasz.wolanski on 29.03.2017.
  */
@Singleton
class SignupController @Inject() extends Controller {

  def signup = Action{ implicit request =>
    Ok("Success!")
  }
}
