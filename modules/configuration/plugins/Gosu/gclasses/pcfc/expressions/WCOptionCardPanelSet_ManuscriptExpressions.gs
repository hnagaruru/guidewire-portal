package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Manuscript.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_ManuscriptExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.Manuscript.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=Premium_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 21, column 45
    function currency_3 () : typekey.Currency {
      return wcLine.Branch.PreferredSettlementCurrency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Premium_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 21, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.ManuscriptPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextAreaInput (id=manuscriptDescription_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 29, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.ManuscriptOptionDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextAreaInput (id=manuscriptDescription_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 29, column 48
    function editable_5 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Premium_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 21, column 45
    function valueRoot_2 () : java.lang.Object {
      return wcLine
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Premium_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 21, column 45
    function value_0 () : gw.pl.currency.MonetaryAmount {
      return wcLine.ManuscriptPremium
    }
    
    // 'value' attribute on TextAreaInput (id=manuscriptDescription_Input) at WCOptionCardPanelSet.Manuscript.pcf: line 29, column 48
    function value_6 () : java.lang.String {
      return wcLine.ManuscriptOptionDesc
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}