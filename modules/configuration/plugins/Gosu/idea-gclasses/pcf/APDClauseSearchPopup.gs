package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, coverageCategories :  APDClauseCategory[], userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseSearchPopup, {riskCoverable, searchType, coverageCategories, userPreferences}, 0)
  }
  
  function pickValueAndCommit (value :  APDClause[]) : void {
    __widgetOf(this, pcf.APDClauseSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, coverageCategories :  APDClauseCategory[], userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseSearchPopup, {riskCoverable, searchType, coverageCategories, userPreferences}, 0).push()
  }
  
  
}