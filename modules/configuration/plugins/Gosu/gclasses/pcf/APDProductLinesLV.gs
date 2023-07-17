package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductLinesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct, $policyPeriod :  PolicyPeriod, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesLV, SECTION_WIDGET_CLASS).setVariables(false, {$product, $policyPeriod, $openForEdit})
  }
  
  function refreshVariables ($product :  APDProduct, $policyPeriod :  PolicyPeriod, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesLV, SECTION_WIDGET_CLASS).setVariables(true, {$product, $policyPeriod, $openForEdit})
  }
  
  
}