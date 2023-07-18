package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/ReinsuranceMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinsuranceMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/ReinsuranceMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ReinsuranceMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewFacMenuAction) at ReinsuranceMenuActions.pcf: line 32, column 86
    function action_4 () : void {
      NewAgreementPage.go(facAgreementType)
    }
    
    // 'action' attribute on MenuItem (id=NewFacMenuAction) at ReinsuranceMenuActions.pcf: line 32, column 86
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewAgreementPage.createDestination(facAgreementType)
    }
    
    // 'label' attribute on MenuItem (id=NewFacMenuAction) at ReinsuranceMenuActions.pcf: line 32, column 86
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Reinsurance.New", facAgreementType)
    }
    
    property get facAgreementType () : typekey.RIAgreement {
      return getIteratedValue(1) as typekey.RIAgreement
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/ReinsuranceMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReinsuranceMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewTreatyMenuItem) at ReinsuranceMenuActions.pcf: line 18, column 80
    function action_0 () : void {
      NewAgreementPage.go(treatyType)
    }
    
    // 'action' attribute on MenuItem (id=NewTreatyMenuItem) at ReinsuranceMenuActions.pcf: line 18, column 80
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewAgreementPage.createDestination(treatyType)
    }
    
    // 'label' attribute on MenuItem (id=NewTreatyMenuItem) at ReinsuranceMenuActions.pcf: line 18, column 80
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.Reinsurance.New", treatyType)
    }
    
    property get treatyType () : typekey.RIAgreement {
      return getIteratedValue(1) as typekey.RIAgreement
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/ReinsuranceMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewProgram) at ReinsuranceMenuActions.pcf: line 38, column 71
    function action_8 () : void {
      NewProgramPage.go()
    }
    
    // 'action' attribute on MenuItem (id=NewProgram) at ReinsuranceMenuActions.pcf: line 38, column 71
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewProgramPage.createDestination()
    }
    
    // 'value' attribute on MenuItemIterator at ReinsuranceMenuActions.pcf: line 14, column 63
    function value_3 () : java.util.List<typekey.RIAgreement> {
      return typekey.RIAgreement.getTypeKeys(false).where(\ r -> r.hasCategory(typekey.ArrangementType.TC_TREATY) )
    }
    
    // 'value' attribute on MenuItemIterator at ReinsuranceMenuActions.pcf: line 28, column 63
    function value_7 () : java.util.List<typekey.RIAgreement> {
      return typekey.RIAgreement.getTypeKeys(false).where(\ r -> r.hasCategory(typekey.ArrangementType.TC_FACULTATIVE) )
    }
    
    
  }
  
  
}