package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactDisplayCell_OwnerOfficerExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactDisplayCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.OwnerOfficer.pcf: line 19, column 36
    function action_0 () : void {
      AccountContactRolePopup.push(acctContactRole)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.OwnerOfficer.pcf: line 19, column 36
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AccountContactRolePopup.createDestination(acctContactRole)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at AccountContactDisplayCell.OwnerOfficer.pcf: line 27, column 43
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (acctContactRole as OwnerOfficer).RelationshipTitle = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'inputConversion' attribute on TextInput (id=Relationship_Input) at AccountContactDisplayCell.OwnerOfficer.pcf: line 27, column 43
    function inputConversion_3 (VALUE :  java.lang.String) : java.lang.Object {
      return typekey.Relationship.get(VALUE)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at AccountContactDisplayCell.OwnerOfficer.pcf: line 27, column 43
    function valueRoot_6 () : java.lang.Object {
      return (acctContactRole as OwnerOfficer)
    }
    
    // 'value' attribute on TextInput (id=Relationship_Input) at AccountContactDisplayCell.OwnerOfficer.pcf: line 27, column 43
    function value_4 () : typekey.Relationship {
      return (acctContactRole as OwnerOfficer).RelationshipTitle
    }
    
    // 'visible' attribute on ContentInput at AccountContactDisplayCell.OwnerOfficer.pcf: line 14, column 46
    function visible_2 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}