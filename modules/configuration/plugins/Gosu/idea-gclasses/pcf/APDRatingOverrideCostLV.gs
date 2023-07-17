package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRatingOverrideCostLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($costs :  List<APDCost>, $quoteDisplayUtil :  gw.apd.financials.APDQuoteDisplayUtil, $isEditable :  boolean, $jobEffDate :  java.util.Date, $prefCurrency :  Currency) : void {
    __widgetOf(this, pcf.APDRatingOverrideCostLV, SECTION_WIDGET_CLASS).setVariables(false, {$costs, $quoteDisplayUtil, $isEditable, $jobEffDate, $prefCurrency})
  }
  
  function refreshVariables ($costs :  List<APDCost>, $quoteDisplayUtil :  gw.apd.financials.APDQuoteDisplayUtil, $isEditable :  boolean, $jobEffDate :  java.util.Date, $prefCurrency :  Currency) : void {
    __widgetOf(this, pcf.APDRatingOverrideCostLV, SECTION_WIDGET_CLASS).setVariables(true, {$costs, $quoteDisplayUtil, $isEditable, $jobEffDate, $prefCurrency})
  }
  
  
}