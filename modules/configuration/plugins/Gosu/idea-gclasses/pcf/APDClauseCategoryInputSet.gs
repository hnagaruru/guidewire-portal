package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseCategoryInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($category :  APDClauseCategory, $basicOnly :  Boolean) : void {
    __widgetOf(this, pcf.APDClauseCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$category, $basicOnly})
  }
  
  function refreshVariables ($category :  APDClauseCategory, $basicOnly :  Boolean) : void {
    __widgetOf(this, pcf.APDClauseCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$category, $basicOnly})
  }
  
  
}