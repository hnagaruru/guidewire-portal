package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableLoadFactorsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableLoadFactorsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltUserCell (id=LoadFactor_User_Cell) at EditableLoadFactorsLV.pcf: line 20, column 35
    function sortValue_0 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.User
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 27, column 42
    function sortValue_1 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.LoadFactor
    }
    
    // 'value' attribute on RowIterator at EditableLoadFactorsLV.pcf: line 14, column 38
    function value_11 () : entity.GroupUser[] {
      return groupUserList
    }
    
    property get groupUserList () : GroupUser[] {
      return getRequireValue("groupUserList", 0) as GroupUser[]
    }
    
    property set groupUserList ($arg :  GroupUser[]) {
      setRequireValue("groupUserList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableLoadFactorsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at EditableLoadFactorsLV.pcf: line 20, column 35
    function action_2 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at EditableLoadFactorsLV.pcf: line 20, column 35
    function action_dest_3 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 27, column 42
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on AltUserCell (id=LoadFactor_User_Cell) at EditableLoadFactorsLV.pcf: line 20, column 35
    function valueRoot_5 () : java.lang.Object {
      return groupUser
    }
    
    // 'value' attribute on AltUserCell (id=LoadFactor_User_Cell) at EditableLoadFactorsLV.pcf: line 20, column 35
    function value_4 () : entity.User {
      return groupUser.User
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 27, column 42
    function value_7 () : java.lang.Integer {
      return groupUser.LoadFactor
    }
    
    property get groupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}