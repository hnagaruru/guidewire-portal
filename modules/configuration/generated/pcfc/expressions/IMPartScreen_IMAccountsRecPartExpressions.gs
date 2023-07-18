package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartScreen.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartScreen_IMAccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartScreen.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartScreen.IMAccountsRecPart.pcf: line 36, column 58
    function def_onEnter_21 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMPartScreen.IMAccountsRecPart.pcf: line 38, column 74
    function def_onEnter_23 (def :  pcf.IMARPanelSet) : void {
      def.onEnter(accountsRecPart, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMPartScreen.IMAccountsRecPart.pcf: line 36, column 58
    function def_refreshVariables_22 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMPartScreen.IMAccountsRecPart.pcf: line 38, column 74
    function def_refreshVariables_24 (def :  pcf.IMARPanelSet) : void {
      def.refreshVariables(accountsRecPart, openForEdit, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=IMPartScreen) at IMPartScreen.IMAccountsRecPart.pcf: line 8, column 30
    function editable_25 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at IMPartScreen.IMAccountsRecPart.pcf: line 24, column 33
    function initialValue_0 () : IMAccountsRecPart {
      return policyPeriod.IMLine.IMAccountsRecPart
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function mode_1 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMPartScreen.IMAccountsRecPart.pcf: line 29, column 91
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at IMPartScreen.IMAccountsRecPart.pcf: line 34, column 80
    function visible_20 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getVariableValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setVariableValue("accountsRecPart", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}