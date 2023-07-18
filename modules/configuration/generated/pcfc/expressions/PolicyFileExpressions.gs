package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 1
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function acceleratedMenuActions_onEnter_25 (def :  pcf.PolicyFileAcceleratedMenuActions) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'acceleratedMenuActions' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function acceleratedMenuActions_refreshVariables_26 (def :  pcf.PolicyFileAcceleratedMenuActions) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 32, column 62
    function action_1 () : void {
      pcf.PolicyFile_Summary.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 57, column 60
    function action_11 () : void {
      pcf.PolicyFile_Notes.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 62, column 64
    function action_13 () : void {
      pcf.PolicyFile_Documents.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 67, column 59
    function action_15 () : void {
      pcf.PolicyFile_Jobs.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 72, column 67
    function action_17 () : void {
      pcf.PolicyFile_RiskAnalysis.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 77, column 66
    function action_19 () : void {
      pcf.PolicyFile_Reinsurance.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 82, column 62
    function action_21 () : void {
      pcf.PolicyFile_History.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 86, column 67
    function action_23 () : void {
      pcf.PolicyFile_Transactions.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 37, column 61
    function action_3 () : void {
      pcf.PolicyFile_Audits.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 42, column 62
    function action_5 () : void {
      pcf.PolicyFile_Billing.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 47, column 63
    function action_7 () : void {
      pcf.PolicyFile_Contacts.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 52, column 67
    function action_9 () : void {
      pcf.PolicyFile_Participants.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 52, column 67
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PolicyFile_Participants.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 57, column 60
    function action_dest_12 () : pcf.api.Destination {
      return pcf.PolicyFile_Notes.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 62, column 64
    function action_dest_14 () : pcf.api.Destination {
      return pcf.PolicyFile_Documents.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 67, column 59
    function action_dest_16 () : pcf.api.Destination {
      return pcf.PolicyFile_Jobs.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 72, column 67
    function action_dest_18 () : pcf.api.Destination {
      return pcf.PolicyFile_RiskAnalysis.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 32, column 62
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyFile_Summary.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 77, column 66
    function action_dest_20 () : pcf.api.Destination {
      return pcf.PolicyFile_Reinsurance.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 82, column 62
    function action_dest_22 () : pcf.api.Destination {
      return pcf.PolicyFile_History.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 86, column 67
    function action_dest_24 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 37, column 61
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PolicyFile_Audits.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 42, column 62
    function action_dest_6 () : pcf.api.Destination {
      return pcf.PolicyFile_Billing.createDestination(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 47, column 63
    function action_dest_8 () : pcf.api.Destination {
      return pcf.PolicyFile_Contacts.createDestination(policyPeriod, asOfDate)
    }
    
    // 'canVisit' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    static function canVisit_27 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    static function firstVisitableChildDestinationMethod_36 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.PolicyFile_Summary.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Audits.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Billing.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Contacts.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Participants.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Notes.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Documents.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Jobs.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_RiskAnalysis.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Reinsurance.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_History.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyFile_Transactions.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'infoBar' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function infoBar_onEnter_28 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'infoBar' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function infoBar_refreshVariables_29 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile.pcf: line 26, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'menuActions' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function menuActions_onEnter_30 (def :  pcf.PolicyFileMenuActions) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'menuActions' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function menuActions_refreshVariables_31 (def :  pcf.PolicyFileMenuActions) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'parent' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    static function parent_32 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyAccountForward.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'tabBar' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function tabBar_onEnter_33 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    function tabBar_refreshVariables_34 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on LocationGroup (id=PolicyFile) at PolicyFile.pcf: line 15, column 116
    static function title_35 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.PolicyFile.LocationGroup.Title", policyPeriod.PolicyNumberDisplayString)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile {
      return super.CurrentLocation as pcf.PolicyFile
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