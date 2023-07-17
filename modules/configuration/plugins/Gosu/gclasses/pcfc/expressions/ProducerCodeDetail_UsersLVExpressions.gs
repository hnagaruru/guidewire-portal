package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_UsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeDetail_UsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_UsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducerCodeDetail_UsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function action_1 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function action_3 () : void {
      UserDetailPage.go(user)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function action_dest_4 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(user)
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function value_5 () : entity.User {
      return user
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_UsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeDetail_UsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at ProducerCodeDetail_UsersLV.pcf: line 20, column 25
    function sortValue_0 (user :  entity.User) : java.lang.Object {
      return user
    }
    
    // 'value' attribute on RowIterator at ProducerCodeDetail_UsersLV.pcf: line 14, column 33
    function value_7 () : entity.User[] {
      return producerCode.AllUsers
    }
    
    property get producerCode () : ProducerCode {
      return getRequireValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setRequireValue("producerCode", 0, $arg)
    }
    
    
  }
  
  
}