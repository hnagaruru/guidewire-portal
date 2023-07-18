package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_ProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_ProductsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_ProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_ProductsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_ProductsLV.pcf: line 29, column 40
    function sortValue_0 (product :  gw.api.productmodel.Product) : java.lang.Object {
      return product.DisplayName
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternDetail_ProductsLV.pcf: line 22, column 49
    function toRemove_4 (product :  gw.api.productmodel.Product) : void {
      formPattern.removeProduct(product)
    }
    
    // 'value' attribute on RowIterator at FormPatternDetail_ProductsLV.pcf: line 22, column 49
    function value_5 () : gw.api.productmodel.Product[] {
      return formPattern.Products
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_ProductsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternDetail_ProductsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_ProductsLV.pcf: line 29, column 40
    function valueRoot_2 () : java.lang.Object {
      return product
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_ProductsLV.pcf: line 29, column 40
    function value_1 () : java.lang.String {
      return product.DisplayName
    }
    
    property get product () : gw.api.productmodel.Product {
      return getIteratedValue(1) as gw.api.productmodel.Product
    }
    
    
  }
  
  
}