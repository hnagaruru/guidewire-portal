package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobComplete.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobCompleteExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobComplete.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobCompleteExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CreateBinder) at JobComplete.pcf: line 30, column 115
    function action_2 () : void {
      policyPeriod.printDocument("Binder", "Binder", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'def' attribute on PanelRef at JobComplete.pcf: line 36, column 49
    function def_onEnter_4 (def :  pcf.JobCompleteDV) : void {
      def.onEnter(job, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at JobComplete.pcf: line 36, column 49
    function def_refreshVariables_5 (def :  pcf.JobCompleteDV) : void {
      def.refreshVariables(job, policyPeriod)
    }
    
    // 'infoBar' attribute on Page (id=JobComplete) at JobComplete.pcf: line 9, column 45
    function infoBar_onEnter_6 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(job, policyPeriod)
    }
    
    // 'infoBar' attribute on Page (id=JobComplete) at JobComplete.pcf: line 9, column 45
    function infoBar_refreshVariables_7 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(job, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at JobComplete.pcf: line 21, column 46
    function initialValue_0 () : gw.document.DocumentProduction {
      return new gw.document.DocumentProduction()
    }
    
    // 'label' attribute on Verbatim (id=Message) at JobComplete.pcf: line 34, column 52
    function label_3 () : java.lang.String {
      return policyPeriod.JobCompletionMessage
    }
    
    // 'parent' attribute on Page (id=JobComplete) at JobComplete.pcf: line 9, column 45
    static function parent_8 (job :  Job, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.WizardExit.createDestination()
    }
    
    // 'title' attribute on Page (id=JobComplete) at JobComplete.pcf: line 9, column 45
    static function title_9 (job :  Job, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return policyPeriod.JobCompletionTitle
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateBinder) at JobComplete.pcf: line 30, column 115
    function visible_1 () : java.lang.Boolean {
      return job typeis Submission and policyPeriod.Status == TC_BOUND and not policyPeriod.Policy.Issued
    }
    
    override property get CurrentLocation () : pcf.JobComplete {
      return super.CurrentLocation as pcf.JobComplete
    }
    
    property get documentProduction () : gw.document.DocumentProduction {
      return getVariableValue("documentProduction", 0) as gw.document.DocumentProduction
    }
    
    property set documentProduction ($arg :  gw.document.DocumentProduction) {
      setVariableValue("documentProduction", 0, $arg)
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