package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDLoadProductTemplatePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDLoadProductTemplatePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 3
    }
    
    static function __constructorIndex (existingVisualizedProduct :  APDProduct) : int {
      return 1
    }
    
    static function __constructorIndex (account :  Account, selectionOfProducer :  ProducerSelection) : int {
      return 0
    }
    
    static function __constructorIndex (existingInstalledProduct :  gw.api.productmodel.Product) : int {
      return 2
    }
    
    // 'afterCommit' attribute on Popup (id=APDLoadProductTemplatePopup) at APDLoadProductTemplatePopup.pcf: line 12, column 65
    function afterCommit_11 (TopLocation :  pcf.api.Location) : void {
      if (account != null) xmlImportHelper.NewProduct.createSubmission(account, selectionOfProducer)
    }
    
    // 'beforeCommit' attribute on Popup (id=APDLoadProductTemplatePopup) at APDLoadProductTemplatePopup.pcf: line 12, column 65
    function beforeCommit_12 (pickedValue :  java.lang.Object) : void {
      xmlImportHelper.importProduct()
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 59, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      xmlImportHelper.XMLFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at APDLoadProductTemplatePopup.pcf: line 36, column 20
    function initialValue_0 () : User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at APDLoadProductTemplatePopup.pcf: line 40, column 58
    function initialValue_1 () : gw.apd.model.export.APDProductImportHelper {
      if (account != null) { return new gw.apd.model.export.APDProductImportHelper(account) } else if (existingVisualizedProduct != null) { return new gw.apd.model.export.APDProductImportHelper(existingVisualizedProduct) } else if (existingInstalledProduct != null) { return new gw.apd.model.export.APDProductImportHelper(existingInstalledProduct) } else { return new gw.apd.model.export.APDProductImportHelper() }
    }
    
    // EditButtons at APDLoadProductTemplatePopup.pcf: line 43, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on AlertBar (id=AlertBar) at APDLoadProductTemplatePopup.pcf: line 48, column 57
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.APD.SharedLineWarningMessageOnImport", xmlImportHelper.XMLFile.Name)
    }
    
    // 'validationExpression' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 59, column 46
    function validationExpression_5 () : java.lang.Object {
      return xmlImportHelper.validateXML()
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 59, column 46
    function valueRoot_8 () : java.lang.Object {
      return xmlImportHelper
    }
    
    // 'value' attribute on FileInput (id=ProductTemplate_Input) at APDLoadProductTemplatePopup.pcf: line 59, column 46
    function value_6 () : gw.api.web.WebFile {
      return xmlImportHelper.XMLFile
    }
    
    // 'visible' attribute on AlertBar (id=AlertBar) at APDLoadProductTemplatePopup.pcf: line 48, column 57
    function visible_3 () : java.lang.Boolean {
      return xmlImportHelper.XMLFile.Name != null
    }
    
    override property get CurrentLocation () : pcf.APDLoadProductTemplatePopup {
      return super.CurrentLocation as pcf.APDLoadProductTemplatePopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get currentUser () : User {
      return getVariableValue("currentUser", 0) as User
    }
    
    property set currentUser ($arg :  User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get existingInstalledProduct () : gw.api.productmodel.Product {
      return getVariableValue("existingInstalledProduct", 0) as gw.api.productmodel.Product
    }
    
    property set existingInstalledProduct ($arg :  gw.api.productmodel.Product) {
      setVariableValue("existingInstalledProduct", 0, $arg)
    }
    
    property get existingVisualizedProduct () : APDProduct {
      return getVariableValue("existingVisualizedProduct", 0) as APDProduct
    }
    
    property set existingVisualizedProduct ($arg :  APDProduct) {
      setVariableValue("existingVisualizedProduct", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    property get xmlImportHelper () : gw.apd.model.export.APDProductImportHelper {
      return getVariableValue("xmlImportHelper", 0) as gw.apd.model.export.APDProductImportHelper
    }
    
    property set xmlImportHelper ($arg :  gw.apd.model.export.APDProductImportHelper) {
      setVariableValue("xmlImportHelper", 0, $arg)
    }
    
    
  }
  
  
}