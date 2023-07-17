package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCovTermPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCovTermPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formPattern :  FormPattern) : int {
      return 0
    }
    
    // EditButtons at FormPatternCovTermPopup.pcf: line 24, column 34
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermPopup.pcf: line 40, column 44
    function sortValue_1 (covTermPattern :  gw.api.productmodel.CovTermPattern) : java.lang.Object {
      return covTermPattern.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermPopup.pcf: line 44, column 51
    function sortValue_2 (covTermPattern :  gw.api.productmodel.CovTermPattern) : java.lang.Object {
      return covTermPattern.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermPopup.pcf: line 48, column 48
    function sortValue_3 (covTermPattern :  gw.api.productmodel.CovTermPattern) : java.lang.Object {
      return covTermPattern.PublicID
    }
    
    // 'value' attribute on RowIterator (id=CovTermPatternIterator) at FormPatternCovTermPopup.pcf: line 35, column 60
    function value_14 () : gw.api.productmodel.CovTermPattern[] {
      return formPattern.AvailableFormPatternCovTerms
    }
    
    override property get CurrentLocation () : pcf.FormPatternCovTermPopup {
      return super.CurrentLocation as pcf.FormPatternCovTermPopup
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCovTermPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator (id=CovTermPatternIterator) at FormPatternCovTermPopup.pcf: line 35, column 60
    function pickValue_13 () : gw.api.productmodel.CovTermPattern {
      return covTermPattern
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermPopup.pcf: line 40, column 44
    function valueRoot_5 () : java.lang.Object {
      return covTermPattern
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermPopup.pcf: line 48, column 48
    function value_10 () : java.lang.String {
      return covTermPattern.PublicID
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermPopup.pcf: line 40, column 44
    function value_4 () : java.lang.String {
      return covTermPattern.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermPopup.pcf: line 44, column 51
    function value_7 () : java.lang.String {
      return covTermPattern.Description
    }
    
    property get covTermPattern () : gw.api.productmodel.CovTermPattern {
      return getIteratedValue(1) as gw.api.productmodel.CovTermPattern
    }
    
    
  }
  
  
}