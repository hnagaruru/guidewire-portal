package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/ApplyToRenewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApplyToRenewalExpressions {
  @javax.annotation.Generated("config/web/pcf/job/ApplyToRenewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApplyToRenewalExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (currentBranch :  PolicyPeriod, futureBranch :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewNewJob_Input) at ApplyToRenewal.pcf: line 29, column 29
    function action_1 () : void {
      JobForward.go(futureBranch.Job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewCurrentJob_Input) at ApplyToRenewal.pcf: line 34, column 29
    function action_5 () : void {
      JobForward.go(currentBranch.Job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPolicy_Input) at ApplyToRenewal.pcf: line 39, column 29
    function action_7 () : void {
      PolicyFileForward.go(currentBranch.PolicyNumber, currentBranch.EditEffectiveDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewNewJob_Input) at ApplyToRenewal.pcf: line 29, column 29
    function action_dest_2 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(futureBranch.Job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewCurrentJob_Input) at ApplyToRenewal.pcf: line 34, column 29
    function action_dest_6 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(currentBranch.Job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPolicy_Input) at ApplyToRenewal.pcf: line 39, column 29
    function action_dest_8 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(currentBranch.PolicyNumber, currentBranch.EditEffectiveDate)
    }
    
    // 'label' attribute on Verbatim at ApplyToRenewal.pcf: line 21, column 101
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.ApplyToRenewal.Message", futureBranch.Job.JobNumber)
    }
    
    // 'parent' attribute on Page (id=ApplyToRenewal) at ApplyToRenewal.pcf: line 8, column 66
    static function parent_11 (currentBranch :  PolicyPeriod, futureBranch :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(currentBranch, currentBranch.EditEffectiveDate)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewNewJob_Input) at ApplyToRenewal.pcf: line 29, column 29
    function value_3 () : java.lang.String {
      return DisplayKey.get("Web.ApplyToRenewal.ViewNewJob", futureBranch.Job.JobNumber)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewPolicy_Input) at ApplyToRenewal.pcf: line 39, column 29
    function value_9 () : java.lang.String {
      return DisplayKey.get("Web.ApplyToRenewal.ViewPolicy", currentBranch.PolicyNumberDisplayString)
    }
    
    override property get CurrentLocation () : pcf.ApplyToRenewal {
      return super.CurrentLocation as pcf.ApplyToRenewal
    }
    
    property get currentBranch () : PolicyPeriod {
      return getVariableValue("currentBranch", 0) as PolicyPeriod
    }
    
    property set currentBranch ($arg :  PolicyPeriod) {
      setVariableValue("currentBranch", 0, $arg)
    }
    
    property get futureBranch () : PolicyPeriod {
      return getVariableValue("futureBranch", 0) as PolicyPeriod
    }
    
    property set futureBranch ($arg :  PolicyPeriod) {
      setVariableValue("futureBranch", 0, $arg)
    }
    
    
  }
  
  
}