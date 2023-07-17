package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewJobDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewJobDocumentMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewJobDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewJobDocumentMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewJobDocumentMenuItemSet.pcf: line 17, column 75
    function action_1 () : void {
      NewDocumentsLinkedWorksheet.goInWorkspace(policyPeriod, policyPeriod.Job)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Template) at NewJobDocumentMenuItemSet.pcf: line 22, column 76
    function action_4 () : void {
      documentsActionsHelper.goInNewDocumentFromTemplateWorksheet(policyPeriod, policyPeriod.Job)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewJobDocumentMenuItemSet.pcf: line 17, column 75
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewDocumentsLinkedWorksheet.createDestination(policyPeriod, policyPeriod.Job)
    }
    
    // 'available' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewJobDocumentMenuItemSet.pcf: line 17, column 75
    function available_0 () : java.lang.Boolean {
      return perm.System.doccreate
    }
    
    // 'available' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Template) at NewJobDocumentMenuItemSet.pcf: line 22, column 76
    function available_3 () : java.lang.Boolean {
      return perm.System.doccreate and documentsActionsHelper.DocumentTemplateActionsAvailable
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}