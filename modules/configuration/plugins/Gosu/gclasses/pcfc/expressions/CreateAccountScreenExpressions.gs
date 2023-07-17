package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at CreateAccountScreen.pcf: line 22, column 60
    function action_1 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.commit())
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at CreateAccountScreen.pcf: line 29, column 60
    function action_5 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'def' attribute on PanelRef at CreateAccountScreen.pcf: line 35, column 36
    function def_onEnter_7 (def :  pcf.CreateAccountDV) : void {
      def.onEnter(account, producerSelection)
    }
    
    // 'def' attribute on PanelRef at CreateAccountScreen.pcf: line 35, column 36
    function def_refreshVariables_8 (def :  pcf.CreateAccountDV) : void {
      def.refreshVariables(account, producerSelection)
    }
    
    // 'editable' attribute on PanelRef at CreateAccountScreen.pcf: line 35, column 36
    function editable_6 () : java.lang.Boolean {
      return account.Editable
    }
    
    // EditButtons at CreateAccountScreen.pcf: line 24, column 70
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at CreateAccountScreen.pcf: line 22, column 60
    function visible_0 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at CreateAccountScreen.pcf: line 24, column 70
    function visible_2 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getRequireValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setRequireValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    property get producerSelection () : ProducerSelection {
      return getRequireValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setRequireValue("producerSelection", 0, $arg)
    }
    
    
  }
  
  
}