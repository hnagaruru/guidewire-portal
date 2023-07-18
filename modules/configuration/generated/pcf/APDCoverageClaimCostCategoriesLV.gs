package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageClaimCostCategoriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverageClaimCostCategoriesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverage :  APDCoverage, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper) : void {
    __widgetOf(this, pcf.APDCoverageClaimCostCategoriesLV, SECTION_WIDGET_CLASS).setVariables(false, {$coverage, $coverDefinitionHelper})
  }
  
  function refreshVariables ($coverage :  APDCoverage, $coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper) : void {
    __widgetOf(this, pcf.APDCoverageClaimCostCategoriesLV, SECTION_WIDGET_CLASS).setVariables(true, {$coverage, $coverDefinitionHelper})
  }
  
  
}