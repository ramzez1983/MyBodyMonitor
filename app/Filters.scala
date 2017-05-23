/**
  * Created by lukasz.wolanski on 23.05.2017.
  */
import javax.inject.Inject

import play.api.http.DefaultHttpFilters
class Filters @Inject() (accessLog: AccessLoggingFilter
                        ) extends DefaultHttpFilters(accessLog)
