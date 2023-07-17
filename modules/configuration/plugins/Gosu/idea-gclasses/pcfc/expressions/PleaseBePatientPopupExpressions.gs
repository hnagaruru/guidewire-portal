package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/PleaseBePatientPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PleaseBePatientPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/PleaseBePatientPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PleaseBePatientPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, helper :  gw.api.web.job.JobWizardHelper, nextStep :  String, context :  gw.web.PatienceContext) : int {
      return 0
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=JobWizardPatiences_Input) at PleaseBePatientPopup.pcf: line 33, column 69
    function action_0 () : void {
      helper.redirectBasedOnBranchStatus( helper.refreshAndReturnPolicyPeriod(), nextStep )
    }
    
    // 'percentage' attribute on ProgressInput (id=JobWizardPatiences_Input) at PleaseBePatientPopup.pcf: line 33, column 69
    function percentage_1 () : java.lang.Double {
      return context.keepWaiting() ? waitCount() : 100
    }
    
    override property get CurrentLocation () : pcf.PleaseBePatientPopup {
      return super.CurrentLocation as pcf.PleaseBePatientPopup
    }
    
    property get context () : gw.web.PatienceContext {
      return getVariableValue("context", 0) as gw.web.PatienceContext
    }
    
    property set context ($arg :  gw.web.PatienceContext) {
      setVariableValue("context", 0, $arg)
    }
    
    property get helper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("helper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set helper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get nextStep () : String {
      return getVariableValue("nextStep", 0) as String
    }
    
    property set nextStep ($arg :  String) {
      setVariableValue("nextStep", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    var _waitCount : int = 0
    
    function waitCount() : int {
      _waitCount = _waitCount + 10
      if(_waitCount < 100) {
        return -1
      } else {
        return 100
      }
    }
    
    
  }
  
  
}