package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/DiffPolicyPeriodsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DiffPolicyPeriodsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/DiffPolicyPeriodsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DiffPolicyPeriodsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (firstPeriod :  PolicyPeriod, secondPeriod :  PolicyPeriod, policyFilePeriod :  PolicyPeriod, asOfDate :  java.util.Date, title :  String) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=DiffPolicyPeriodsPopup) at DiffPolicyPeriodsPopup.pcf: line 9, column 19
    static function canVisit_32 (asOfDate :  java.util.Date, firstPeriod :  PolicyPeriod, policyFilePeriod :  PolicyPeriod, secondPeriod :  PolicyPeriod, title :  String) : java.lang.Boolean {
      return perm.PolicyPeriod.view(firstPeriod) and perm.PolicyPeriod.view(secondPeriod)
    }
    
    // 'def' attribute on PanelRef at DiffPolicyPeriodsPopup.pcf: line 131, column 105
    function def_onEnter_30 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_COMPAREJOBS, firstPeriod, secondPeriod, rootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at DiffPolicyPeriodsPopup.pcf: line 131, column 105
    function def_refreshVariables_31 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_COMPAREJOBS, firstPeriod, secondPeriod, rootNode, diffTreeConfig)
    }
    
    // 'initialValue' attribute on Variable at DiffPolicyPeriodsPopup.pcf: line 30, column 22
    function initialValue_0 () : String {
      return firstPeriod.Job.DisplayType + ": " + firstPeriod.Job.JobNumber
    }
    
    // 'initialValue' attribute on Variable at DiffPolicyPeriodsPopup.pcf: line 34, column 22
    function initialValue_1 () : String {
      return secondPeriod.Job.DisplayType + ": " + secondPeriod.Job.JobNumber
    }
    
    // 'initialValue' attribute on Variable at DiffPolicyPeriodsPopup.pcf: line 38, column 43
    function initialValue_2 () : gw.api.tree.RowTreeRootNode {
      return gw.diff.tree.DiffTree.recalculateRootNode(firstPeriod, secondPeriod, DiffReason.TC_COMPAREJOBS)
    }
    
    // 'initialValue' attribute on Variable at DiffPolicyPeriodsPopup.pcf: line 42, column 32
    function initialValue_3 () : java.lang.String {
      return policyFilePeriod.Policy.Product.DiffTreeConfig
    }
    
    // 'parent' attribute on Popup (id=DiffPolicyPeriodsPopup) at DiffPolicyPeriodsPopup.pcf: line 9, column 19
    static function parent_33 (asOfDate :  java.util.Date, firstPeriod :  PolicyPeriod, policyFilePeriod :  PolicyPeriod, secondPeriod :  PolicyPeriod, title :  String) : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyFilePeriod, asOfDate)
    }
    
    // 'title' attribute on Popup (id=DiffPolicyPeriodsPopup) at DiffPolicyPeriodsPopup.pcf: line 9, column 19
    static function title_34 (asOfDate :  java.util.Date, firstPeriod :  PolicyPeriod, policyFilePeriod :  PolicyPeriod, secondPeriod :  PolicyPeriod, title :  String) : java.lang.Object {
      return title
    }
    
    // 'value' attribute on DateCell (id=secondCreateTime_Cell) at DiffPolicyPeriodsPopup.pcf: line 78, column 46
    function valueRoot_12 () : java.lang.Object {
      return secondPeriod
    }
    
    // 'value' attribute on DateCell (id=firstCreateTime_Cell) at DiffPolicyPeriodsPopup.pcf: line 71, column 45
    function valueRoot_9 () : java.lang.Object {
      return firstPeriod
    }
    
    // 'value' attribute on DateCell (id=secondCreateTime_Cell) at DiffPolicyPeriodsPopup.pcf: line 78, column 46
    function value_11 () : java.util.Date {
      return secondPeriod.CreateTime
    }
    
    // 'value' attribute on DateCell (id=firstEffectiveDate_Cell) at DiffPolicyPeriodsPopup.pcf: line 89, column 52
    function value_14 () : java.util.Date {
      return firstPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=secondEffectiveDate_Cell) at DiffPolicyPeriodsPopup.pcf: line 95, column 53
    function value_17 () : java.util.Date {
      return secondPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=firstStatus_Cell) at DiffPolicyPeriodsPopup.pcf: line 105, column 53
    function value_20 () : typekey.PolicyPeriodStatus {
      return firstPeriod.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=secondStatus_Cell) at DiffPolicyPeriodsPopup.pcf: line 110, column 53
    function value_23 () : typekey.PolicyPeriodStatus {
      return secondPeriod.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=firstSumAmount_Cell) at DiffPolicyPeriodsPopup.pcf: line 122, column 129
    function value_26 () : gw.pl.currency.MonetaryAmount {
      return firstPeriod.ValidRate ? firstPeriod.TotalCostRPT : 0bd.ofCurrency(firstPeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=secondSumAmount_Cell) at DiffPolicyPeriodsPopup.pcf: line 127, column 132
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return secondPeriod.ValidRate ? secondPeriod.TotalCostRPT : 0bd.ofCurrency(secondPeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=firstBranchName_Cell) at DiffPolicyPeriodsPopup.pcf: line 55, column 38
    function value_4 () : java.lang.String {
      return firstPeriodName
    }
    
    // 'value' attribute on TextCell (id=secondBranchName_Cell) at DiffPolicyPeriodsPopup.pcf: line 59, column 39
    function value_6 () : java.lang.String {
      return secondPeriodName
    }
    
    // 'value' attribute on DateCell (id=firstCreateTime_Cell) at DiffPolicyPeriodsPopup.pcf: line 71, column 45
    function value_8 () : java.util.Date {
      return firstPeriod.CreateTime
    }
    
    override property get CurrentLocation () : pcf.DiffPolicyPeriodsPopup {
      return super.CurrentLocation as pcf.DiffPolicyPeriodsPopup
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get diffTreeConfig () : java.lang.String {
      return getVariableValue("diffTreeConfig", 0) as java.lang.String
    }
    
    property set diffTreeConfig ($arg :  java.lang.String) {
      setVariableValue("diffTreeConfig", 0, $arg)
    }
    
    property get firstPeriod () : PolicyPeriod {
      return getVariableValue("firstPeriod", 0) as PolicyPeriod
    }
    
    property set firstPeriod ($arg :  PolicyPeriod) {
      setVariableValue("firstPeriod", 0, $arg)
    }
    
    property get firstPeriodName () : String {
      return getVariableValue("firstPeriodName", 0) as String
    }
    
    property set firstPeriodName ($arg :  String) {
      setVariableValue("firstPeriodName", 0, $arg)
    }
    
    property get policyFilePeriod () : PolicyPeriod {
      return getVariableValue("policyFilePeriod", 0) as PolicyPeriod
    }
    
    property set policyFilePeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyFilePeriod", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 0, $arg)
    }
    
    property get secondPeriod () : PolicyPeriod {
      return getVariableValue("secondPeriod", 0) as PolicyPeriod
    }
    
    property set secondPeriod ($arg :  PolicyPeriod) {
      setVariableValue("secondPeriod", 0, $arg)
    }
    
    property get secondPeriodName () : String {
      return getVariableValue("secondPeriodName", 0) as String
    }
    
    property set secondPeriodName ($arg :  String) {
      setVariableValue("secondPeriodName", 0, $arg)
    }
    
    property get title () : String {
      return getVariableValue("title", 0) as String
    }
    
    property set title ($arg :  String) {
      setVariableValue("title", 0, $arg)
    }
    
    
  }
  
  
}