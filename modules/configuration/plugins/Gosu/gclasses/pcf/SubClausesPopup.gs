package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SubClausesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SubClausesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (coverable :  Coverable, parentClausePattern :  gw.api.productmodel.ClausePattern, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SubClausesPopup, {coverable, parentClausePattern, openForEdit, jobWizardHelper}, 0)
  }
  
  static function push (coverable :  Coverable, parentClausePattern :  gw.api.productmodel.ClausePattern, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubClausesPopup, {coverable, parentClausePattern, openForEdit, jobWizardHelper}, 0).push()
  }
  
  
}