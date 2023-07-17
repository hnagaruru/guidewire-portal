package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCoverablePropertyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCoverablePropertyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formPattern :  FormPattern) : int {
      return 0
    }
    
    // EditButtons at FormPatternCoverablePropertyPopup.pcf: line 24, column 34
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyPopup.pcf: line 40, column 42
    function sortValue_1 (propertyInfo :  gw.lang.reflect.IPropertyInfo) : java.lang.Object {
      return propertyInfo.Name
    }
    
    // 'value' attribute on TextCell (id=DataType_Cell) at FormPatternCoverablePropertyPopup.pcf: line 44, column 62
    function sortValue_2 (propertyInfo :  gw.lang.reflect.IPropertyInfo) : java.lang.Object {
      return propertyInfo.FeatureType.RelativeName
    }
    
    // 'value' attribute on RowIterator (id=PropertyInfoIterator) at FormPatternCoverablePropertyPopup.pcf: line 35, column 55
    function value_10 () : gw.lang.reflect.IPropertyInfo[] {
      return formPattern.AvailableFormPatternCoverableProperties
    }
    
    override property get CurrentLocation () : pcf.FormPatternCoverablePropertyPopup {
      return super.CurrentLocation as pcf.FormPatternCoverablePropertyPopup
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCoverablePropertyPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator (id=PropertyInfoIterator) at FormPatternCoverablePropertyPopup.pcf: line 35, column 55
    function pickValue_9 () : gw.lang.reflect.IPropertyInfo {
      return propertyInfo
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyPopup.pcf: line 40, column 42
    function valueRoot_4 () : java.lang.Object {
      return propertyInfo
    }
    
    // 'value' attribute on TextCell (id=DataType_Cell) at FormPatternCoverablePropertyPopup.pcf: line 44, column 62
    function valueRoot_7 () : java.lang.Object {
      return propertyInfo.FeatureType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyPopup.pcf: line 40, column 42
    function value_3 () : java.lang.String {
      return propertyInfo.Name
    }
    
    // 'value' attribute on TextCell (id=DataType_Cell) at FormPatternCoverablePropertyPopup.pcf: line 44, column 62
    function value_6 () : java.lang.String {
      return propertyInfo.FeatureType.RelativeName
    }
    
    property get propertyInfo () : gw.lang.reflect.IPropertyInfo {
      return getIteratedValue(1) as gw.lang.reflect.IPropertyInfo
    }
    
    
  }
  
  
}