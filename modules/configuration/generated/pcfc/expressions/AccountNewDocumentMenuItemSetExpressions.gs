package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountNewDocumentMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountNewDocumentMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AccountNewDocumentMenuItemSet_Linked) at AccountNewDocumentMenuItemSet.pcf: line 16, column 80
    function action_0 () : void {
      AccountNewDocumentsLinkedWorksheet.goInWorkspace(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountNewDocumentMenuItemSet_Template) at AccountNewDocumentMenuItemSet.pcf: line 21, column 81
    function action_3 () : void {
      documentsActionsHelper.goInAccountNewDocumentFromTemplateWorksheet(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountNewDocumentMenuItemSet_Linked) at AccountNewDocumentMenuItemSet.pcf: line 16, column 80
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AccountNewDocumentsLinkedWorksheet.createDestination(account)
    }
    
    // 'available' attribute on MenuItem (id=AccountNewDocumentMenuItemSet_Template) at AccountNewDocumentMenuItemSet.pcf: line 21, column 81
    function available_2 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentTemplateActionsAvailable
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}