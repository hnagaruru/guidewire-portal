package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Direct.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_DirectExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Direct.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CovTermInputSet.Direct.pcf: line 18, column 98
    function def_onEnter_0 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(term as gw.api.domain.covterm.DirectCovTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at CovTermInputSet.Direct.pcf: line 18, column 98
    function def_refreshVariables_1 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(term as gw.api.domain.covterm.DirectCovTerm, jobWizardHelper)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("term", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set term ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}