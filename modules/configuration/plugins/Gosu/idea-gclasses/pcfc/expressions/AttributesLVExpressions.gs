package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttributesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttributesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AttributesLV.pcf: line 27, column 35
    function sortValue_0 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AttributesLV.pcf: line 32, column 50
    function sortValue_1 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AttributesLV.pcf: line 36, column 42
    function sortValue_2 (attribute :  entity.Attribute) : java.lang.Object {
      return attribute.Description
    }
    
    // 'value' attribute on RowIterator at AttributesLV.pcf: line 19, column 76
    function value_14 () : gw.api.database.IQueryBeanResult<entity.Attribute> {
      return attributes
    }
    
    property get attributes () : gw.api.database.IQueryBeanResult<Attribute> {
      return getRequireValue("attributes", 0) as gw.api.database.IQueryBeanResult<Attribute>
    }
    
    property set attributes ($arg :  gw.api.database.IQueryBeanResult<Attribute>) {
      setRequireValue("attributes", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/AttributesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AttributesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AttributesLV.pcf: line 27, column 35
    function action_3 () : void {
      AttributeDetail.go(attribute)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AttributesLV.pcf: line 27, column 35
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AttributeDetail.createDestination(attribute)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AttributesLV.pcf: line 27, column 35
    function valueRoot_6 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AttributesLV.pcf: line 36, column 42
    function value_11 () : java.lang.String {
      return attribute.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AttributesLV.pcf: line 27, column 35
    function value_5 () : java.lang.String {
      return attribute.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AttributesLV.pcf: line 32, column 50
    function value_8 () : typekey.UserAttributeType {
      return attribute.Type
    }
    
    property get attribute () : entity.Attribute {
      return getIteratedValue(1) as entity.Attribute
    }
    
    
  }
  
  
}