package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.multiselect_readonly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableModalCell_multiselect_readonlyExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableModalCell.multiselect_readonly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableModalCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateTableModalCell.multiselect_readonly.pcf: line 20, column 58
    function initialValue_0 () : gw.rating.rtm.domain.table.MultiSelectCell {
      return cell as gw.rating.rtm.domain.table.MultiSelectCell
    }
    
    // 'label' attribute on Link (id=LinkId) at RateTableModalCell.multiselect_readonly.pcf: line 27, column 71
    function label_1 () : java.lang.Object {
      return multiSelectCell.displayMultiValueReadOnly(valueProvider)
    }
    
    // 'tooltip' attribute on Link (id=LinkId) at RateTableModalCell.multiselect_readonly.pcf: line 27, column 71
    function tooltip_2 () : java.lang.String {
      return multiSelectCell.displayMultiValue(valueProvider)
    }
    
    property get cell () : gw.rating.rtm.domain.table.RateTableCell {
      return getRequireValue("cell", 0) as gw.rating.rtm.domain.table.RateTableCell
    }
    
    property set cell ($arg :  gw.rating.rtm.domain.table.RateTableCell) {
      setRequireValue("cell", 0, $arg)
    }
    
    property get multiSelectCell () : gw.rating.rtm.domain.table.MultiSelectCell {
      return getVariableValue("multiSelectCell", 0) as gw.rating.rtm.domain.table.MultiSelectCell
    }
    
    property set multiSelectCell ($arg :  gw.rating.rtm.domain.table.MultiSelectCell) {
      setVariableValue("multiSelectCell", 0, $arg)
    }
    
    property get valueProvider () : gw.rating.rtm.valueprovider.RateTableCellValueProvider {
      return getRequireValue("valueProvider", 0) as gw.rating.rtm.valueprovider.RateTableCellValueProvider
    }
    
    property set valueProvider ($arg :  gw.rating.rtm.valueprovider.RateTableCellValueProvider) {
      setRequireValue("valueProvider", 0, $arg)
    }
    
    property get valueRequired () : boolean {
      return getRequireValue("valueRequired", 0) as java.lang.Boolean
    }
    
    property set valueRequired ($arg :  boolean) {
      setRequireValue("valueRequired", 0, $arg)
    }
    
    
  }
  
  
}