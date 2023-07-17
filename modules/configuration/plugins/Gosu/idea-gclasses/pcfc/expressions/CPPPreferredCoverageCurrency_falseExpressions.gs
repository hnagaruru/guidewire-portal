package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPPreferredCoverageCurrency.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPPreferredCoverageCurrency_falseExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPPreferredCoverageCurrency.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPPreferredCoverageCurrencyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueVisible' attribute on TextCell (id=NAPreferredCoverageCurrency_Cell) at CPPPreferredCoverageCurrency.false.pcf: line 17, column 42
    function visible_0 () : java.lang.Boolean {
      return policyLine != null
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  
}