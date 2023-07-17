package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseSearchResultsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coveragePatterns :  ArrayList<APDClause>, $coverable :  APDCoverable, $searchCriteria :  gw.apd.model.APDClauseSearchCriteria) : void {
    __widgetOf(this, pcf.APDClauseSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(false, {$coveragePatterns, $coverable, $searchCriteria})
  }
  
  function refreshVariables ($coveragePatterns :  ArrayList<APDClause>, $coverable :  APDCoverable, $searchCriteria :  gw.apd.model.APDClauseSearchCriteria) : void {
    __widgetOf(this, pcf.APDClauseSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(true, {$coveragePatterns, $coverable, $searchCriteria})
  }
  
  
}