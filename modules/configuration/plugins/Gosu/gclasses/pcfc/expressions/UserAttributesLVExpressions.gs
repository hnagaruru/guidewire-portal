package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserAttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserAttributesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserAttributesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'validationExpression' attribute on TextCell (id=Name_Cell) at UserAttributesLV.pcf: line 28, column 45
    function validationExpression_4 () : java.lang.Object {
      return gw.web.admin.UserUIHelper.verifyAttributeNameIsUnique(attribute, user.Attributes.toList())
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesLV.pcf: line 28, column 45
    function valueRoot_6 () : java.lang.Object {
      return attribute.Attribute
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at UserAttributesLV.pcf: line 37, column 50
    function value_12 () : typekey.UserAttributeType {
      return attribute.Attribute.Type
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesLV.pcf: line 28, column 45
    function value_5 () : java.lang.String {
      return attribute.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAttributesLV.pcf: line 32, column 52
    function value_9 () : java.lang.String {
      return attribute.Attribute.Description
    }
    
    property get attribute () : entity.AttributeUser {
      return getIteratedValue(1) as entity.AttributeUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserAttributesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at UserAttributesLV.pcf: line 22, column 42
    function conversionExpression_3 (PickedValue :  Attribute[]) : entity.AttributeUser[] {
      return gw.api.admin.UserAttributeUtil.createAttributeUsers(PickedValue, CurrentLocation)
    }
    
    // 'pickLocation' attribute on RowIterator at UserAttributesLV.pcf: line 22, column 42
    function pickLocation_15 () : void {
      UserAttributesPopup.push()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesLV.pcf: line 28, column 45
    function sortValue_0 (attribute :  entity.AttributeUser) : java.lang.Object {
      return attribute.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAttributesLV.pcf: line 32, column 52
    function sortValue_1 (attribute :  entity.AttributeUser) : java.lang.Object {
      return attribute.Attribute.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at UserAttributesLV.pcf: line 37, column 50
    function sortValue_2 (attribute :  entity.AttributeUser) : java.lang.Object {
      return attribute.Attribute.Type
    }
    
    // 'toAdd' attribute on RowIterator at UserAttributesLV.pcf: line 22, column 42
    function toAdd_16 (attribute :  entity.AttributeUser) : void {
      user.addToAttributes(attribute)
    }
    
    // 'toRemove' attribute on RowIterator at UserAttributesLV.pcf: line 22, column 42
    function toRemove_17 (attribute :  entity.AttributeUser) : void {
      user.removeFromAttributes(attribute)
    }
    
    // 'value' attribute on RowIterator at UserAttributesLV.pcf: line 22, column 42
    function value_18 () : entity.AttributeUser[] {
      return user.Attributes
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}