package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMRatingCumulPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMRatingCumulPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMRatingCumulPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, imPartSubtype :  typekey.IMCoveragePart) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_onEnter_0 (def :  pcf.IMPartCumulDetailsPanelSet_ContractorsEquipPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_onEnter_2 (def :  pcf.IMPartCumulDetailsPanelSet_IMAccountsRecPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_onEnter_4 (def :  pcf.IMPartCumulDetailsPanelSet_IMSignPart) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_refreshVariables_1 (def :  pcf.IMPartCumulDetailsPanelSet_ContractorsEquipPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_refreshVariables_3 (def :  pcf.IMPartCumulDetailsPanelSet_IMAccountsRecPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function def_refreshVariables_5 (def :  pcf.IMPartCumulDetailsPanelSet_IMSignPart) : void {
      def.refreshVariables(imLine)
    }
    
    // 'mode' attribute on PanelRef at IMRatingCumulPopup.pcf: line 21, column 31
    function mode_6 () : java.lang.Object {
      return imPartSubtype
    }
    
    // 'title' attribute on Popup (id=IMRatingCumulPopup) at IMRatingCumulPopup.pcf: line 8, column 100
    static function title_7 (imLine :  InlandMarineLine, imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return DisplayKey.get("Web.Policy.IM.CostDetailsFor",  imPartSubtype.DisplayName  )
    }
    
    override property get CurrentLocation () : pcf.IMRatingCumulPopup {
      return super.CurrentLocation as pcf.IMRatingCumulPopup
    }
    
    property get imLine () : InlandMarineLine {
      return getVariableValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setVariableValue("imLine", 0, $arg)
    }
    
    property get imPartSubtype () : typekey.IMCoveragePart {
      return getVariableValue("imPartSubtype", 0) as typekey.IMCoveragePart
    }
    
    property set imPartSubtype ($arg :  typekey.IMCoveragePart) {
      setVariableValue("imPartSubtype", 0, $arg)
    }
    
    
  }
  
  
}