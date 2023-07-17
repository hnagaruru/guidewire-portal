package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskClauseInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($riskCoverable :  APDRiskCoverable, $clauses :  APDClause[], $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDRiskClauseInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$riskCoverable, $clauses, $coverDefinitionHelper, $edition, $openForEdit})
  }
  
  function refreshVariables ($riskCoverable :  APDRiskCoverable, $clauses :  APDClause[], $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, $edition :  APDProductLineEdition, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDRiskClauseInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$riskCoverable, $clauses, $coverDefinitionHelper, $edition, $openForEdit})
  }
  
  
}