package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDValidationResultsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDValidationResultsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDValidationResultsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDValidationResultsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (helper :  gw.apd.model.generate.ProductGeneratorHelper) : int {
      return 0
    }
    
    // RowTree at APDValidationResultsPopup.pcf: line 19, column 38
    function containerLabel_9 (item :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'value' attribute on TextCell (id=ElementName_Cell) at APDValidationResultsPopup.pcf: line 24, column 125
    function sortValue_0 (item :  gw.xml.XMLNode) : java.lang.Object {
      return {"WARNING","ERROR"}.contains(item.ElementName) ? "" : item.ElementName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDValidationResultsPopup.pcf: line 36, column 65
    function sortValue_1 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'title' attribute on Popup (id=APDValidationResultsPopup) at APDValidationResultsPopup.pcf: line 8, column 137
    static function title_10 (helper :  gw.apd.model.generate.ProductGeneratorHelper) : java.lang.Object {
      return helper.IsValid ? helper.Title : DisplayKey.get("Web.APDProduct.ProductLineValidationResults.Title", helper.Title)
    }
    
    // 'value' attribute on RowTree at APDValidationResultsPopup.pcf: line 19, column 38
    function value_8 () : java.lang.Object {
      return helper.ProductTree
    }
    
    override property get CurrentLocation () : pcf.APDValidationResultsPopup {
      return super.CurrentLocation as pcf.APDValidationResultsPopup
    }
    
    property get helper () : gw.apd.model.generate.ProductGeneratorHelper {
      return getVariableValue("helper", 0) as gw.apd.model.generate.ProductGeneratorHelper
    }
    
    property set helper ($arg :  gw.apd.model.generate.ProductGeneratorHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDValidationResultsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends APDValidationResultsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=ValidityIcon_Cell) at APDValidationResultsPopup.pcf: line 32, column 29
    function iconColor_5 () : gw.api.web.color.GWColor {
      return helper.getValidityIcon(item).Second
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ValidityIcon_Cell) at APDValidationResultsPopup.pcf: line 32, column 29
    function icon_4 () : java.lang.String {
      return helper.getValidityIcon(item).First
    }
    
    // 'value' attribute on TextCell (id=ElementName_Cell) at APDValidationResultsPopup.pcf: line 24, column 125
    function value_2 () : java.lang.String {
      return {"WARNING","ERROR"}.contains(item.ElementName) ? "" : item.ElementName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDValidationResultsPopup.pcf: line 36, column 65
    function value_6 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  
}