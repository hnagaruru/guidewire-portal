package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartReviewPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartReviewPanelSet_ContractorsEquipPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartReviewPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 21, column 116
    function def_onEnter_1 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(contractorsEquipmentPart.ContrEquipPartCovs.toList(), contractorsEquipmentPart)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 21, column 116
    function def_refreshVariables_2 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(contractorsEquipmentPart.ContrEquipPartCovs.toList(), contractorsEquipmentPart)
    }
    
    // 'initialValue' attribute on Variable at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 14, column 43
    function initialValue_0 () : entity.ContractorsEquipPart {
      return imLine.ContractorsEquipPart
    }
    
    // 'value' attribute on PanelIterator at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 32, column 53
    function value_7 () : entity.ContractorsEquipment[] {
      return contractorsEquipmentPart.ContractorsEquipments
    }
    
    // 'visible' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 16, column 74
    function visible_3 () : java.lang.Boolean {
      return contractorsEquipmentPart.ContrEquipPartCovs.Count > 0
    }
    
    // 'visible' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 25, column 76
    function visible_8 () : java.lang.Boolean {
      return !imLine.ContractorsEquipPart.ContractorsEquipments.IsEmpty
    }
    
    property get contractorsEquipmentPart () : entity.ContractorsEquipPart {
      return getVariableValue("contractorsEquipmentPart", 0) as entity.ContractorsEquipPart
    }
    
    property set contractorsEquipmentPart ($arg :  entity.ContractorsEquipPart) {
      setVariableValue("contractorsEquipmentPart", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/contractorsequip/IMPartReviewPanelSet.ContractorsEquipPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartReviewPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 34, column 100
    function def_onEnter_5 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(contractorsEquipment.Coverages.toList(), contractorsEquipment)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 34, column 100
    function def_refreshVariables_6 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(contractorsEquipment.Coverages.toList(), contractorsEquipment)
    }
    
    // 'label' attribute on Verbatim at IMPartReviewPanelSet.ContractorsEquipPart.pcf: line 36, column 57
    function label_4 () : java.lang.String {
      return contractorsEquipment.DisplayName
    }
    
    property get contractorsEquipment () : entity.ContractorsEquipment {
      return getIteratedValue(1) as entity.ContractorsEquipment
    }
    
    
  }
  
  
}