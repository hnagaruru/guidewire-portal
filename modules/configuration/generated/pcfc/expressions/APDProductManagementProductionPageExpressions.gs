package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductManagementProductionPageExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductManagementProductionPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=APDProductManagementProductionPage) at APDProductManagementProductionPage.pcf: line 8, column 76
    static function canVisit_60 () : java.lang.Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign() and gw.api.system.PCDependenciesGateway.ServerMode.Production
    }
    
    // Page (id=APDProductManagementProductionPage) at APDProductManagementProductionPage.pcf: line 8, column 76
    static function parent_61 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.APDProductManagementProductionPage {
      return super.CurrentLocation as pcf.APDProductManagementProductionPage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 184, column 54
    function valueRoot_40 () : java.lang.Object {
      return installedProduct
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 184, column 54
    function value_39 () : java.lang.String {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementProductionPage.pcf: line 188, column 61
    function value_42 () : java.lang.String {
      return installedProduct.Description
    }
    
    property get installedProduct () : gw.api.productmodel.Product {
      return getIteratedValue(2) as gw.api.productmodel.Product
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 75, column 54
    function valueRoot_10 () : java.lang.Object {
      return installedProduct
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementProductionPage.pcf: line 79, column 61
    function value_12 () : java.lang.String {
      return installedProduct.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 75, column 54
    function value_9 () : java.lang.String {
      return installedProduct.Name
    }
    
    property get installedProduct () : gw.api.productmodel.Product {
      return getIteratedValue(2) as gw.api.productmodel.Product
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends APDProductManagementProductionPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ExternalManagedGenerateTemplate) at APDProductManagementProductionPage.pcf: line 208, column 108
    function action_47 () : void {
      gw.apd.model.generate.xml.ProductTemplateGenerator.downloadXml(productDetails.CodeIdentifier)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 184, column 54
    function sortValue_37 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementProductionPage.pcf: line 188, column 61
    function sortValue_38 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Description
    }
    
    // 'title' attribute on TitleBar (id=ExternalManagedProductDetailsTitle) at APDProductManagementProductionPage.pcf: line 201, column 52
    function title_46 () : java.lang.String {
      return productDetails.Name
    }
    
    // 'value' attribute on TextInput (id=ExternalManagedProductDetailsName_Input) at APDProductManagementProductionPage.pcf: line 222, column 56
    function valueRoot_49 () : java.lang.Object {
      return productDetails
    }
    
    // 'value' attribute on RowIterator (id=InstalledProduct) at APDProductManagementProductionPage.pcf: line 179, column 61
    function value_45 () : gw.api.productmodel.Product[] {
      return gw.apd.APDProductManagementPageHelper.getExternalManagedProducts(false)
    }
    
    // 'value' attribute on TextInput (id=ExternalManagedProductDetailsDescription_Input) at APDProductManagementProductionPage.pcf: line 226, column 63
    function value_51 () : java.lang.String {
      return productDetails.Description
    }
    
    // 'value' attribute on TextInput (id=ExternalManagedProductDetailsIdentifier_Input) at APDProductManagementProductionPage.pcf: line 230, column 66
    function value_54 () : java.lang.String {
      return productDetails.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=ExternalManagedProductDetailsAbbreviation_Input) at APDProductManagementProductionPage.pcf: line 234, column 64
    function value_57 () : java.lang.String {
      return productDetails.Abbreviation
    }
    
    property get productDetails () : gw.api.productmodel.Product {
      return getCurrentSelection(1) as gw.api.productmodel.Product
    }
    
    property set productDetails ($arg :  gw.api.productmodel.Product) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementProductionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDProductManagementProductionPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=GenerateTemplate) at APDProductManagementProductionPage.pcf: line 99, column 108
    function action_17 () : void {
      gw.apd.model.generate.xml.ProductTemplateGenerator.downloadXml(productDetails.CodeIdentifier)
    }
    
    // 'action' attribute on ToolbarButton (id=PreloadEditions) at APDProductManagementProductionPage.pcf: line 144, column 90
    function action_31 () : void {
      APDLoadEditionTemplatePopup.push(CurrentLocation, productDetails);  refreshTreePreloaded = true;
    }
    
    // 'action' attribute on ToolbarButton (id=ActivateEditions) at APDProductManagementProductionPage.pcf: line 150, column 203
    function action_33 () : void {
      gw.apd.model.InstalledEditionHelper.activatePreLoadedEditionsForProduct(productDetails, gw.plugin.util.CurrentUserUtil.CurrentUser.User.DisplayName, Date.CurrentDate); refreshTreeActivated = true; refreshTreePreloaded = true;
    }
    
    // 'available' attribute on ToolbarButton (id=ActivateEditions) at APDProductManagementProductionPage.pcf: line 150, column 203
    function available_32 () : java.lang.Boolean {
      return gw.apd.model.InstalledEditionHelper.enableActivateButtonForProduct(productDetails)
    }
    
    // 'def' attribute on PanelRef at APDProductManagementProductionPage.pcf: line 157, column 233
    function def_onEnter_35 (def :  pcf.APDInstalledEditionsPanelRow) : void {
      def.onEnter(installedEditionTreePreloaded, installedEditionTreeActivated, installedRuleTreePreloaded, installedRuleTreeActivated, invalidRulesPreloadedBoolean, invalidRulesActivatedBoolean)
    }
    
    // 'def' attribute on PanelRef at APDProductManagementProductionPage.pcf: line 157, column 233
    function def_refreshVariables_36 (def :  pcf.APDInstalledEditionsPanelRow) : void {
      def.refreshVariables(installedEditionTreePreloaded, installedEditionTreeActivated, installedRuleTreePreloaded, installedRuleTreeActivated, invalidRulesPreloadedBoolean, invalidRulesActivatedBoolean)
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 20, column 60
    function initialValue_0 () : gw.apd.APDInstalledEditionTreeHelper {
      return new gw.apd.APDInstalledEditionTreeHelper()
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 33, column 51
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      installedEditionTreeHelper.createPreloadedInstalledEditionAndInstalledRuleTree(productDetails, refreshTreePreloaded); refreshTreePreloaded = false; return installedEditionTreeHelper.InstalledEditionTreePreloaded
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 38, column 51
    function initialValue_2 () : gw.api.tree.RowTreeRootNode {
      installedEditionTreeHelper.createActivatedInstalledEditionAndInstalledRuleTree(productDetails, refreshTreeActivated); refreshTreeActivated= false; return installedEditionTreeHelper.InstalledEditionTreeActivated
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 43, column 51
    function initialValue_3 () : gw.api.tree.RowTreeRootNode {
      return installedEditionTreeHelper.InstalledRuleTreePreloaded
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 48, column 51
    function initialValue_4 () : gw.api.tree.RowTreeRootNode {
      return installedEditionTreeHelper.InstalledRuleTreeActivated
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 53, column 31
    function initialValue_5 () : Boolean {
      return installedEditionTreeHelper.InstalledRuleTreePreloadedContainsInvalidRules
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementProductionPage.pcf: line 58, column 31
    function initialValue_6 () : Boolean {
      return installedEditionTreeHelper.InstalledRuleTreeActivatedContainsInvalidRules
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementProductionPage.pcf: line 75, column 54
    function sortValue_7 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementProductionPage.pcf: line 79, column 61
    function sortValue_8 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Description
    }
    
    // 'title' attribute on TitleBar (id=ProductDetailsTitle) at APDProductManagementProductionPage.pcf: line 92, column 52
    function title_16 () : java.lang.String {
      return productDetails.Name
    }
    
    // 'title' attribute on TitleBar (id=InstalledEditionsTitle) at APDProductManagementProductionPage.pcf: line 138, column 110
    function title_30 () : java.lang.String {
      return DisplayKey.get("Web.APD.InstalledEditionsTitle", productDetails.Name)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ActivateEditions) at APDProductManagementProductionPage.pcf: line 150, column 203
    function tooltip_34 () : java.lang.String {
      return invalidRulesPreloadedBoolean ? DisplayKey.get("Web.APD.ActivateEditionsTooltip") : DisplayKey.get("Web.APD.ActivateEditionsTooltipWithInvalidRules")
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsName_Input) at APDProductManagementProductionPage.pcf: line 113, column 56
    function valueRoot_19 () : java.lang.Object {
      return productDetails
    }
    
    // 'value' attribute on RowIterator (id=InstalledProduct) at APDProductManagementProductionPage.pcf: line 70, column 61
    function value_15 () : gw.api.productmodel.Product[] {
      return gw.apd.APDProductManagementPageHelper.getExternalManagedProducts(true)
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsDescription_Input) at APDProductManagementProductionPage.pcf: line 117, column 63
    function value_21 () : java.lang.String {
      return productDetails.Description
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsIdentifier_Input) at APDProductManagementProductionPage.pcf: line 121, column 66
    function value_24 () : java.lang.String {
      return productDetails.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsAbbreviation_Input) at APDProductManagementProductionPage.pcf: line 125, column 64
    function value_27 () : java.lang.String {
      return productDetails.Abbreviation
    }
    
    property get installedEditionTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedEditionTreeActivated", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedEditionTreeActivated", 1, $arg)
    }
    
    property get installedEditionTreeHelper () : gw.apd.APDInstalledEditionTreeHelper {
      return getVariableValue("installedEditionTreeHelper", 1) as gw.apd.APDInstalledEditionTreeHelper
    }
    
    property set installedEditionTreeHelper ($arg :  gw.apd.APDInstalledEditionTreeHelper) {
      setVariableValue("installedEditionTreeHelper", 1, $arg)
    }
    
    property get installedEditionTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedEditionTreePreloaded", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedEditionTreePreloaded", 1, $arg)
    }
    
    property get installedRuleTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedRuleTreeActivated", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedRuleTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedRuleTreeActivated", 1, $arg)
    }
    
    property get installedRuleTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedRuleTreePreloaded", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedRuleTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedRuleTreePreloaded", 1, $arg)
    }
    
    property get invalidRulesActivatedBoolean () : Boolean {
      return getVariableValue("invalidRulesActivatedBoolean", 1) as Boolean
    }
    
    property set invalidRulesActivatedBoolean ($arg :  Boolean) {
      setVariableValue("invalidRulesActivatedBoolean", 1, $arg)
    }
    
    property get invalidRulesPreloadedBoolean () : Boolean {
      return getVariableValue("invalidRulesPreloadedBoolean", 1) as Boolean
    }
    
    property set invalidRulesPreloadedBoolean ($arg :  Boolean) {
      setVariableValue("invalidRulesPreloadedBoolean", 1, $arg)
    }
    
    property get productDetails () : gw.api.productmodel.Product {
      return getCurrentSelection(1) as gw.api.productmodel.Product
    }
    
    property set productDetails ($arg :  gw.api.productmodel.Product) {
      setCurrentSelection(1, $arg)
    }
    
    property get refreshTreeActivated () : Boolean {
      return getVariableValue("refreshTreeActivated", 1) as Boolean
    }
    
    property set refreshTreeActivated ($arg :  Boolean) {
      setVariableValue("refreshTreeActivated", 1, $arg)
    }
    
    property get refreshTreePreloaded () : Boolean {
      return getVariableValue("refreshTreePreloaded", 1) as Boolean
    }
    
    property set refreshTreePreloaded ($arg :  Boolean) {
      setVariableValue("refreshTreePreloaded", 1, $arg)
    }
    
    
  }
  
  
}