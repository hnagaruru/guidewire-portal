package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SideBySideScreen.pcf: line 45, column 44
    function def_onEnter_11 (def :  pcf.SideBySideTableLayoutDV) : void {
      def.onEnter(jobWizHelper, sideHelper)
    }
    
    // 'def' attribute on PanelRef (id=WarningMessages) at SideBySideScreen.pcf: line 39, column 31
    function def_onEnter_5 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(gw.lob.common.SideBySideUtil.getSideBySideBlockingMessages(periods))
    }
    
    // 'def' attribute on PanelRef at SideBySideScreen.pcf: line 41, column 64
    function def_onEnter_7 (def :  pcf.SideBySideErrorPageDV) : void {
      def.onEnter(jobWizHelper, sideHelper)
    }
    
    // 'def' attribute on PanelRef at SideBySideScreen.pcf: line 45, column 44
    function def_refreshVariables_12 (def :  pcf.SideBySideTableLayoutDV) : void {
      def.refreshVariables(jobWizHelper, sideHelper)
    }
    
    // 'def' attribute on PanelRef (id=WarningMessages) at SideBySideScreen.pcf: line 39, column 31
    function def_refreshVariables_6 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(gw.lob.common.SideBySideUtil.getSideBySideBlockingMessages(periods))
    }
    
    // 'def' attribute on PanelRef at SideBySideScreen.pcf: line 41, column 64
    function def_refreshVariables_8 (def :  pcf.SideBySideErrorPageDV) : void {
      def.refreshVariables(jobWizHelper, sideHelper)
    }
    
    // 'initialValue' attribute on Variable at SideBySideScreen.pcf: line 20, column 23
    function initialValue_0 () : boolean {
      return gw.lob.common.SideBySideUtil.hasOOSorPreemption(basePeriod.Job)
    }
    
    // 'initialValue' attribute on Variable at SideBySideScreen.pcf: line 25, column 30
    function initialValue_1 () : PolicyPeriod[] {
      return gw.lob.common.SideBySideUtil.getSideBySidePeriods(basePeriod)
    }
    
    // 'initialValue' attribute on Variable at SideBySideScreen.pcf: line 29, column 56
    function initialValue_2 () : gw.pcf.sidebyside.SideBySideScreenHelper {
      return new gw.pcf.sidebyside.SideBySideScreenHelper(jobWizHelper, periods, caches)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SideBySideScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.SideBySideToolbarButtonSet) : void {
      def.onEnter(basePeriod,jobWizHelper,sideHelper.PeriodInfos)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SideBySideScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.SideBySideToolbarButtonSet) : void {
      def.refreshVariables(basePeriod,jobWizHelper,sideHelper.PeriodInfos)
    }
    
    // 'visible' attribute on PanelRef at SideBySideScreen.pcf: line 45, column 44
    function visible_10 () : java.lang.Boolean {
      return not hideInitialSideBySide
    }
    
    // 'visible' attribute on PanelSet at SideBySideScreen.pcf: line 36, column 39
    function visible_9 () : java.lang.Boolean {
      return hideInitialSideBySide
    }
    
    property get basePeriod () : PolicyPeriod {
      return getRequireValue("basePeriod", 0) as PolicyPeriod
    }
    
    property set basePeriod ($arg :  PolicyPeriod) {
      setRequireValue("basePeriod", 0, $arg)
    }
    
    property get caches () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getRequireValue("caches", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set caches ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setRequireValue("caches", 0, $arg)
    }
    
    property get hideInitialSideBySide () : boolean {
      return getVariableValue("hideInitialSideBySide", 0) as java.lang.Boolean
    }
    
    property set hideInitialSideBySide ($arg :  boolean) {
      setVariableValue("hideInitialSideBySide", 0, $arg)
    }
    
    property get jobWizHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizHelper", 0, $arg)
    }
    
    property get periods () : PolicyPeriod[] {
      return getVariableValue("periods", 0) as PolicyPeriod[]
    }
    
    property set periods ($arg :  PolicyPeriod[]) {
      setVariableValue("periods", 0, $arg)
    }
    
    property get sideHelper () : gw.pcf.sidebyside.SideBySideScreenHelper {
      return getVariableValue("sideHelper", 0) as gw.pcf.sidebyside.SideBySideScreenHelper
    }
    
    property set sideHelper ($arg :  gw.pcf.sidebyside.SideBySideScreenHelper) {
      setVariableValue("sideHelper", 0, $arg)
    }
    
    
  }
  
  
}