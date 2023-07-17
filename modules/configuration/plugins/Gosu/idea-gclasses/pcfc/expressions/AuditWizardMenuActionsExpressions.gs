package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizardMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizardMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizardMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizardMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_ToAccountFile) at AuditWizardMenuActions.pcf: line 22, column 93
    function action_1 () : void {
      AccountFileForward.go(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_ToPolicyFile) at AuditWizardMenuActions.pcf: line 27, column 23
    function action_3 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_ToAudits) at AuditWizardMenuActions.pcf: line 31, column 69
    function action_5 () : void {
      goToAudits()
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_NewNote) at AuditWizardMenuActions.pcf: line 43, column 62
    function action_7 () : void {
      NewNoteWorksheet.goInWorkspace(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_ToAccountFile) at AuditWizardMenuActions.pcf: line 22, column 93
    function action_dest_2 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_ToPolicyFile) at AuditWizardMenuActions.pcf: line 27, column 23
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on MenuItem (id=AuditWizardMenuActions_NewNote) at AuditWizardMenuActions.pcf: line 43, column 62
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'def' attribute on MenuItemSetRef at AuditWizardMenuActions.pcf: line 59, column 65
    function def_onEnter_12 (def :  pcf.NewActivityMenuItemSet) : void {
      def.onEnter(null, null, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at AuditWizardMenuActions.pcf: line 50, column 58
    function def_onEnter_9 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at AuditWizardMenuActions.pcf: line 50, column 58
    function def_refreshVariables_10 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at AuditWizardMenuActions.pcf: line 59, column 65
    function def_refreshVariables_13 (def :  pcf.NewActivityMenuItemSet) : void {
      def.refreshVariables(null, null, policyPeriod)
    }
    
    // 'visible' attribute on MenuItem (id=AuditWizardMenuActions_ToAccountFile) at AuditWizardMenuActions.pcf: line 22, column 93
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Policy.Account != null and !policyPeriod.Policy.Account.New
    }
    
    // 'visible' attribute on MenuItem (id=AuditWizardMenuActions_NewDocument) at AuditWizardMenuActions.pcf: line 48, column 112
    function visible_11 () : java.lang.Boolean {
      return !policyPeriod.Locked and gw.document.DocumentsActionsUIHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=AuditWizardMenuActions_NewActivity) at AuditWizardMenuActions.pcf: line 57, column 64
    function visible_14 () : java.lang.Boolean {
      return !policyPeriod.Locked and perm.System.actcreate
    }
    
    // 'visible' attribute on MenuItem (id=AuditWizardMenuActions_NewNote) at AuditWizardMenuActions.pcf: line 43, column 62
    function visible_6 () : java.lang.Boolean {
      return !policyPeriod.Locked and perm.Note.create
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function goToAudits() {
      var boundPeriod = Policy.finder.findMostRecentBoundPeriodByPolicy(policyPeriod.Policy )
      PolicyFileForward.go(boundPeriod, boundPeriod.EditEffectiveDate, "PolicyAudits")
    }
    
    
  }
  
  
}