package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseSearchDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($searchCriteria :  gw.apd.model.APDClauseSearchCriteria, $coverable :  APDCoverable, $categories :  APDClauseCategory[]) : void {
    __widgetOf(this, pcf.APDClauseSearchDV, SECTION_WIDGET_CLASS).setVariables(false, {$searchCriteria, $coverable, $categories})
  }
  
  function refreshVariables ($searchCriteria :  gw.apd.model.APDClauseSearchCriteria, $coverable :  APDCoverable, $categories :  APDClauseCategory[]) : void {
    __widgetOf(this, pcf.APDClauseSearchDV, SECTION_WIDGET_CLASS).setVariables(true, {$searchCriteria, $coverable, $categories})
  }
  
  
}