package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/AsyncQuoteValidationRewriteNewAccountWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AsyncQuoteValidationRewriteNewAccountWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/AsyncQuoteValidationRewriteNewAccountWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AsyncQuoteValidationRewriteNewAccountWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at AsyncQuoteValidationRewriteNewAccountWorksheet.pcf: line 23, column 43
    function def_onEnter_3 (def :  pcf.AsyncQuoteValidationScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at AsyncQuoteValidationRewriteNewAccountWorksheet.pcf: line 23, column 43
    function def_refreshVariables_4 (def :  pcf.AsyncQuoteValidationScreen) : void {
      def.refreshVariables()
    }
    
    // 'initialValue' attribute on Variable at AsyncQuoteValidationRewriteNewAccountWorksheet.pcf: line 21, column 19
    function initialValue_2 () : Job {
      return policyPeriod.Job
    }
    
    // 'location' attribute on Scope at AsyncQuoteValidationRewriteNewAccountWorksheet.pcf: line 12, column 83
    function location_0 () : pcf.api.Destination {
      return pcf.RewriteNewAccountWizard.createDestination(job as RewriteNewAccount, policyPeriod)
    }
    
    // 'location' attribute on Scope at AsyncQuoteValidationRewriteNewAccountWorksheet.pcf: line 14, column 64
    function location_1 () : pcf.api.Destination {
      return pcf.UWBlockProgressIssuesPopup.createDestination(job.LatestPeriod)
    }
    
    override property get CurrentLocation () : pcf.AsyncQuoteValidationRewriteNewAccountWorksheet {
      return super.CurrentLocation as pcf.AsyncQuoteValidationRewriteNewAccountWorksheet
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}