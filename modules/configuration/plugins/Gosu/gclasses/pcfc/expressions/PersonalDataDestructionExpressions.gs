package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalDataDestructionExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=contactName_Cell) at PersonalDataDestruction.pcf: line 182, column 38
    function value_31 () : java.lang.String {
      return purgeHelper.readableString(otherContact)
    }
    
    property get otherContact () : com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node {
      return getIteratedValue(2) as com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=domainGraphRoot_Cell) at PersonalDataDestruction.pcf: line 207, column 36
    function value_35 () : java.lang.String {
      return purgeHelper.readableString(domainGraphPinnable as DestructionRootPinnable)
    }
    
    property get domainGraphPinnable () : entity.KeyableBean {
      return getIteratedValue(1) as entity.KeyableBean
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PinnableError_Cell) at PersonalDataDestruction.pcf: line 232, column 36
    function value_40 () : java.lang.String {
      return error.ReasonCode.toString()
    }
    
    // 'value' attribute on TextCell (id=PinnableReason_Cell) at PersonalDataDestruction.pcf: line 237, column 36
    function value_42 () : java.lang.String {
      return error.getMessage()
    }
    
    property get error () : gw.api.personaldata.purge.UnpurgeableReasonCollector.UnpurgeableReason {
      return getIteratedValue(1) as gw.api.personaldata.purge.UnpurgeableReasonCollector.UnpurgeableReason
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PinnableError_Cell) at PersonalDataDestruction.pcf: line 262, column 36
    function value_47 () : java.lang.String {
      return purgeHelper.readableString(allreasons)
    }
    
    // 'value' attribute on TextCell (id=PinnableReason_Cell) at PersonalDataDestruction.pcf: line 267, column 36
    function value_49 () : java.lang.String {
      return purgeHelper.PurgeTree.UnpurgeableReasonCollector.getReasonCodes(allreasons).join(",")
    }
    
    property get allreasons () : entity.DestructionRootPinnable {
      return getIteratedValue(1) as entity.DestructionRootPinnable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=entityName_Cell) at PersonalDataDestruction.pcf: line 347, column 73
    function valueRoot_69 () : java.lang.Object {
      return entityToObfuscate.EntityType
    }
    
    // 'value' attribute on TextCell (id=entityName_Cell) at PersonalDataDestruction.pcf: line 347, column 73
    function value_68 () : java.lang.String {
      return entityToObfuscate.EntityType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=empty4_Cell) at PersonalDataDestruction.pcf: line 357, column 141
    function value_71 () : java.lang.String {
      return entityToObfuscate.Deleted ? DisplayKey.get("Web.PersonalData.InternalTools.Purged") : ""
    }
    
    // 'value' attribute on RowIterator at PersonalDataDestruction.pcf: line 364, column 75
    function value_82 () : gw.pcf.tools.ObfuscationEntityFieldInfo[] {
      return entityToObfuscate.EntityFields.toTypedArray()
    }
    
    property get entityToObfuscate () : gw.pcf.tools.ObfuscationEntityInfo {
      return getIteratedValue(1) as gw.pcf.tools.ObfuscationEntityInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends IteratorEntry6ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=fieldName_Cell) at PersonalDataDestruction.pcf: line 371, column 59
    function valueRoot_76 () : java.lang.Object {
      return entityProperty
    }
    
    // 'value' attribute on TextCell (id=personaldatafield_Cell) at PersonalDataDestruction.pcf: line 368, column 153
    function value_73 () : java.lang.String {
      return entityProperty.IsPersonalData ? DisplayKey.get("Web.PersonalData.InternalTools.PersonalData") : ""
    }
    
    // 'value' attribute on TextCell (id=fieldName_Cell) at PersonalDataDestruction.pcf: line 371, column 59
    function value_75 () : java.lang.String {
      return entityProperty.FieldName
    }
    
    // 'value' attribute on TextCell (id=originalValue_Cell) at PersonalDataDestruction.pcf: line 374, column 75
    function value_78 () : java.lang.String {
      return entityProperty.OriginalValue?.toString()
    }
    
    // 'value' attribute on TextCell (id=obfuscatedValue_Cell) at PersonalDataDestruction.pcf: line 377, column 77
    function value_80 () : java.lang.String {
      return entityProperty.ObfuscatedValue?.toString()
    }
    
    property get entityProperty () : gw.pcf.tools.ObfuscationEntityFieldInfo {
      return getIteratedValue(2) as gw.pcf.tools.ObfuscationEntityFieldInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at PersonalDataDestruction.pcf: line 163, column 36
    function valueRoot_29 () : java.lang.Object {
      return accountWithMultipleContacts.Pinnable
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at PersonalDataDestruction.pcf: line 163, column 36
    function value_28 () : java.lang.String {
      return accountWithMultipleContacts.Pinnable.DisplayName
    }
    
    // 'value' attribute on RowIterator at PersonalDataDestruction.pcf: line 174, column 125
    function value_33 () : java.util.List<com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node> {
      return accountWithMultipleContacts.Parents.toList()
    }
    
    property get accountWithMultipleContacts () : com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node {
      return getIteratedValue(1) as com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalDataDestructionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=PurgeContactButton_Input) at PersonalDataDestruction.pcf: line 72, column 108
    function action_10 () : void {
      purgeHelper.purgeContact(contactPublicID)
    }
    
    // 'action' attribute on ButtonInput (id=AccountPreview_Input) at PersonalDataDestruction.pcf: line 89, column 102
    function action_14 () : void {
      purgeHelper.displayAccountToBePurged(accountNumber)
    }
    
    // 'action' attribute on ButtonInput (id=PurgeAccountButton_Input) at PersonalDataDestruction.pcf: line 93, column 108
    function action_15 () : void {
      purgeHelper.purgeAccount(accountNumber)
    }
    
    // 'action' attribute on ButtonInput (id=PolicyPreview_Input) at PersonalDataDestruction.pcf: line 115, column 102
    function action_22 () : void {
      purgeHelper.displayPolicyToBePurged(policyNumber, policyPublicID)
    }
    
    // 'action' attribute on ButtonInput (id=PurgePolicyButton_Input) at PersonalDataDestruction.pcf: line 119, column 107
    function action_23 () : void {
      purgeHelper.purgePolicy(policyNumber, policyPublicID)
    }
    
    // 'action' attribute on ButtonInput (id=PreviewObfuscation_Input) at PersonalDataDestruction.pcf: line 293, column 98
    function action_57 () : void {
      obfuscateHelper.loadUser(username)
    }
    
    // 'action' attribute on ButtonInput (id=Obfuscate_Input) at PersonalDataDestruction.pcf: line 297, column 103
    function action_58 () : void {
      obfuscateHelper.obfuscateUser(username)
    }
    
    // 'action' attribute on ButtonInput (id=PreviewContactObfuscation_Input) at PersonalDataDestruction.pcf: line 314, column 105
    function action_62 () : void {
      obfuscateHelper.loadUserContact(obfuscatePublicID)
    }
    
    // 'action' attribute on ButtonInput (id=ObfuscateContact_Input) at PersonalDataDestruction.pcf: line 318, column 110
    function action_63 () : void {
      obfuscateHelper.obfuscateUserContact(obfuscatePublicID)
    }
    
    // 'action' attribute on ButtonInput (id=ContactPreview_Input) at PersonalDataDestruction.pcf: line 68, column 102
    function action_9 () : void {
      purgeHelper.displayContactToBePurged(contactPublicID)
    }
    
    // 'def' attribute on PanelRef at PersonalDataDestruction.pcf: line 387, column 42
    function def_onEnter_86 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PersonalDataDestruction.pcf: line 387, column 42
    function def_refreshVariables_87 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PersonalDataDestruction.pcf: line 85, column 44
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PersonalDataDestruction.pcf: line 106, column 43
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyPublicID_Input) at PersonalDataDestruction.pcf: line 111, column 45
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPublicID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at PersonalDataDestruction.pcf: line 289, column 39
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ContactID_Input) at PersonalDataDestruction.pcf: line 310, column 48
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      obfuscatePublicID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ContactPublicID_Input) at PersonalDataDestruction.pcf: line 64, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      contactPublicID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at PersonalDataDestruction.pcf: line 14, column 60
    function initialValue_0 () : gw.pcf.tools.PersonalDataPurgeTestPageHelper {
      return new gw.pcf.tools.PersonalDataPurgeTestPageHelper()
    }
    
    // 'initialValue' attribute on Variable at PersonalDataDestruction.pcf: line 30, column 66
    function initialValue_1 () : gw.pcf.tools.PersonalDataObfuscationTestPageHelper {
      return new gw.pcf.tools.PersonalDataObfuscationTestPageHelper()
    }
    
    // 'label' attribute on AlertBar (id=purgeSucceededMessage) at PersonalDataDestruction.pcf: line 42, column 56
    function label_3 () : java.lang.Object {
      return purgeHelper.PurgeMessage
    }
    
    // 'label' attribute on AlertBar (id=obfuscateSucceededMessage) at PersonalDataDestruction.pcf: line 47, column 64
    function label_5 () : java.lang.Object {
      return obfuscateHelper.ObfuscateMessage
    }
    
    // 'onSelect' attribute on Card (id=PurgeTab) at PersonalDataDestruction.pcf: line 52, column 79
    function onSelect_53 () : void {
      obfuscateHelper.resetObfuscationHelper()
    }
    
    // 'onSelect' attribute on Card (id=ObfuscationTab) at PersonalDataDestruction.pcf: line 277, column 85
    function onSelect_85 () : void {
      purgeHelper.resetPurgeTree()
    }
    
    // Page (id=PersonalDataDestruction) at PersonalDataDestruction.pcf: line 10, column 98
    static function parent_89 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at PersonalDataDestruction.pcf: line 163, column 36
    function sortValue_27 (accountWithMultipleContacts :  com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node) : java.lang.Object {
      return accountWithMultipleContacts.Pinnable.DisplayName
    }
    
    // 'value' attribute on TextCell (id=PinnableError_Cell) at PersonalDataDestruction.pcf: line 232, column 36
    function sortValue_38 (error :  gw.api.personaldata.purge.UnpurgeableReasonCollector.UnpurgeableReason) : java.lang.Object {
      return error.ReasonCode.toString()
    }
    
    // 'value' attribute on TextCell (id=PinnableReason_Cell) at PersonalDataDestruction.pcf: line 237, column 36
    function sortValue_39 (error :  gw.api.personaldata.purge.UnpurgeableReasonCollector.UnpurgeableReason) : java.lang.Object {
      return error.getMessage()
    }
    
    // 'value' attribute on TextCell (id=PinnableError_Cell) at PersonalDataDestruction.pcf: line 262, column 36
    function sortValue_45 (allreasons :  entity.DestructionRootPinnable) : java.lang.Object {
      return purgeHelper.readableString(allreasons)
    }
    
    // 'value' attribute on TextCell (id=PinnableReason_Cell) at PersonalDataDestruction.pcf: line 267, column 36
    function sortValue_46 (allreasons :  entity.DestructionRootPinnable) : java.lang.Object {
      return purgeHelper.PurgeTree.UnpurgeableReasonCollector.getReasonCodes(allreasons).join(",")
    }
    
    // 'value' attribute on TextCell (id=empty4_Cell) at PersonalDataDestruction.pcf: line 357, column 141
    function sortValue_67 (entityToObfuscate :  gw.pcf.tools.ObfuscationEntityInfo) : java.lang.Object {
      return entityToObfuscate.Deleted ? DisplayKey.get("Web.PersonalData.InternalTools.Purged") : ""
    }
    
    // 'value' attribute on TextInput (id=dispositionFlag_Input) at PersonalDataDestruction.pcf: line 330, column 69
    function valueRoot_65 () : java.lang.Object {
      return obfuscateHelper
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PersonalDataDestruction.pcf: line 85, column 44
    function value_11 () : java.lang.String {
      return accountNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PersonalDataDestruction.pcf: line 106, column 43
    function value_16 () : java.lang.String {
      return policyNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyPublicID_Input) at PersonalDataDestruction.pcf: line 111, column 45
    function value_19 () : java.lang.String {
      return policyPublicID
    }
    
    // 'value' attribute on RowIterator (id=roots) at PersonalDataDestruction.pcf: line 156, column 123
    function value_34 () : java.util.List<com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node> {
      return purgeHelper.Accounts
    }
    
    // 'value' attribute on RowIterator (id=domainGraphRow) at PersonalDataDestruction.pcf: line 202, column 72
    function value_37 () : java.util.List<entity.KeyableBean> {
      return purgeHelper.DomainGraphPinnables
    }
    
    // 'value' attribute on RowIterator (id=ErrorIterator) at PersonalDataDestruction.pcf: line 226, column 124
    function value_44 () : java.util.List<gw.api.personaldata.purge.UnpurgeableReasonCollector.UnpurgeableReason> {
      return purgeHelper.PurgeTree.MustPurgeErrorReasons.toList()
    }
    
    // 'value' attribute on RowIterator (id=ErrorIterator2) at PersonalDataDestruction.pcf: line 256, column 84
    function value_51 () : java.util.List<entity.DestructionRootPinnable> {
      return purgeHelper.PurgeTree.UnpurgeableReasonCollector.Keys.toList()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at PersonalDataDestruction.pcf: line 289, column 39
    function value_54 () : java.lang.String {
      return username
    }
    
    // 'value' attribute on TextInput (id=ContactID_Input) at PersonalDataDestruction.pcf: line 310, column 48
    function value_59 () : java.lang.String {
      return obfuscatePublicID
    }
    
    // 'value' attribute on TextInput (id=ContactPublicID_Input) at PersonalDataDestruction.pcf: line 64, column 46
    function value_6 () : java.lang.String {
      return contactPublicID
    }
    
    // 'value' attribute on TextInput (id=dispositionFlag_Input) at PersonalDataDestruction.pcf: line 330, column 69
    function value_64 () : java.lang.String {
      return obfuscateHelper.UserContactDisposition
    }
    
    // 'value' attribute on RowIterator at PersonalDataDestruction.pcf: line 341, column 68
    function value_83 () : gw.pcf.tools.ObfuscationEntityInfo[] {
      return obfuscateHelper.BeansToObfuscate.toTypedArray()
    }
    
    // 'visible' attribute on AlertBar (id=purgeSucceededMessage) at PersonalDataDestruction.pcf: line 42, column 56
    function visible_2 () : java.lang.Boolean {
      return purgeHelper.PurgeMessage.HasContent
    }
    
    // 'visible' attribute on AlertBar (id=obfuscateSucceededMessage) at PersonalDataDestruction.pcf: line 47, column 64
    function visible_4 () : java.lang.Boolean {
      return obfuscateHelper.ObfuscateMessage.HasContent
    }
    
    // 'visible' attribute on PanelColumn at PersonalDataDestruction.pcf: line 125, column 61
    function visible_52 () : java.lang.Boolean {
      return purgeHelper.PreviewTreeNode != null
    }
    
    // 'visible' attribute on PanelColumn at PersonalDataDestruction.pcf: line 324, column 66
    function visible_84 () : java.lang.Boolean {
      return obfuscateHelper.BeansToObfuscate != null
    }
    
    override property get CurrentLocation () : pcf.PersonalDataDestruction {
      return super.CurrentLocation as pcf.PersonalDataDestruction
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get contactPublicID () : String {
      return getVariableValue("contactPublicID", 0) as String
    }
    
    property set contactPublicID ($arg :  String) {
      setVariableValue("contactPublicID", 0, $arg)
    }
    
    property get obfuscateHelper () : gw.pcf.tools.PersonalDataObfuscationTestPageHelper {
      return getVariableValue("obfuscateHelper", 0) as gw.pcf.tools.PersonalDataObfuscationTestPageHelper
    }
    
    property set obfuscateHelper ($arg :  gw.pcf.tools.PersonalDataObfuscationTestPageHelper) {
      setVariableValue("obfuscateHelper", 0, $arg)
    }
    
    property get obfuscatePublicID () : String {
      return getVariableValue("obfuscatePublicID", 0) as String
    }
    
    property set obfuscatePublicID ($arg :  String) {
      setVariableValue("obfuscatePublicID", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get policyPublicID () : String {
      return getVariableValue("policyPublicID", 0) as String
    }
    
    property set policyPublicID ($arg :  String) {
      setVariableValue("policyPublicID", 0, $arg)
    }
    
    property get purgeHelper () : gw.pcf.tools.PersonalDataPurgeTestPageHelper {
      return getVariableValue("purgeHelper", 0) as gw.pcf.tools.PersonalDataPurgeTestPageHelper
    }
    
    property set purgeHelper ($arg :  gw.pcf.tools.PersonalDataPurgeTestPageHelper) {
      setVariableValue("purgeHelper", 0, $arg)
    }
    
    property get username () : String {
      return getVariableValue("username", 0) as String
    }
    
    property set username ($arg :  String) {
      setVariableValue("username", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PersonalDataDestruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PurgePreviewTreeExpressionsImpl extends PersonalDataDestructionExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'elementLabel' attribute on TreeView (id=PurgePreviewTree) at PersonalDataDestruction.pcf: line 139, column 56
    function elementLabel_24 () : java.lang.Object {
      return purgeHelper.readableString(element as com.guidewire.pc.domain.personaldata.purge.PersonalDataPurgeTree.Node)
    }
    
    // 'elementName' attribute on TreeView (id=PurgePreviewTree) at PersonalDataDestruction.pcf: line 139, column 56
    function elementValueSetter_25 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'value' attribute on TreeView (id=PurgePreviewTree) at PersonalDataDestruction.pcf: line 139, column 56
    function value_26 () : gw.api.tree.TreeNode {
      return purgeHelper.PreviewTreeNode
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(1) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  
}