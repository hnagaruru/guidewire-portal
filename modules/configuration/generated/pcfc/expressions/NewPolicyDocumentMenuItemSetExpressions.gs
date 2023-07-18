package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewPolicyDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPolicyDocumentMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewPolicyDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPolicyDocumentMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewPolicyDocumentMenuItemSet.pcf: line 17, column 75
    function action_1 () : void {
      NewDocumentsLinkedWorksheet.goInWorkspace(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Template) at NewPolicyDocumentMenuItemSet.pcf: line 22, column 76
    function action_4 () : void {
      docActionsHelper.goInNewDocumentFromTemplateWorksheet(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewPolicyDocumentMenuItemSet.pcf: line 17, column 75
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewDocumentsLinkedWorksheet.createDestination(policyPeriod)
    }
    
    // 'available' attribute on MenuItem (id=PolicyPeriodNewDocumentMenuItemSet_Linked) at NewPolicyDocumentMenuItemSet.pcf: line 17, column 75
    function available_0 () : java.lang.Boolean {
      return perm.System.doccreate
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}