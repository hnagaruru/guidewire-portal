package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/QuoteTypeToolbarButtonSet.AsyncQuote.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuoteTypeToolbarButtonSet_AsyncQuoteExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/QuoteTypeToolbarButtonSet.AsyncQuote.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuoteTypeToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AsyncQuote) at QuoteTypeToolbarButtonSet.AsyncQuote.pcf: line 19, column 21
    function action_0 () : void {
      jobWizardHelper.invalidateIterators(); jobWizardHelper.startAsyncQuoteProcess(policyPeriod) 
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}