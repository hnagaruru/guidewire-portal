package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/AsyncQuoteValidationRenewalWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AsyncQuoteValidationRenewalWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/AsyncQuoteValidationRenewalWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AsyncQuoteValidationRenewalWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at AsyncQuoteValidationRenewalWorksheet.pcf: line 23, column 43
    function def_onEnter_3 (def :  pcf.AsyncQuoteValidationScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at AsyncQuoteValidationRenewalWorksheet.pcf: line 23, column 43
    function def_refreshVariables_4 (def :  pcf.AsyncQuoteValidationScreen) : void {
      def.refreshVariables()
    }
    
    // 'initialValue' attribute on Variable at AsyncQuoteValidationRenewalWorksheet.pcf: line 21, column 19
    function initialValue_2 () : Job {
      return policyPeriod.Job
    }
    
    // 'location' attribute on Scope at AsyncQuoteValidationRenewalWorksheet.pcf: line 12, column 63
    function location_0 () : pcf.api.Destination {
      return pcf.RenewalWizard.createDestination(job as Renewal, policyPeriod)
    }
    
    // 'location' attribute on Scope at AsyncQuoteValidationRenewalWorksheet.pcf: line 14, column 64
    function location_1 () : pcf.api.Destination {
      return pcf.UWBlockProgressIssuesPopup.createDestination(job.LatestPeriod)
    }
    
    override property get CurrentLocation () : pcf.AsyncQuoteValidationRenewalWorksheet {
      return super.CurrentLocation as pcf.AsyncQuoteValidationRenewalWorksheet
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