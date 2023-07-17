package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Reinsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_ReinsuranceExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Reinsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_ReinsuranceExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Page (id=PolicyFile_Reinsurance) at PolicyFile_Reinsurance.pcf: line 13, column 68
    function afterCommit_11 (TopLocation :  pcf.api.Location) : void {
      afterCommit()
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Reinsurance) at PolicyFile_Reinsurance.pcf: line 13, column 68
    function afterEnter_12 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages); policyPeriod.reevalutateAttachments()
    }
    
    // 'beforeCommit' attribute on Page (id=PolicyFile_Reinsurance) at PolicyFile_Reinsurance.pcf: line 13, column 68
    function beforeCommit_13 (pickedValue :  java.lang.Object) : void {
      policyPeriod.RIRiskVersionLists.each(\ v -> v.AllVersions.each(\ r -> gw.reinsurance.risk.RIRiskValidation.validateUI(r)))
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Reinsurance) at PolicyFile_Reinsurance.pcf: line 13, column 68
    static function canVisit_15 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewpolicyfile and policyPeriod.AllReinsurables.HasElements and perm.System.viewreinsuranceforpolicy
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Reinsurance.pcf: line 53, column 60
    function def_onEnter_9 (def :  pcf.PolicyReinsuranceCV) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Reinsurance.pcf: line 53, column 60
    function def_refreshVariables_10 (def :  pcf.PolicyReinsuranceCV) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'value' attribute on TextInput (id=CedingUpdateComment_Input) at PolicyFile_Reinsurance.pcf: line 49, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      cededPremiumComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Reinsurance.pcf: line 26, column 23
    function initialValue_0 () : boolean {
      return policyPeriod.Policy.OpenJobs.countWhere(\j -> j.Subtype != typekey.Job.TC_AUDIT) > 0
    }
    
    // EditButtons at PolicyFile_Reinsurance.pcf: line 35, column 70
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=PolicyFile_Reinsurance) at PolicyFile_Reinsurance.pcf: line 13, column 68
    static function parent_16 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    // 'value' attribute on TextInput (id=CedingUpdateComment_Input) at PolicyFile_Reinsurance.pcf: line 49, column 42
    function value_6 () : java.lang.String {
      return cededPremiumComment
    }
    
    // 'editVisible' attribute on EditButtons at PolicyFile_Reinsurance.pcf: line 35, column 70
    function visible_1 () : java.lang.Boolean {
      return perm.System.editreinsuranceforpolicybasic
    }
    
    // 'visible' attribute on Toolbar at PolicyFile_Reinsurance.pcf: line 32, column 35
    function visible_4 () : java.lang.Boolean {
      return not hasOpenJobs
    }
    
    // 'visible' attribute on AlertBar (id=CannotEdit) at PolicyFile_Reinsurance.pcf: line 41, column 32
    function visible_5 () : java.lang.Boolean {
      return hasOpenJobs
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Reinsurance {
      return super.CurrentLocation as pcf.PolicyFile_Reinsurance
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get cededPremiumComment () : String {
      return getVariableValue("cededPremiumComment", 0) as String
    }
    
    property set cededPremiumComment ($arg :  String) {
      setVariableValue("cededPremiumComment", 0, $arg)
    }
    
    property get hasOpenJobs () : boolean {
      return getVariableValue("hasOpenJobs", 0) as java.lang.Boolean
    }
    
    property set hasOpenJobs ($arg :  boolean) {
      setVariableValue("hasOpenJobs", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    function afterCommit() {
      if (policyPeriod.Status == TC_BOUND) {
        gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
          // don't want to do this if policyPeriod is still quoted.
          var inBundlePP = bundle.add(policyPeriod)
          inBundlePP.activateDraftFacAgreements()
          inBundlePP.enqueueForCededPremiumCalculation(RIRecalcReason.TC_POLICYFILEEDIT, cededPremiumComment)
        })
      }
    }
    
    
  }
  
  
}