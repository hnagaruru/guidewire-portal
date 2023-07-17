package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/NewPolicyHold.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPolicyHoldExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/NewPolicyHold.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPolicyHoldExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (policyHoldToCopy :  PolicyHold, copyRules :  boolean, copyRegions :  boolean) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    function afterCancel_3 () : void {
      PolicyHolds.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      PolicyHolds.go()
    }
    
    // 'beforeCommit' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    function beforeCommit_6 (pickedValue :  java.lang.Object) : void {
      gw.admin.PolicyHoldValidation.validatePolicyHold(policyHold)
    }
    
    // 'canEdit' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    function canEdit_7 () : java.lang.Boolean {
      return perm.System.polholdcreate
    }
    
    // 'def' attribute on ScreenRef at NewPolicyHold.pcf: line 33, column 56
    function def_onEnter_1 (def :  pcf.PolicyHoldDetailScreen) : void {
      def.onEnter(policyHold, false)
    }
    
    // 'def' attribute on ScreenRef at NewPolicyHold.pcf: line 33, column 56
    function def_refreshVariables_2 (def :  pcf.PolicyHoldDetailScreen) : void {
      def.refreshVariables(policyHold, false)
    }
    
    // 'initialValue' attribute on Variable at NewPolicyHold.pcf: line 31, column 26
    function initialValue_0 () : PolicyHold {
      return policyHoldToCopy == null ? new PolicyHold() : policyHoldToCopy.copyPolicyHold(copyRules, copyRegions)
    }
    
    // 'parent' attribute on Page (id=NewPolicyHold) at NewPolicyHold.pcf: line 14, column 76
    static function parent_8 (copyRegions :  boolean, copyRules :  boolean, policyHoldToCopy :  PolicyHold) : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewPolicyHold {
      return super.CurrentLocation as pcf.NewPolicyHold
    }
    
    property get copyRegions () : boolean {
      return getVariableValue("copyRegions", 0) as java.lang.Boolean
    }
    
    property set copyRegions ($arg :  boolean) {
      setVariableValue("copyRegions", 0, $arg)
    }
    
    property get copyRules () : boolean {
      return getVariableValue("copyRules", 0) as java.lang.Boolean
    }
    
    property set copyRules ($arg :  boolean) {
      setVariableValue("copyRules", 0, $arg)
    }
    
    property get policyHold () : PolicyHold {
      return getVariableValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setVariableValue("policyHold", 0, $arg)
    }
    
    property get policyHoldToCopy () : PolicyHold {
      return getVariableValue("policyHoldToCopy", 0) as PolicyHold
    }
    
    property set policyHoldToCopy ($arg :  PolicyHold) {
      setVariableValue("policyHoldToCopy", 0, $arg)
    }
    
    
  }
  
  
}