package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserAttributesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserAttributesSearchLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserAttributesSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesSearchLV.pcf: line 24, column 35
    function valueRoot_4 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesSearchLV.pcf: line 24, column 35
    function value_3 () : java.lang.String {
      return attribute.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAttributesSearchLV.pcf: line 28, column 42
    function value_6 () : java.lang.String {
      return attribute.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at UserAttributesSearchLV.pcf: line 33, column 50
    function value_9 () : typekey.UserAttributeType {
      return attribute.Type
    }
    
    property get attribute () : entity.Attribute {
      return getIteratedValue(1) as entity.Attribute
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserAttributesSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserAttributesSearchLV.pcf: line 24, column 35
    function sortValue_0 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserAttributesSearchLV.pcf: line 28, column 42
    function sortValue_1 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at UserAttributesSearchLV.pcf: line 33, column 50
    function sortValue_2 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Type
    }
    
    // 'value' attribute on RowIterator at UserAttributesSearchLV.pcf: line 19, column 76
    function value_12 () : gw.api.database.IQueryBeanResult<entity.Attribute> {
      return searchResult
    }
    
    property get searchResult () : gw.api.database.IQueryBeanResult<Attribute> {
      return getRequireValue("searchResult", 0) as gw.api.database.IQueryBeanResult<Attribute>
    }
    
    property set searchResult ($arg :  gw.api.database.IQueryBeanResult<Attribute>) {
      setRequireValue("searchResult", 0, $arg)
    }
    
    
  }
  
  
}