package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupProductsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupProductsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AffinityGroupProductsLV.pcf: line 30, column 53
    function sortValue_0 (AffinityGroupProduct :  entity.AffinityGroupProduct) : java.lang.Object {
      return AffinityGroupProduct.ProductCode
    }
    
    // 'toRemove' attribute on RowIterator at AffinityGroupProductsLV.pcf: line 21, column 49
    function toRemove_5 (AffinityGroupProduct :  entity.AffinityGroupProduct) : void {
      affinityGroup.removeFromProducts(AffinityGroupProduct)
    }
    
    // 'value' attribute on RowIterator at AffinityGroupProductsLV.pcf: line 21, column 49
    function value_6 () : entity.AffinityGroupProduct[] {
      return affinityGroup.Products
    }
    
    property get affinityGroup () : AffinityGroup {
      return getRequireValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setRequireValue("affinityGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AffinityGroupProductsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextCell (id=Product_Cell) at AffinityGroupProductsLV.pcf: line 30, column 53
    function outputConversion_1 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.ProductLookup.getByPublicID(VALUE).DisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AffinityGroupProductsLV.pcf: line 30, column 53
    function valueRoot_3 () : java.lang.Object {
      return AffinityGroupProduct
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AffinityGroupProductsLV.pcf: line 30, column 53
    function value_2 () : java.lang.String {
      return AffinityGroupProduct.ProductCode
    }
    
    property get AffinityGroupProduct () : entity.AffinityGroupProduct {
      return getIteratedValue(1) as entity.AffinityGroupProduct
    }
    
    
  }
  
  
}