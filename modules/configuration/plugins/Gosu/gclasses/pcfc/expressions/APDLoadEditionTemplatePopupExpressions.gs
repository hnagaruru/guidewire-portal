package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadEditionTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDLoadEditionTemplatePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadEditionTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDLoadEditionTemplatePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (entryLocation :  pcf.api.Location, product :  gw.api.productmodel.Product) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=APDLoadEditionTemplatePopup) at APDLoadEditionTemplatePopup.pcf: line 12, column 65
    function afterCommit_10 (TopLocation :  pcf.api.Location) : void {
      if (importedEditions*.Rules.where(\r -> not r.Valid).Count > 0) {gw.api.web.PebblesUtil.addUserDisplayableWebMessages(entryLocation, DisplayKey.get("Web.APD.ImportedEditionsContainsInvalidRules"))} else {gw.api.admin.PCAdminUtil.clearMessages(entryLocation)}
    }
    
    // 'beforeCommit' attribute on Popup (id=APDLoadEditionTemplatePopup) at APDLoadEditionTemplatePopup.pcf: line 12, column 65
    function beforeCommit_11 (pickedValue :  java.lang.Object) : void {
      importedEditions = xmlImportHelper.buildInstalledEditions(product)
    }
    
    // 'value' attribute on FileInput (id=EditionTemplate_Input) at APDLoadEditionTemplatePopup.pcf: line 46, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      xmlImportHelper.XMLFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at APDLoadEditionTemplatePopup.pcf: line 18, column 59
    function initialValue_0 () : gw.apd.model.export.APDEditionsImportHelper {
      return new gw.apd.model.export.APDEditionsImportHelper()
    }
    
    // 'initialValue' attribute on Variable at APDLoadEditionTemplatePopup.pcf: line 22, column 50
    function initialValue_1 () : Collection<InstalledEdition> {
      return {}
    }
    
    // EditButtons at APDLoadEditionTemplatePopup.pcf: line 31, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on AlertBar (id=AlertBar) at APDLoadEditionTemplatePopup.pcf: line 35, column 93
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APD.SharedLineWarningMessage", product.Name)
    }
    
    // 'validationExpression' attribute on FileInput (id=EditionTemplate_Input) at APDLoadEditionTemplatePopup.pcf: line 46, column 46
    function validationExpression_4 () : java.lang.Object {
      return xmlImportHelper.validateXML()
    }
    
    // 'value' attribute on FileInput (id=EditionTemplate_Input) at APDLoadEditionTemplatePopup.pcf: line 46, column 46
    function valueRoot_7 () : java.lang.Object {
      return xmlImportHelper
    }
    
    // 'value' attribute on FileInput (id=EditionTemplate_Input) at APDLoadEditionTemplatePopup.pcf: line 46, column 46
    function value_5 () : gw.api.web.WebFile {
      return xmlImportHelper.XMLFile
    }
    
    override property get CurrentLocation () : pcf.APDLoadEditionTemplatePopup {
      return super.CurrentLocation as pcf.APDLoadEditionTemplatePopup
    }
    
    property get entryLocation () : pcf.api.Location {
      return getVariableValue("entryLocation", 0) as pcf.api.Location
    }
    
    property set entryLocation ($arg :  pcf.api.Location) {
      setVariableValue("entryLocation", 0, $arg)
    }
    
    property get importedEditions () : Collection<InstalledEdition> {
      return getVariableValue("importedEditions", 0) as Collection<InstalledEdition>
    }
    
    property set importedEditions ($arg :  Collection<InstalledEdition>) {
      setVariableValue("importedEditions", 0, $arg)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getVariableValue("product", 0) as gw.api.productmodel.Product
    }
    
    property set product ($arg :  gw.api.productmodel.Product) {
      setVariableValue("product", 0, $arg)
    }
    
    property get xmlImportHelper () : gw.apd.model.export.APDEditionsImportHelper {
      return getVariableValue("xmlImportHelper", 0) as gw.apd.model.export.APDEditionsImportHelper
    }
    
    property set xmlImportHelper ($arg :  gw.apd.model.export.APDEditionsImportHelper) {
      setVariableValue("xmlImportHelper", 0, $arg)
    }
    
    
  }
  
  
}