package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_PreQualificationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteNewAccountWizard_PreQualificationScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_PreQualificationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteNewAccountWizard_PreQualificationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreQualQuestionSetsDV) at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 41, column 35
    function def_onEnter_22 (def :  pcf.QuestionSetsDV) : void {
      def.onEnter(preQualQuestionSets, policyPeriod, null)
    }
    
    // 'def' attribute on PanelRef (id=PreQualQuestionSetsDV) at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 41, column 35
    function def_refreshVariables_23 (def :  pcf.QuestionSetsDV) : void {
      def.refreshVariables(preQualQuestionSets, policyPeriod, null)
    }
    
    // 'editable' attribute on Screen (id=RewriteNewAccountWizard_PreQualificationScreen) at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 7, column 57
    function editable_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 28, column 49
    function initialValue_1 () : gw.api.productmodel.QuestionSet[] {
      return policyPeriod.Policy.Product.getQuestionSetsByType(QuestionSetType.TC_PREQUAL)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function mode_2 () : java.lang.Object {
      return rewriteNewAccount.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 33, column 105
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at RewriteNewAccountWizard_PreQualificationScreen.pcf: line 38, column 80
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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
    
    property get preQualQuestionSets () : gw.api.productmodel.QuestionSet[] {
      return getVariableValue("preQualQuestionSets", 0) as gw.api.productmodel.QuestionSet[]
    }
    
    property set preQualQuestionSets ($arg :  gw.api.productmodel.QuestionSet[]) {
      setVariableValue("preQualQuestionSets", 0, $arg)
    }
    
    property get rewriteNewAccount () : RewriteNewAccount {
      return getRequireValue("rewriteNewAccount", 0) as RewriteNewAccount
    }
    
    property set rewriteNewAccount ($arg :  RewriteNewAccount) {
      setRequireValue("rewriteNewAccount", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}