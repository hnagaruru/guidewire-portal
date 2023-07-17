package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDInstalledEditionsPanelRowExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDInstalledEditionsPanelRowExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // RowTree (id=ProductRowTree) at APDInstalledEditionsPanelRow.pcf: line 37, column 51
    function containerLabel_10 (item :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 44, column 30
    function sortValue_0 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=EditionEffDate_Cell) at APDInstalledEditionsPanelRow.pcf: line 48, column 76
    function sortValue_1 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("EffectiveDate")
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 75, column 67
    function sortValue_11 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=RuleElement_Cell) at APDInstalledEditionsPanelRow.pcf: line 79, column 70
    function sortValue_12 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Element")
    }
    
    // 'value' attribute on TextCell (id=RuleType_Cell) at APDInstalledEditionsPanelRow.pcf: line 83, column 71
    function sortValue_13 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("RuleType")
    }
    
    // 'value' attribute on TextCell (id=RuleIssue_Cell) at APDInstalledEditionsPanelRow.pcf: line 87, column 68
    function sortValue_14 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Issue")
    }
    
    // 'value' attribute on TextCell (id=EditionRules_Cell) at APDInstalledEditionsPanelRow.pcf: line 52, column 70
    function sortValue_2 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Changes")
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 111, column 30
    function sortValue_26 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=EditionEffDate_Cell) at APDInstalledEditionsPanelRow.pcf: line 115, column 76
    function sortValue_27 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("EffectiveDate")
    }
    
    // 'value' attribute on TextCell (id=EditionRules_Cell) at APDInstalledEditionsPanelRow.pcf: line 119, column 70
    function sortValue_28 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Changes")
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 141, column 67
    function sortValue_37 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=RuleElement_Cell) at APDInstalledEditionsPanelRow.pcf: line 145, column 70
    function sortValue_38 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Element")
    }
    
    // 'value' attribute on TextCell (id=RuleType_Cell) at APDInstalledEditionsPanelRow.pcf: line 149, column 71
    function sortValue_39 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("RuleType")
    }
    
    // 'value' attribute on TextCell (id=RuleIssue_Cell) at APDInstalledEditionsPanelRow.pcf: line 153, column 68
    function sortValue_40 (item :  gw.xml.XMLNode) : java.lang.Object {
      return item.getAttributeValue("Issue")
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDInstalledEditionsPanelRow.pcf: line 69, column 47
    function value_23 () : java.lang.Object {
      return invalidRulesTreePreloaded
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDInstalledEditionsPanelRow.pcf: line 104, column 51
    function value_35 () : java.lang.Object {
      return installedEditionTreeActivated
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDInstalledEditionsPanelRow.pcf: line 135, column 47
    function value_49 () : java.lang.Object {
      return invalidRulesTreeActivated
    }
    
    // 'value' attribute on RowTree (id=ProductRowTree) at APDInstalledEditionsPanelRow.pcf: line 37, column 51
    function value_9 () : java.lang.Object {
      return installedEditionTreePreloaded
    }
    
    // 'visible' attribute on PanelSet at APDInstalledEditionsPanelRow.pcf: line 58, column 52
    function visible_25 () : java.lang.Boolean {
      return invalidRulesTreePreloadedVisible
    }
    
    // 'visible' attribute on PanelSet at APDInstalledEditionsPanelRow.pcf: line 125, column 52
    function visible_51 () : java.lang.Boolean {
      return invalidRulesTreeActivatedVisible
    }
    
    property get installedEditionTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("installedEditionTreeActivated", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("installedEditionTreeActivated", 0, $arg)
    }
    
    property get installedEditionTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("installedEditionTreePreloaded", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set installedEditionTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("installedEditionTreePreloaded", 0, $arg)
    }
    
    property get invalidRulesTreeActivated () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("invalidRulesTreeActivated", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set invalidRulesTreeActivated ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("invalidRulesTreeActivated", 0, $arg)
    }
    
    property get invalidRulesTreeActivatedVisible () : Boolean {
      return getRequireValue("invalidRulesTreeActivatedVisible", 0) as Boolean
    }
    
    property set invalidRulesTreeActivatedVisible ($arg :  Boolean) {
      setRequireValue("invalidRulesTreeActivatedVisible", 0, $arg)
    }
    
    property get invalidRulesTreePreloaded () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("invalidRulesTreePreloaded", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set invalidRulesTreePreloaded ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("invalidRulesTreePreloaded", 0, $arg)
    }
    
    property get invalidRulesTreePreloadedVisible () : Boolean {
      return getRequireValue("invalidRulesTreePreloadedVisible", 0) as Boolean
    }
    
    property set invalidRulesTreePreloadedVisible ($arg :  Boolean) {
      setRequireValue("invalidRulesTreePreloadedVisible", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntry2ExpressionsImpl extends APDInstalledEditionsPanelRowExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 75, column 67
    function value_15 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=RuleElement_Cell) at APDInstalledEditionsPanelRow.pcf: line 79, column 70
    function value_17 () : java.lang.String {
      return item.getAttributeValue("Element")
    }
    
    // 'value' attribute on TextCell (id=RuleType_Cell) at APDInstalledEditionsPanelRow.pcf: line 83, column 71
    function value_19 () : java.lang.String {
      return item.getAttributeValue("RuleType")
    }
    
    // 'value' attribute on TextCell (id=RuleIssue_Cell) at APDInstalledEditionsPanelRow.pcf: line 87, column 68
    function value_21 () : java.lang.String {
      return item.getAttributeValue("Issue")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntry3ExpressionsImpl extends APDInstalledEditionsPanelRowExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 111, column 30
    function value_29 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=EditionEffDate_Cell) at APDInstalledEditionsPanelRow.pcf: line 115, column 76
    function value_31 () : java.lang.String {
      return item.getAttributeValue("EffectiveDate")
    }
    
    // 'value' attribute on TextCell (id=EditionRules_Cell) at APDInstalledEditionsPanelRow.pcf: line 119, column 70
    function value_33 () : java.lang.String {
      return item.getAttributeValue("Changes")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntry4ExpressionsImpl extends APDInstalledEditionsPanelRowExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 141, column 67
    function value_41 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=RuleElement_Cell) at APDInstalledEditionsPanelRow.pcf: line 145, column 70
    function value_43 () : java.lang.String {
      return item.getAttributeValue("Element")
    }
    
    // 'value' attribute on TextCell (id=RuleType_Cell) at APDInstalledEditionsPanelRow.pcf: line 149, column 71
    function value_45 () : java.lang.String {
      return item.getAttributeValue("RuleType")
    }
    
    // 'value' attribute on TextCell (id=RuleIssue_Cell) at APDInstalledEditionsPanelRow.pcf: line 153, column 68
    function value_47 () : java.lang.String {
      return item.getAttributeValue("Issue")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDInstalledEditionsPanelRow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends APDInstalledEditionsPanelRowExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EditionName_Cell) at APDInstalledEditionsPanelRow.pcf: line 44, column 30
    function value_3 () : java.lang.String {
      return item.getAttributeValue("Name")
    }
    
    // 'value' attribute on TextCell (id=EditionEffDate_Cell) at APDInstalledEditionsPanelRow.pcf: line 48, column 76
    function value_5 () : java.lang.String {
      return item.getAttributeValue("EffectiveDate")
    }
    
    // 'value' attribute on TextCell (id=EditionRules_Cell) at APDInstalledEditionsPanelRow.pcf: line 52, column 70
    function value_7 () : java.lang.String {
      return item.getAttributeValue("Changes")
    }
    
    property get item () : gw.xml.XMLNode {
      return getIteratedValue(1) as gw.xml.XMLNode
    }
    
    
  }
  
  
}