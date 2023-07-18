package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalablemoney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDataFieldValue_scalablemoney extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($dataField :  APDDataField, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalablemoney, SECTION_WIDGET_CLASS).setVariables(false, {$dataField, $edition})
  }
  
  function refreshVariables ($dataField :  APDDataField, $edition :  APDProductLineEdition) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalablemoney, SECTION_WIDGET_CLASS).setVariables(true, {$dataField, $edition})
  }
  
  
}