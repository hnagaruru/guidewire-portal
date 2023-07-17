package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductManagementPageExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductManagementPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=APDProductManagementPage) at APDProductManagementPage.pcf: line 8, column 76
    static function canVisit_118 () : java.lang.Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign() and gw.api.system.PCDependenciesGateway.ServerMode.Dev
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 12, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // Page (id=APDProductManagementPage) at APDProductManagementPage.pcf: line 8, column 76
    static function parent_119 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.APDProductManagementPage {
      return super.CurrentLocation as pcf.APDProductManagementPage
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 214, column 57
    function action_62 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 219, column 66
    function action_67 () : void {
      ContactForward.go(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'action' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 214, column 57
    function action_dest_63 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 219, column 66
    function action_dest_68 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 214, column 57
    function valueRoot_65 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 223, column 81
    function valueRoot_73 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 214, column 57
    function value_64 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 219, column 66
    function value_69 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 223, column 81
    function value_72 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubStatus_Cell) at APDProductManagementPage.pcf: line 227, column 61
    function value_75 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    property get submission () : Submission {
      return getIteratedValue(2) as Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 336, column 54
    function valueRoot_98 () : java.lang.Object {
      return installedProduct
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 340, column 61
    function value_100 () : java.lang.String {
      return installedProduct.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 336, column 54
    function value_97 () : java.lang.String {
      return installedProduct.Name
    }
    
    property get installedProduct () : gw.api.productmodel.Product {
      return getIteratedValue(2) as gw.api.productmodel.Product
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 48, column 51
    function valueRoot_13 () : java.lang.Object {
      return manualProduct
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 48, column 51
    function value_12 () : java.lang.String {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 52, column 58
    function value_15 () : java.lang.String {
      return manualProduct.Description
    }
    
    // 'value' attribute on BooleanRadioCell (id=Installed_Cell) at APDProductManagementPage.pcf: line 59, column 56
    function value_18 () : java.lang.Boolean {
      return manualProduct.Installed
    }
    
    // 'value' attribute on DateCell (id=DateInstalled_Cell) at APDProductManagementPage.pcf: line 63, column 60
    function value_21 () : java.util.Date {
      return manualProduct.DateInstalled
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at APDProductManagementPage.pcf: line 69, column 58
    function value_24 () : java.util.Date {
      return manualProduct.DateUpdated
    }
    
    property get manualProduct () : gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper {
      return getIteratedValue(2) as gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends APDProductManagementPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=GenerateTemplate) at APDProductManagementPage.pcf: line 360, column 108
    function action_105 () : void {
      gw.apd.model.generate.xml.ProductTemplateGenerator.downloadXml(productDetails.CodeIdentifier)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 336, column 54
    function sortValue_95 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 340, column 61
    function sortValue_96 (installedProduct :  gw.api.productmodel.Product) : java.lang.Object {
      return installedProduct.Description
    }
    
    // 'title' attribute on TitleBar (id=ProductDetailsTitle) at APDProductManagementPage.pcf: line 353, column 52
    function title_104 () : java.lang.String {
      return productDetails.Name
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsName_Input) at APDProductManagementPage.pcf: line 374, column 56
    function valueRoot_107 () : java.lang.Object {
      return productDetails
    }
    
    // 'value' attribute on RowIterator (id=InstalledProduct) at APDProductManagementPage.pcf: line 331, column 61
    function value_103 () : gw.api.productmodel.Product[] {
      return gw.apd.APDProductManagementPageHelper.getExternalManagedProducts(false)
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsDescription_Input) at APDProductManagementPage.pcf: line 378, column 63
    function value_109 () : java.lang.String {
      return productDetails.Description
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsIdentifier_Input) at APDProductManagementPage.pcf: line 382, column 66
    function value_112 () : java.lang.String {
      return productDetails.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=ProductDetailsAbbreviation_Input) at APDProductManagementPage.pcf: line 386, column 64
    function value_115 () : java.lang.String {
      return productDetails.Abbreviation
    }
    
    property get productDetails () : gw.api.productmodel.Product {
      return getCurrentSelection(1) as gw.api.productmodel.Product
    }
    
    property set productDetails ($arg :  gw.api.productmodel.Product) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDProductManagementPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromXmind) at APDProductManagementPage.pcf: line 26, column 86
    function action_1 () : void {
      APDLoadXmindPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromTemplate) at APDProductManagementPage.pcf: line 30, column 89
    function action_3 () : void {
      APDLoadProductTemplatePopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=NewProduct) at APDProductManagementPage.pcf: line 34, column 84
    function action_5 () : void {
      APDNewProductPopup.push(null, null)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromXmind) at APDProductManagementPage.pcf: line 26, column 86
    function action_dest_2 () : pcf.api.Destination {
      return pcf.APDLoadXmindPopup.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=ImportFromTemplate) at APDProductManagementPage.pcf: line 30, column 89
    function action_dest_4 () : pcf.api.Destination {
      return pcf.APDLoadProductTemplatePopup.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=NewProduct) at APDProductManagementPage.pcf: line 34, column 84
    function action_dest_6 () : pcf.api.Destination {
      return pcf.APDNewProductPopup.createDestination(null, null)
    }
    
    // 'value' attribute on DateCell (id=DateInstalled_Cell) at APDProductManagementPage.pcf: line 63, column 60
    function sortValue_10 (manualProduct :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) : java.lang.Object {
      return manualProduct.DateInstalled
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at APDProductManagementPage.pcf: line 69, column 58
    function sortValue_11 (manualProduct :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) : java.lang.Object {
      return manualProduct.DateUpdated
    }
    
    // 'value' attribute on TextCell (id=SubNumber_Cell) at APDProductManagementPage.pcf: line 214, column 57
    function sortValue_58 (submission :  Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubPrimaryInsured_Cell) at APDProductManagementPage.pcf: line 219, column 66
    function sortValue_59 (submission :  Submission) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=SubEffDate_Cell) at APDProductManagementPage.pcf: line 223, column 81
    function sortValue_60 (submission :  Submission) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubStatus_Cell) at APDProductManagementPage.pcf: line 227, column 61
    function sortValue_61 (submission :  Submission) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductManagementPage.pcf: line 48, column 51
    function sortValue_7 (manualProduct :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) : java.lang.Object {
      return manualProduct.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductManagementPage.pcf: line 52, column 58
    function sortValue_8 (manualProduct :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) : java.lang.Object {
      return manualProduct.Description
    }
    
    // 'value' attribute on BooleanRadioCell (id=Installed_Cell) at APDProductManagementPage.pcf: line 59, column 56
    function sortValue_9 (manualProduct :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) : java.lang.Object {
      return manualProduct.Installed
    }
    
    // 'title' attribute on TitleBar (id=ProductSubmissionsTitle) at APDProductManagementPage.pcf: line 201, column 128
    function title_57 () : java.lang.String {
      return DisplayKey.get("Web.APDProductManagementPage.SubmissionLV.Title", selectedProduct.Name)
    }
    
    // 'value' attribute on RowIterator (id=manualProduct) at APDProductManagementPage.pcf: line 43, column 103
    function value_27 () : gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper[] {
      return gw.apd.APDProductManagementPageHelper.getApdManagedProducts()
    }
    
    // 'value' attribute on RowIterator at APDProductManagementPage.pcf: line 208, column 86
    function value_78 () : gw.api.database.IQueryBeanResult<Submission> {
      return selectedProduct.getSubmissions()
    }
    
    // 'visible' attribute on Card (id=selectedProduct) at APDProductManagementPage.pcf: line 78, column 51
    function visible_56 () : java.lang.Boolean {
      return selectedProduct != null
    }
    
    // 'visible' attribute on Card (id=ProductInstalledEditions) at APDProductManagementPage.pcf: line 236, column 81
    function visible_94 () : java.lang.Boolean {
      return selectedProduct != null and selectedProduct.Installed
    }
    
    property get selectedProduct () : gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper {
      return getCurrentSelection(1) as gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper
    }
    
    property set selectedProduct ($arg :  gw.apd.APDProductManagementPageHelper.ProductManagementDisplayWrapper) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelSet2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PreloadEditions) at APDProductManagementPage.pcf: line 295, column 92
    function action_89 () : void {
      APDLoadEditionTemplatePopup.push(CurrentLocation, installedProduct); refreshTreePreloaded = true;
    }
    
    // 'action' attribute on ToolbarButton (id=ActivateEditions) at APDProductManagementPage.pcf: line 301, column 96
    function action_91 () : void {
      gw.apd.model.InstalledEditionHelper.activatePreLoadedEditionsForProduct(installedProduct, gw.plugin.util.CurrentUserUtil.CurrentUser.User.DisplayName, Date.CurrentDate); refreshTreeActivated = true; refreshTreePreloaded = true;
    }
    
    // 'available' attribute on ToolbarButton (id=ActivateEditions) at APDProductManagementPage.pcf: line 301, column 96
    function available_90 () : java.lang.Boolean {
      return gw.apd.model.InstalledEditionHelper.enableActivateButtonForProduct(installedProduct)
    }
    
    // 'def' attribute on PanelRef at APDProductManagementPage.pcf: line 308, column 235
    function def_onEnter_92 (def :  pcf.APDInstalledEditionsPanelRow) : void {
      def.onEnter(installedEditionTreePreloaded, installedEditionTreeActivated, installedRuleTreePreloaded, installedRuleTreeActivated, invalidRulesPreloadedBoolean, invalidRulesActivatedBoolean)
    }
    
    // 'def' attribute on PanelRef at APDProductManagementPage.pcf: line 308, column 235
    function def_refreshVariables_93 (def :  pcf.APDInstalledEditionsPanelRow) : void {
      def.refreshVariables(installedEditionTreePreloaded, installedEditionTreeActivated, installedRuleTreePreloaded, installedRuleTreeActivated, invalidRulesPreloadedBoolean, invalidRulesActivatedBoolean)
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 242, column 57
    function initialValue_80 () : gw.api.productmodel.Product {
      return selectedProduct == null ? null : selectedProduct.getInstalledProduct()
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 246, column 66
    function initialValue_81 () : gw.apd.APDInstalledEditionTreeHelper {
      return new gw.apd.APDInstalledEditionTreeHelper()
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 259, column 57
    function initialValue_82 () : gw.api.tree.RowTreeRootNode {
      installedEditionTreeHelper.createPreloadedInstalledEditionAndInstalledRuleTree(installedProduct, refreshTreePreloaded); refreshTreePreloaded = false; return installedEditionTreeHelper.InstalledEditionTreePreloaded
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 264, column 57
    function initialValue_83 () : gw.api.tree.RowTreeRootNode {
      installedEditionTreeHelper.createActivatedInstalledEditionAndInstalledRuleTree(installedProduct, refreshTreeActivated); refreshTreeActivated= false; return installedEditionTreeHelper.InstalledEditionTreeActivated
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 269, column 57
    function initialValue_84 () : gw.api.tree.RowTreeRootNode {
      return installedEditionTreeHelper.InstalledRuleTreePreloaded
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 274, column 57
    function initialValue_85 () : gw.api.tree.RowTreeRootNode {
      return installedEditionTreeHelper.InstalledRuleTreeActivated
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 279, column 37
    function initialValue_86 () : Boolean {
      return installedEditionTreeHelper.InstalledRuleTreePreloadedContainsInvalidRules
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 284, column 37
    function initialValue_87 () : Boolean {
      return installedEditionTreeHelper.InstalledRuleTreeActivatedContainsInvalidRules
    }
    
    // 'title' attribute on TitleBar (id=InstalledEditionsTitle) at APDProductManagementPage.pcf: line 289, column 113
    function title_88 () : java.lang.String {
      return DisplayKey.get("Web.APD.InstalledEditionsTitle", selectedProduct.Name)
    }
    
    property get installedEditionTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedEditionTreeActivated", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedEditionTreeActivated", 2, $arg)
    }
    
    property get installedEditionTreeHelper () : gw.apd.APDInstalledEditionTreeHelper {
      return getVariableValue("installedEditionTreeHelper", 2) as gw.apd.APDInstalledEditionTreeHelper
    }
    
    property set installedEditionTreeHelper ($arg :  gw.apd.APDInstalledEditionTreeHelper) {
      setVariableValue("installedEditionTreeHelper", 2, $arg)
    }
    
    property get installedEditionTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedEditionTreePreloaded", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedEditionTreePreloaded", 2, $arg)
    }
    
    property get installedProduct () : gw.api.productmodel.Product {
      return getVariableValue("installedProduct", 2) as gw.api.productmodel.Product
    }
    
    property set installedProduct ($arg :  gw.api.productmodel.Product) {
      setVariableValue("installedProduct", 2, $arg)
    }
    
    property get installedRuleTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedRuleTreeActivated", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedRuleTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedRuleTreeActivated", 2, $arg)
    }
    
    property get installedRuleTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("installedRuleTreePreloaded", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedRuleTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("installedRuleTreePreloaded", 2, $arg)
    }
    
    property get invalidRulesActivatedBoolean () : Boolean {
      return getVariableValue("invalidRulesActivatedBoolean", 2) as Boolean
    }
    
    property set invalidRulesActivatedBoolean ($arg :  Boolean) {
      setVariableValue("invalidRulesActivatedBoolean", 2, $arg)
    }
    
    property get invalidRulesPreloadedBoolean () : Boolean {
      return getVariableValue("invalidRulesPreloadedBoolean", 2) as Boolean
    }
    
    property set invalidRulesPreloadedBoolean ($arg :  Boolean) {
      setVariableValue("invalidRulesPreloadedBoolean", 2, $arg)
    }
    
    property get refreshTreeActivated () : Boolean {
      return getVariableValue("refreshTreeActivated", 2) as Boolean
    }
    
    property set refreshTreeActivated ($arg :  Boolean) {
      setVariableValue("refreshTreeActivated", 2, $arg)
    }
    
    property get refreshTreePreloaded () : Boolean {
      return getVariableValue("refreshTreePreloaded", 2) as Boolean
    }
    
    property set refreshTreePreloaded ($arg :  Boolean) {
      setVariableValue("refreshTreePreloaded", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelSetExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditProduct) at APDProductManagementPage.pcf: line 104, column 39
    function action_32 () : void {
      APDProductDefinition.go((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata)
    }
    
    // 'action' attribute on MenuItem (id=FromTemplate) at APDProductManagementPage.pcf: line 112, column 105
    function action_34 () : void {
      if (selectedProduct.Visualized) {APDLoadProductTemplatePopup.push((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata)} else {APDLoadProductTemplatePopup.push((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementConcreteProductWrapper).ProductMetadata)}; refreshOnUpdate = true;
    }
    
    // 'action' attribute on MenuItem (id=FromXmind) at APDProductManagementPage.pcf: line 116, column 102
    function action_35 () : void {
      if (selectedProduct.Visualized) {APDLoadXmindPopup.push((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata)} else {APDLoadXmindPopup.push((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementConcreteProductWrapper).ProductMetadata)}; refreshOnUpdate = true;
    }
    
    // 'action' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 124, column 50
    function action_38 () : void {
      (selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata.maybeRemove()
    }
    
    // 'action' attribute on ToolbarButton (id=ExportTemplate) at APDProductManagementPage.pcf: line 131, column 39
    function action_41 () : void {
      (selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata.exportToClient()
    }
    
    // 'action' attribute on ToolbarButton (id=ExportGeneratedTemplate) at APDProductManagementPage.pcf: line 139, column 62
    function action_43 () : void {
      gw.apd.model.generate.xml.ProductTemplateGenerator.downloadXml(selectedProduct.CodeIdentifier)
    }
    
    // 'action' attribute on TextValue (id=ExpandAll) at APDProductManagementPage.pcf: line 157, column 55
    function action_44 () : void {
      apdTreeHelper.expandAll(productTree)
    }
    
    // 'action' attribute on TextValue (id=CollapseAll) at APDProductManagementPage.pcf: line 162, column 55
    function action_45 () : void {
      apdTreeHelper.collapseAll(productTree)
    }
    
    // 'action' attribute on ToolbarButton (id=EditProduct) at APDProductManagementPage.pcf: line 104, column 39
    function action_dest_33 () : pcf.api.Destination {
      return pcf.APDProductDefinition.createDestination((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata)
    }
    
    // 'available' attribute on ToolbarButton (id=EditProduct) at APDProductManagementPage.pcf: line 104, column 39
    function available_31 () : java.lang.Boolean {
      return selectedProduct.Visualized
    }
    
    // 'available' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 124, column 50
    function available_36 () : java.lang.Boolean {
      return selectedProduct.Visualized and (selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata.canRemove()
    }
    
    // 'available' attribute on ToolbarButton (id=ExportTemplate) at APDProductManagementPage.pcf: line 131, column 39
    function available_40 () : java.lang.Boolean {
      return selectedProduct.Visualized and (selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata.CanExport
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 124, column 50
    function confirmMessage_39 () : java.lang.String {
      return DisplayKey.get("Web.APD.RemoveProduct.Confirmation", selectedProduct.Name)
    }
    
    // RowTree (id=ProductRowTree) at APDProductManagementPage.pcf: line 176, column 45
    function containerLabel_55 (item :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 83, column 57
    function initialValue_28 () : gw.apd.APDProductTreeHelper {
      return new gw.apd.APDProductTreeHelper()
    }
    
    // 'initialValue' attribute on Variable at APDProductManagementPage.pcf: line 92, column 57
    function initialValue_29 () : gw.api.tree.RowTreeRootNode {
      var tree = selectedProduct.Visualized ? apdTreeHelper.createProductTree((selectedProduct as gw.apd.APDProductManagementPageHelper.ProductManagementAPDProductWrapper).APDProductMetadata, refreshOnUpdate) : null; refreshOnUpdate = false; return tree
    }
    
    // 'label' attribute on Verbatim (id=InfoMessage) at APDProductManagementPage.pcf: line 168, column 39
    function label_47 () : java.lang.String {
      return DisplayKey.get("Web.APD.ContentUnavailableMessage", selectedProduct.Name)
    }
    
    // 'value' attribute on TextCell (id=NodeName_Cell) at APDProductManagementPage.pcf: line 183, column 42
    function sortValue_48 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=NodeType_Cell) at APDProductManagementPage.pcf: line 187, column 79
    function sortValue_49 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Type")
    }
    
    // 'title' attribute on TitleBar (id=selectedProductTitle) at APDProductManagementPage.pcf: line 97, column 53
    function title_30 () : java.lang.String {
      return selectedProduct.Name
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDProductManagementPage.pcf: line 176, column 45
    function value_54 () : java.lang.Object {
      return productTree
    }
    
    // 'visible' attribute on ToolbarButton (id=RemoveProduct) at APDProductManagementPage.pcf: line 124, column 50
    function visible_37 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on ToolbarButton (id=ExportGeneratedTemplate) at APDProductManagementPage.pcf: line 139, column 62
    function visible_42 () : java.lang.Boolean {
      return selectedProduct.Installed
    }
    
    // 'visible' attribute on Verbatim (id=InfoMessage) at APDProductManagementPage.pcf: line 168, column 39
    function visible_46 () : java.lang.Boolean {
      return productTree == null
    }
    
    property get apdTreeHelper () : gw.apd.APDProductTreeHelper {
      return getVariableValue("apdTreeHelper", 2) as gw.apd.APDProductTreeHelper
    }
    
    property set apdTreeHelper ($arg :  gw.apd.APDProductTreeHelper) {
      setVariableValue("apdTreeHelper", 2, $arg)
    }
    
    property get productTree () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("productTree", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set productTree ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("productTree", 2, $arg)
    }
    
    property get refreshOnUpdate () : Boolean {
      return getVariableValue("refreshOnUpdate", 2) as Boolean
    }
    
    property set refreshOnUpdate ($arg :  Boolean) {
      setVariableValue("refreshOnUpdate", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductManagementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NodeName_Cell) at APDProductManagementPage.pcf: line 183, column 42
    function value_50 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=NodeType_Cell) at APDProductManagementPage.pcf: line 187, column 79
    function value_52 () : java.lang.String {
      return item.getAttributeValue("Type")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(3) as gw.xml.XMLNode
    }
    
    
  }
  
  
}