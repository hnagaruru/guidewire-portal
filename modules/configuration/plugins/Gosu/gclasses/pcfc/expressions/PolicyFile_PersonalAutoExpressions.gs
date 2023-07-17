package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policyfile/PolicyFile_PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PersonalAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policyfile/PolicyFile_PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PA_Coverages_ScreenExpressionsImpl extends PolicyFile_PersonalAutoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_PersonalAuto.pcf: line 29, column 52
    function def_onEnter_1 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(paLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 52, column 104
    function def_onEnter_12 (def :  pcf.PAVehicleAdditionalCoveragesDV) : void {
      def.onEnter(paLine, new String[]{"PAMiscGrp"}, false)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PolicyFile_PersonalAuto.pcf: line 62, column 56
    function def_onEnter_14 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(policyPeriod.PersonalAutoLine, new String[] {"PAPhysDamExcl", "PALiabExcl", "PAPhysDamCond", "PALiabCond"}, true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 36, column 71
    function def_onEnter_4 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.onEnter(paLine, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 41, column 71
    function def_onEnter_6 (def :  pcf.PAPerVehiclePanelSet) : void {
      def.onEnter(paLine.Branch, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 47, column 101
    function def_onEnter_9 (def :  pcf.PALineAdditionalCoveragesDV) : void {
      def.onEnter(paLine, new String[]{"PAMiscGrp"}, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 47, column 101
    function def_refreshVariables_10 (def :  pcf.PALineAdditionalCoveragesDV) : void {
      def.refreshVariables(paLine, new String[]{"PAMiscGrp"}, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 52, column 104
    function def_refreshVariables_13 (def :  pcf.PAVehicleAdditionalCoveragesDV) : void {
      def.refreshVariables(paLine, new String[]{"PAMiscGrp"}, false)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PolicyFile_PersonalAuto.pcf: line 62, column 56
    function def_refreshVariables_15 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(policyPeriod.PersonalAutoLine, new String[] {"PAPhysDamExcl", "PALiabExcl", "PAPhysDamCond", "PALiabCond"}, true, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_PersonalAuto.pcf: line 29, column 52
    function def_refreshVariables_2 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(paLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 36, column 71
    function def_refreshVariables_5 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.refreshVariables(paLine, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PersonalAuto.pcf: line 41, column 71
    function def_refreshVariables_7 (def :  pcf.PAPerVehiclePanelSet) : void {
      def.refreshVariables(paLine.Branch, false, null)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_PersonalAuto.pcf: line 24, column 47
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return policyPeriod.PersonalAutoLine
    }
    
    // 'title' attribute on TitleBar at PolicyFile_PersonalAuto.pcf: line 54, column 111
    function title_11 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.PerVehicleCoveragesTitle", paLine.BaseState)
    }
    
    // 'title' attribute on TitleBar at PolicyFile_PersonalAuto.pcf: line 38, column 111
    function title_3 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.AllVehicleCoveragesTitle", paLine.BaseState)
    }
    
    property get paLine () : productmodel.PersonalAutoLine {
      return getVariableValue("paLine", 1) as productmodel.PersonalAutoLine
    }
    
    property set paLine ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paLine", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policyfile/PolicyFile_PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PersonalAutoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_PersonalAuto) at PolicyFile_PersonalAuto.pcf: line 10, column 61
    function afterEnter_16 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_PersonalAuto) at PolicyFile_PersonalAuto.pcf: line 10, column 61
    static function canVisit_17 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'parent' attribute on Page (id=PolicyFile_PersonalAuto) at PolicyFile_PersonalAuto.pcf: line 10, column 61
    static function parent_18 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_PersonalAuto {
      return super.CurrentLocation as pcf.PolicyFile_PersonalAuto
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}