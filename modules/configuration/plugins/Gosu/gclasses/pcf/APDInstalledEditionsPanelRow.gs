package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDInstalledEditionsPanelRow extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($installedEditionTreePreloaded :  gw.api.tree.RowTreeRootNode, $installedEditionTreeActivated :  gw.api.tree.RowTreeRootNode, $invalidRulesTreePreloaded :  gw.api.tree.RowTreeRootNode, $invalidRulesTreeActivated :  gw.api.tree.RowTreeRootNode, $invalidRulesTreePreloadedVisible :  Boolean, $invalidRulesTreeActivatedVisible :  Boolean) : void {
    __widgetOf(this, pcf.APDInstalledEditionsPanelRow, SECTION_WIDGET_CLASS).setVariables(false, {$installedEditionTreePreloaded, $installedEditionTreeActivated, $invalidRulesTreePreloaded, $invalidRulesTreeActivated, $invalidRulesTreePreloadedVisible, $invalidRulesTreeActivatedVisible})
  }
  
  function refreshVariables ($installedEditionTreePreloaded :  gw.api.tree.RowTreeRootNode, $installedEditionTreeActivated :  gw.api.tree.RowTreeRootNode, $invalidRulesTreePreloaded :  gw.api.tree.RowTreeRootNode, $invalidRulesTreeActivated :  gw.api.tree.RowTreeRootNode, $invalidRulesTreePreloadedVisible :  Boolean, $invalidRulesTreeActivatedVisible :  Boolean) : void {
    __widgetOf(this, pcf.APDInstalledEditionsPanelRow, SECTION_WIDGET_CLASS).setVariables(true, {$installedEditionTreePreloaded, $installedEditionTreeActivated, $invalidRulesTreePreloaded, $invalidRulesTreeActivated, $invalidRulesTreePreloadedVisible, $invalidRulesTreeActivatedVisible})
  }
  
  
}